import bcrypt from 'bcryptjs';
const Blog = require('../models/blog.model');
// Create and Save a new Blog
export const create = async (req, res) => {
          if(!req.body.title || !req.body.content || !req.body.author) {
            return res.status(400).send({
                message: "Blog content or title or author can not be empty"
            });}
        try { 
            const data = new Blog(req.body)
            const newNews = await data.save()
             res.status(201).json(newNews)
          } 
          catch (err) {
            res.status(400).json({message: "Blog doesn`t saved "})
          }
        }
export const findAll = (req, res) => {
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
            message: "Some error occurred while retrieving Blogs."
        });
    });
};
export const findOne = (req, res) => {
    Blog.findById(req.params.id)
    .then(blog => {
        if(!blog) {
            return res.status(404).send({
                message: `Blog  with id  ${req.params.id} not found`
            });            
        }
        res.send(blog);
    })
    .catch(err => {
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
export const update = (req, res) => {
    Blog.findOneAndUpdate(req.params.id,req.body, {new: true})
    .then(blog => {

        if(!blog) {
            return res.status(404).send({
                message: `blog not found with id ${req.params.id}`
            });
        }
        res.send(blog)
    })
    .catch(err => {
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

// Delete a blog with the specified blogId in the request
exports.delete = (req, res) => {
    Blog.findByIdAndRemove(req.params.id)
    .then(blog => {
        if(!blog) {
            return res.status(404).send({
                message: "Blog not found with id " + req.params.id
            });
        }
      res.send({message: "Article deleted successfully!"});
    }).
    catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Blog not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Could not delete blog with id " + req.params.id
        });
    });
};
//module.exports = moongoose;