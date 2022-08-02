const Joi = require('joi');
const validationMiddleware=(req,res,next)=>{
    const schema = Joi.object({
      email: Joi.string().email().required(),
      name: Joi.string().min(5).required()
    });
    const {error}=schema.validate(req.body)
     if(error) res.json({status: 400, message: " Wrong entry!!"});
      else {
       console.log("Right entry") 
       next();
  
    } 
      
  }
  module.exports = validationMiddleware;