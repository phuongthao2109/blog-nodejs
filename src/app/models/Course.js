const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');

const Course = new Schema({
   name: {type: String,maxLength:255,required:true},
   desc: {type: String,maxLength:600},
   image: {type: String,maxLength:255},
   videoId: {type: String,required:true},
   level : {type: String,maxLength:255},
   slug : {type: String,slug:'name',unique:true},
 },{timestamps: true});


 mongoose.plugin(slug);
 Course.plugin(mongooseDelete,{deletedAt : true, overrideMethods: 'all'});
 
module.exports = mongoose.model('Course', Course)