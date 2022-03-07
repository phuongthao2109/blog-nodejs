const path = require('path');
const express = require('express');
const morgan = require('morgan');
const hbs  = require('express-handlebars');
const app = express();
const port = 3000;
const methodOverride = require('method-override');
const route = require('./routes');
const db = require('./config/db');
//connect to db 
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//http logger
app.use(morgan('combined'));

//method
app.use(methodOverride('_method'))

//template engine
app.engine('hbs', hbs.engine({
  extname : '.hbs', 
  helpers: {
    sum: (a,b) => a + b
    
}
}));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname, 'resources', 'views'));

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})