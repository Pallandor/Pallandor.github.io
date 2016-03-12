// $ document.ready
$(function() {

    $.get('/database.json', function(data) {

        // If jQuery doesn't automatically return a JS object, parse the JSON string
        var blogData = typeof data === 'string' ? JSON.parse(data) : data;

        var blogNumber = blogData.nextBlogNumber;
        // THEN update nextBlogNumber in database.json! 

        // INVESTIGATE: Properly using node_modules (require lib?)
        var blogDate = moment().format('MMMM Do YYYY, h:mm:ss');

        $('.blog-table-body').append('<tr><th>' + blogNumber + '</th><td>' + blogDate + '</td><td>Loading...</td></tr>')

    });
});
