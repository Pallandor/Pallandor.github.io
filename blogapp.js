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
        // the database object like
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

});
