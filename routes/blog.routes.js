 module.exports = (app) => {
const blog = require('../controllers/blog.controller.js');
 // Create a new Note
 app.post('/api/v1/articles/new', blog.create);
 // Retrieve all Blogs
 app.get('/api/v1/articles/', blog.findAll);
 // Retrieve one Blogs
 app.get('/api/v1/articles/:id', blog.findOne);
  // update one Blogs
app.put('/api/v1/articles/:id', blog.update);
// delete one Blogs
  app.delete('/api/v1/articles/erase/:id', blog.delete);
}