// For purposes of adding a blog post: 
// var localPostsTotal;
// var renderTable = function(blog) {
//     blog.blogPosts.forEach(function(post) {
//         $('.blog-table-body').append('<tr><th>' + post.number + '</th><td>' + post.date + '</td><td>' + post.content + '</td></tr>');
//     });
// };

// $ document.ready
$(function() {

    // Render blog table with current blog posts
    $.get('/database.json', function(data) {

    	console.log('is this get request running?');
    	
        // If jQuery doesn't automatically return a JS object, parse the JSON string
        var blogData = typeof data === 'string' ? JSON.parse(data) : data;
        // localPostsTotal = blogData.totalBlogPosts;

        blogData.blogPosts.forEach(function(post) {
            $('.blog-table-body').append('<tr><th>' + post.number + '</th><td>' + post.date + '</td><td>' + post.content + '</td></tr>');
        });
    });

    // Add blog post
    // 1. Update database.json
    // 2. re - render the entire table ? yuck..OR
    // manually add to table in this instance ? OR
    // have blog continually check
    // if localPostsTotal which tracks
    // the recently rendered tables posts number, is less than
    // totalBlogPosts on the database.json(get that data again).
    // IF it is, cycle through the difference and render those posts. 

});
