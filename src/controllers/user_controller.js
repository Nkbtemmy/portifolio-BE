import bcrypt from 'bcryptjs';
const User = require("../database/models/user_schema");
const BirthDays = require('../database/models/List.schema')
import {userList} from '../utils/list'
exports.create = (req, res) => {
  if (!req.body.email || !req.body.password || !req.body.name) {
    return res.status(400).send({
      message: "Required field can not be empty",
    });
  }
  const user = new User({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
    isActive: req.body.isActive,
    userType: req.body.userType,
  });
  user
    .save()
    .then((data) => {
      data.password = null
      console.log(data)
      res.send({
           status:"succeed",
           users:data
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
};
exports.findAll = (req, res) => {
    User.find()
      .sort({ name: -1 })
      .then((users) => {
       // console.log(users)
        res.status(200).send({
          status: "succeed",
          user: users.length,
          users
        });
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Error Occured",
        });
      });
  };
  
   /* Find one User*/
  exports.findOne = (req, res) => {
    User.findById(req.params.id)
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            message: "User not found with id " + req.params.id,
          });
        }
        res.status(200).send(user);
        console.log(user);
      })
      .catch((err) => {
        return res.status(500).send({
          message: "Error retrieving user with id " + req.params.id,
        });
      });
  };
  exports.delete = (req, res) => {
    User.findOneAndDelete(req.params.id)
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            message: "User not found ",
          });
        }
        res.send({ message: "User deleted successfully!" });
      })
      .catch((err) => {
        return res.status(500).send({
          message: "Could not delete user ",
        });
      });
  };
  exports.UpdateUser = (req, res) => {
    if (!req.body.email && !req.body.password && !req.body.name) {
      res.status(400).send({
        message: "required fields cannot be empty",
      });
    }
    User.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            message: "no user found",
          });
        }
        res.status(200).send(user);
      })
      .catch((err) => {
        return res.status(404).send({
          message: "error while updating the post",
        });
      });
  };
  exports.SeedingDate = (req,res) =>{
     userList.map((data)=>{  
      let date = new Date(data.bd)
      date.toLocaleDateString();
      const user = new BirthDays({
        fname:data.fname,
        sname:data.sname,
        bd:date
      })
      user.save()
    })
    BirthDays.find().then(
    (result)=>{
        //console.log(result)
        res.status(201).send({
          status:201,
          Size_list: result.length,
          message:"userSeeded",
          data:result
        })
      }
    ).catch((err)=>{
      console.log(err);
      res.send({"message":"error from backend happened"})
    })
    
  }
  exports.DeleteSeeds = (req,res)=>{
    BirthDays.find().then(
      (result)=>{
        if(result.length){
          result.forEach((data)=>{
            BirthDays.findOneAndDelete({_id:data._id})
            .then(() => {
              console.log("deleted")
              res.send({
                message:"deleted successful"
              })
            }).catch((err) => {
              res.send({
                error: "error happen "
              })
              console.log(`Doesn't deleted because of ${err}`)
            });
          })
        }
        else{
          console.log("No data in doc")
          res.send("No thing in Document")
        }
      }
    ).catch((err)=>{
      console.log(err);
      res.send({"message":"error 1 from backend happened"})
    })
  }