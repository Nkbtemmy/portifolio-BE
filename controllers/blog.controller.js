const Blog  = require('../models/blog.model.js');
const User = require("../models/user_schema");
const bcrypt = require("bcryptjs");
//import * as Blog from '../models/blog.model.js';
// Create and Save a new Blog
export const create = async (req, res) => {
          // Validate request
          if(!req.body.title || !req.body.content || !req.body.author) {
            return res.status(400).send({
                message: "Blog content or title or author can not be empty"
            });}
        try { 
            const data = new Blog(req.body)
            const newNews = await data.save()
            res.status(201).json(newNews)
          } catch (err) {
            res.status(400).json({ message: err.message })
          }
        }
// Retrieve and return all notes from the database.
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
            message: err.message || "Some error occurred while retrieving Blogs."
        });
    });
};
// Find a single blog with a id
export const findOne = (req, res) => {
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
export const update = (req, res) => {
    // Find note and update it with the request body
    Blog.findOneAndUpdate(req.params.id, {
        title: req.body.title ,
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
//module.exports = moongoose;