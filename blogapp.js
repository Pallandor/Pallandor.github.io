// Testing Browserify style bundling build
var m = require('moment');
var g = require('github-api');

// For purposes of adding a blog post: 
var table = {
    localPostsTotal: null,
    render: function tableRenderer(blog) {
        // Track the locally rendered table's total posts

        // if table never rendered... localPosts=blogposts
        // but if table was rendered... then compare localPosts vs blogPosts
        // and the array to use will be a sliced vers of blogPosts

        // CRAP I need a custom web server that accepts POST requests
        // so I can update database.json... 
        // like express app.post('url', function(){...THE STUFF TO DO...}); 

        // But its hosted on github. just do a git api call to update
        // the database.json file like git add git push etc.. 
        // 


        blog.blogPosts.forEach(function(post) {
            $('.blog-table-body').append('<tr><th>' + post.number + '</th><td>' + post.date + '</td><td>' + post.content + '</td></tr>');
        });
    }
};

// $ document.ready
$(function() {

    // setInterval()

    // Render blog table with current blog posts
    $.get('/database.json', function(data) {
        // If jQuery doesn't automatically return a JS object, parse the JSON string
        var blogData = typeof data === 'string' ? JSON.parse(data) : data;
        table.render(blogData);
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


    // Let's test GIT api
    // But if this code is not obfuscated, 
    // when I do the authentication part... 
    // it would need 
    // I can just use limited scope personal access token. 
    // $.ajax({
    //     method: "PUT",
    //     url: "https://api.github.com/repos/Pallandor/Pallandor.github.io/contents/test.json"
    //     data: {
    //         path: 'test.json',
    //         message: 'Commit message for test GIT API update of test.json file',
    //         content: window.btoa('{"did it replace":"we will find out"}'),
    //         sha: '0dc205cbdaa5dcd142a43d8d4661bc534c98bad9'
    //     }
    // })

    // USING: Github api library. 
    // Have to reveal limited access token ugh. 
    var github = new g.Github({
    	token: 'd838b2b169dae465506acfe8817a4c0b1cc69f8d',
    	auth: 'oauth'
    });

    var repo = github.getRepo('Pallandor','Pallandor.github.io');

    repo.getRef('heads/master', function(err, sha) {
        console.log('the sha of my Pallandor.github.io repo is: ' + sha);
    });

    // var options = {
    //     author: { name: 'Author Name', email: 'author@example.com' },
    //     committer: { name: 'Committer Name', email: 'committer@example.com' },
    //     encode: true // Whether to base64 encode the file. (default: true)
    // }
    // repo.write('master', 'path/to/file', 'YOUR_NEW_CONTENTS', 'YOUR_COMMIT_MESSAGE', options, function(err) {});

});
