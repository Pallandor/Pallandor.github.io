var moment = require('moment');
var Github = require('github-api');
console.log('repo read error handling and button states');

// for managing submit btn states, EXTEND THIS LATER for managing state of the add blog post, back to blog posts btn states. 
var states = {
    btn: {
        submit: {
            normal: 'Submit Post',
            loading: '<i class="fa fa-refresh fa-spin"></i> Processing Request'
        },
        addBack: {
            onBlog: {
                text: 'Add Blog Post',
                //currentLocation: 
            },
            onForm: {
                text: 'Back to Blog Posts'
            },
            currentLocation: 'onBlog'
        }
    },
    alert: {
        success: '<div class="alert alert-success" role="alert">You have successfully submitted your blog post!</div>',
        fail: '<div class="alert alert-warning" role="alert">Oops! Something went wrong, you should try again!</div>'
    }
};

var table = {
    localPostsTotal: null,
    render: function tableRenderer() {
        var blog, that = this;

        // this is serving back a cached database.json, modify to full $.ajax request to set cache to false. 
        $.ajax({
                url: '/database.json',
                dataType: 'json',
                cache: false
            })
            .done(function(blog) {
                // if table has rendered before, only render new posts. 
                that.localPostsTotal && (blog.blogPosts = blog.blogPosts.slice(that.localPostsTotal));

                // Minimise DOM ops while rendering by composing new posts to str rather than changing DOM per new post 
                var str = '';
                //Render table earliest to oldest
                for (var i = blog.blogPosts.length - 1; i >= 0; i--) {
                    var post = blog.blogPosts[i];
                    str += '<tr><th>' + post.number + '</th><td>' + post.date + '</td><td>' + post.content + '</td></tr>';
                }
                $('.blog-table').prepend(str);
                that.localPostsTotal = blog.totalBlogPosts;
            })

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
            encode: true
        };

        repo.read('master', 'database.json', function(err, existingBlog) {
            if (err) {
                console.log('a read repo error');
                // prob need to show result container.
                $('.result-container').html(states.alert.fail);
                $('.result-container').show();
                // also return them back to the form, but not reset. 
                $('.submit-button').html(states.btn.submit.normal);
                $('.form-group').show();
                throw err;
            }

            existingBlog.blogPosts.push({
                number: existingBlog.nextBlogNumber,
                date: moment().format('MMMM Do YYYY, h:mm:ss'),
                title: formContent.title,
                content: formContent.post
            });

            existingBlog.totalBlogPosts++;
            existingBlog.nextBlogNumber++;
            existingBlog = JSON.stringify(existingBlog);

            repo.write('master', 'database.json', existingBlog, 'Adding new blog post', options, function(err) {
                if (err) {
                    console.log('a write repo err');
                    // write repo errors when there's no ouath token passed at all, it seems.
                    $('.result-container').html(states.alert.fail);
                    $('.result-container').show();
                    // also return them back to the form, but not reset. 
                    $('.submit-button').html(states.btn.submit.normal);
                    $('.form-group').show();
                    throw err;
                }
                // change to modals once this works. 
                $('.result-container').html(states.alert.success);
                $('.result-container').show();

                $('.submit-button').html(states.btn.submit.normal);
                $('form')[0].reset();
                $('.form-group').show();
            });
        });

    }

};

$(function() {

    // Start polling for updates
    var pollDatabase = function() {
        console.log('Polling database.json for new posts...');
        table.render();
        setTimeout(pollDatabase, 5000);
    };
    pollDatabase();

    // var s = { text: 'Back to Blog Posts', data: 'on-submit-page' },
    //     v = { text: 'Add Blog Post', data: 'on-viewing-page' };

    // //default state is onBlog
    // $('.show-form').data(states.btn.addBack.);

    $('.show-form').on('click', function() {
        if (states.btn.addBack.currentLocation === 'onBlog') { // i.e. going to Form page
            $('table').hide();
            $('form')[0].reset(); //grab 1st dom element. 
            $('form').show();
            $('.show-form').text(states.btn.addBack.onForm.text);
            states.btn.addBack.currentLocation = 'onForm';
        } else { // otherwise if going to Blog page
            $('form').hide();
            $('.result-container').hide();
            $('table').show();
            $('.show-form').text(states.btn.addBack.onBlog.text);
            states.btn.addBack.currentLocation = 'onBlog';
        }
        // var page = $('.show-form').data();

        // if (page.data === 'on-viewing-page') { // i.e. going to submit-page
        //     $('table').hide();
        //     $('form')[0].reset(); //grab 1st dom element. 
        //     $('form').show();
        //     $('.show-form').text(s.text); // Someone mentioned not to use .text due to mem leaks? Why? 
        //     $('.show-form').data(s);
        // } else { //i.e. going to viewing-page
        //     $('form').hide();
        //     $('.result-container').hide(); // don't toggle. make explicit shows/hides. 
        //     $('table').show();
        //     $('.show-form').text(v.text);
        //     $('.show-form').data(v);
        // }

    });

    $('form').on('submit', function(event) {
        $('.form-group').hide();
        $('.result-container').html('');
        $('.submit-button').html(states.btn.submit.loading);

        event.preventDefault();

        // Pass data as JS obj to table engine
        var formContent = {
            title: $('#input-title').val(),
            post: $('#input-blog').val(),
            token: $('#input-token').val()
        };
        table.add(formContent);
    });
});
