const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');

const Categories = new Schema({
   name: {type: String,maxLength:255,required:true},
   image: {type: String,maxLength:255},
   slug : {type: String,slug:'name',unique:true},
 },{timestamps: true});


 mongoose.plugin(slug);
 Categories.plugin(mongooseDelete,{deletedAt : true, overrideMethods: 'all'});
 
module.exports = mongoose.model('Categories', Categories)