# Self-made Blog Hosted and Powered by Github

Blog formed on top of Github Pages Repo. Blog data stored in local database.json file, front-end built with jQuery and Bootstrap. Polling for JSON data using AJAX calls to re-render diffed table with any new blog post data, as I don't control the back-end so can't initiate server-side pushing.

Blog Posts can be added via online form, accepted only in conjunction with valid OAuth token. Submitting a new post initiates a push to Github Pages Repo, overwriting existing database.json. 

