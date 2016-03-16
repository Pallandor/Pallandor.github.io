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
                alert('repo write to database.json was successful!');
            });


        });

        // if success html not yet added to result div, add it, then show.
        var res = $('.result-container').html();
        if (!res.length) {
            $('.result-container').html('<div class="alert alert-success" role="alert">You have successfully submitted your blog post!</div>');
        }
        $('form').hide();
        $('.result-container').show();
    }

};

// $ document.ready
$(function() {

    var pollDatabase = function() {
        table.render();
        setTimeout(pollDatabase, 5000);
    };

    pollDatabase();

    // Objects for persisting state in jQuery.data(); 
    var s = { text: 'Back to Blog Posts', data: 'on-submit-page' },
        v = { text: 'Add Blog Post', data: 'on-viewing-page' };
    // Default start on-viewing-page
    $('.show-form').data(v);

    //'on-submit-page'
    $('.show-form').on('click', function() {
        // $('form').toggle();
        // $('table').toggle();

        var page = $('.show-form').data();

        if (page.data === 'on-viewing-page') { // i.e. going-to-submit-page
            $('table').hide();
            $('form').show();
            $('.show-form').text(s.text); // Someone mentioned not to use .text due to mem leaks? Why? 
            $('.show-form').data(s);
        } else { //i.e. going-to-viewing-page
            $('form').hide();
            $('.result-container').hide(); // don't toggle. make explicit shows/hides. 
            $('table').show();
            $('.show-form').text(v.text);
            $('.show-form').data(v);
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
    });

});
