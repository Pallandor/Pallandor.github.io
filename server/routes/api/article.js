const express = require('express');
const router = express.Router();

router.get('/articles', (req, res, next) =>{
  // implement getAllArticles against existing dataStore
  // implement then (success) and catch (err) cases
  res.status(200)
    .json({
      test: 'did this pass down JSON?',
    });
});

module.exports = router;
