const Categories = require('../../models/Categories');
const { mongooseToObject, mutipleMongooseToObject } = require('../../../ultils/mongoose');

class CategoriesController  {

   list(req, res, next){
      Promise.all([Categories.find({}), Categories.countDocumentsDeleted()])
            .then(([categories, deleteCount]) => {
                res.render('admin/Categories/list', {
                    deleteCount: deleteCount,
                    categories: mutipleMongooseToObject(categories)
                })
            })
            .catch(next)


   }
   add(req, res, next){
      
   }
}
module.exports = new CategoriesController();