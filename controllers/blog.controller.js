const Blog  = require('../models/blog.model.js');
// Create and Save a new Blog
exports.create = async (req, res) => {
          // Validate request
          if(!req.body.content) {
            return res.status(400).send({
                message: "Blog content can not be empty"
            });}
        try { 
            const data = new Blog(req.body)
            const newNews = await data.save()
            res.status(201).json(newNews)
          } catch (err) {
            res.status(400).json({ message: err.message })
          }
        }
   /* 
    const blogs = new Blog(req.body);
    // Save Blog in the database
    await blogs.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
    res.send({blogs}); 
};
*/

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    Blog.find()
    .then(blogs => {
        res.send({
            status:"Success",
            result: blogs.length,
            data: {
                blogs
            }
        });
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Blogs."
        });
    });
};
// Find a single blog with a id
exports.findOne = (req, res) => {
    Blog.findById(req.params.id)
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: `Blog  with id  ${req.params.id} not found`
            });            
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: `Blog not found with id ${req.params.id}`
            });                
        }
        return res.status(500).send({
            message: "Error retrieving Blog with id " + req.params.id
        });
    });
};
// Update a note identified by the id in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Blog content can not be empty"
        });
    }

    // Find note and update it with the request body
    Blog.findOneAndUpdate(req.params.id, {
        title: req.body.title || "Untitled Note",
        content: req.body.content,
        author: req.body.author
    }, {new: true})
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: `blog not found with id ${req.params.id}`
            });
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: `blog not found with id ${req.params.id}`
            });                
        }
        return res.status(500).send({
            message: `Error updating blog with id ${req.params.id}`
        });
    });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Blog.findByIdAndRemove(req.params.id)
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Blog not found with id " + req.params.id
            });
        }
        res.send({message: "Article deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Blog not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.id
        });
    });
};