// Testing Browserify style bundling build
var moment = require('moment');
var Github = require('github-api'); // The expected start function Github gets exported. So no need to
// call g.Github just assign it to Github. Like that. 

// For purposes of adding a blog post: 
var table = {
    localPostsTotal: null,
    render: function tableRenderer() {
        // Alternatively, could bind the callback passed into $.get or call it linked to the outer this
        // e.g. x.call(this); Actually can't call, that invokes. Bind would return a bound version of the
        // function though. 
        var blog, that = this;
        // Grab database.json table
        $.get('/database.json', function(data) {
            // If jQuery doesn't automatically return a JS object, parse the JSON string
            blog = typeof data === 'string' ? JSON.parse(data) : data;

            // diffing operation. 
            if (that.localPostsTotal) { // if localPostsTotal has a value i.e. table was at least rendered once..
                blog.blogPosts = blog.blogPosts.slice(that.localPostsTotal); // use an array containing only
                // blog posts not yet rendered. 
            }

            // Render the diffed array into the table
            blog.blogPosts.forEach(function(post) {
                $('.blog-table-body').append('<tr><th>' + post.number + '</th><td>' + post.date + '</td><td>' + post.content + '</td></tr>');
            });

            //Set localPostsTotal based on table currently rendered
            that.localPostsTotal = blog.totalBlogPosts;

        });
    },
    add: function(formContent) {
        var github = new Github({
            token: formContent.token,
            auth: 'oauth'
        });

        var repo = github.getRepo('Pallandor', 'Pallandor.github.io');

        var options = {
            author: { name: 'Pallandor', email: 'roger.sejas@gmail.com' },
            committer: { name: 'Pallandor', email: 'roger.sejas@gmail.com' },
            encode: true // Whether to base64 encode the file. (default: true)
        };

        // before you write the new content. you need ot grab the original database.json
        // alt doing it as a repo.read rather than AJAX call
        repo.read('master', 'database.json', function(err, existingBlog) {
            if (err) throw err;

            // already returns existingBlog as JSON.parsed workable js obj 

            //prepared updated database object to overwrite existing database.json
            // remenerbt ot json stringify before sending...
            existingBlog.blogPosts.push({
                number: existingBlog.nextBlogNumber,
                date: moment().format('MMMM Do YYYY, h:mm:ss'),
                title: formContent.title,
                content: formContent.post
                    // replace above ref with 'this', sort out how to.
            });

            existingBlog.totalBlogPosts++;
            existingBlog.nextBlogNumber++;
            existingBlog = JSON.stringify(existingBlog);

            // ASYNC flow is correct, write on successful repo.read event. 
            repo.write('master', 'database.json', existingBlog, 'Adding new blog post', options, function(err) {
                if (err) throw err;
            });

            // if success html already added to result div, then just toggle display. else add it. 
            var res = $('.result-container').html();
            console.log('checking what resul-container.html() val and length is');
            console.log(res);
            console.log(res.length);
            if (!res.length) {
                $('.result-container').html('<div class="alert alert-success" role="alert">You have successfully submitted your blog post!</div>');
                console.log('did it still go through assuming res.length is 0-here');
            }

            alert('alert happened. This should happen before the click on Back to blog posts resolves, shouldn it? i assumed it would be a blocking op'); 

            $('form').hide();
            $('.result-container').show();
            // pretty sure html will return array of jquery objects(?) of the HTML elements added. 
            // maybe can chain, research more into jQuery if returns jQuery element initially started with


        });
    }

};

// $ document.ready
$(function() {

    var pollDatabase = function() {
        table.render();
        setTimeout(pollDatabase, 5000);
    };

    pollDatabase();

    // Objects for Jquery data persistence added to elements 
    // via jquery.data method - for toggling button text purposes 
    var s = { text: 'Back to Blog Posts', data: 'on-submit-page' },
        v = { text: 'Add Blog Post', data: 'on-viewing-page' };
    // Default starts on blog posts.
    $('.show-form').data(v);

    //'on-submit-page'
    $('.show-form').on('click', function() {
        $('form').toggle();
        $('table').toggle();

        var page = $('.show-form').data();

        if (page.data === 'on-viewing-page') {
            $('.show-form').text(s.text); // Someone mentioned not to use .text due to mem leaks? Why? 
            $('.show-form').data(s);
        } else {
            $('.show-form').text(v.text);
            $('.show-form').data(v);
            $('.result-container').hide(); // don't toggle. make explicit shows/hides. 
        }

    });

    $('form').on('submit', function(event) {
        event.preventDefault();

        var formContent = {
            title: $('#input-title').val(),
            post: $('#input-blog').val(),
            token: $('#input-token').val()
        };

        table.add(formContent);
        alert('a process in SUBMIT-CLICK handler');

        // ASYNC ISSUE: WHAT IF TABLE.ADD OPERATION TAKES LONGER TO RENDER THAN
        // JQUERY ADDDING THE SUCCESS ALERT? SUCCESSFULLY ALERTED BEFORE TABLE RENDERED. 
        // SUCCESS LOGIC WOULD NEED TO BE INCLUDED INSIDE TABLE.ADD 

    });

});
