const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/new_project_dev');
    console.log('connect successful !!!');
  } catch (error) {
    console.log(`error connect ` + error);
  }
}
module.exports = { connect }
