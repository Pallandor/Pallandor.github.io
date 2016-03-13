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
        repo.read('master', 'database.json', function(err, existingBlog) {
            if (err) throw err;

            // already returns existingBlog as JSON.parsed workable js obj 

            //prepared updated database object to overwrite existing database.json
            // remenerbt ot json stringify before sending...
            existingBlog.blogPosts.push({
                number: existingBlog.nextBlogNumber,
                date: moment().format('MMMM Do YYYY, h:mm:ss'),
                content: formContent.post
                    // replace above ref with 'this', sort out how to.
            });

            existingBlog.totalBlogPosts++;
            existingBlog.nextBlogNumber++;

            existingBlog = JSON.stringify(existingBlog);

            repo.write('master', 'database.json', existingBlog, 'Testing commit with table add method on testjson re databasejson duplicate', options, function(err) {
                if (err) throw err;
            });
        });


        // repo.getRef('heads/master', function(err, sha) {
        //     if (err) throw err;
        //     console.log('the sha of my Pallandor.github.io repo is: ' + sha);
        // });
    }




    // // GITHUB WORKS. BROWSERIFY WORKS. 


};

// $ document.ready
$(function() {


    var pollDatabase = function() {
        table.render();
        setTimeout(pollDatabase, 5000);
    };

    pollDatabase();

    // Objects for Jquery data persistence to elements - for toggling button text purposes 
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
        }

    });

    $('form').on('submit', function(event) {
        event.preventDefault();
        console.log('Submit button press attempted - version I\'m testing now');

        // grab the text for the blog post and pass it to table.add('blogtext'); 
        // could for .each on a general or general inputs, then .val retrieval per. 
        // but only 2 els in this case so grab individually.
        var formContent = {
            post: $('#input-blog').val(),
            token: $('#input-token').val()
        };
        table.add(formContent);

        // Change this
        $('form').html('<div class="alert alert-success" role="alert">You have successfully submitted your blog post!</div>');
    });

    // Add blog post
    // 1. Update database.json
    // 2. re - render the entire table ? yuck..OR
    // manually add to table in this instance ? OR
    // have blog continually check
    // if localPostsTotal which tracks
    // the recently rendered tables posts number, is less than
    // totalBlogPosts on the database.json(get that data again).
    // IF it is, cycle through the difference 
    // i.e. slice the array ...  
    // and render those posts. 

    // USING: Github api library. 
    // Have to reveal limited access token ugh. 
    // -------- ALL WORKING FROM BELOW HERE -------
    // // WORKING GITHUB API STUFF: 
    // var github = new Github({
    //     // obfuscated so Github won't pick up and delete auhtorisation, for testing only. 
    //     token: window.atob('ZmY1MjJlNjNlNGZiYjg1N2JjZDgzNGM4ODMzMzg3NzQ3NTBjYTUzMg=='),
    //     auth: 'oauth'
    // });

    // var repo = github.getRepo('Pallandor', 'Pallandor.github.io');

    // repo.getRef('heads/master', function(err, sha) {
    //     if (err) throw err;
    //     console.log('the sha of my Pallandor.github.io repo is: ' + sha);
    // });

    // // GITHUB WORKS. BROWSERIFY WORKS. 

    // var options = {
    //     author: { name: 'Pallandor', email: 'roger.sejas@gmail.com' },
    //     committer: { name: 'Pallandor', email: 'roger.sejas@gmail.com' },
    //     encode: true // Whether to base64 encode the file. (default: true)
    // };

    // repo.write('master', 'test.json', '{"see if it":"works in overiwting via commit"}', 'Testing commit via GIT API re test.json', options, function(err) {
    //     if (err) throw err;
    // });
});
