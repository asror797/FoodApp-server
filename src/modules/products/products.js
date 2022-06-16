const model = require('./model')


module.exports = {
   GET:async(_,res) => {
      try {
         res.json( await model.getProducts())
      } catch (error) {
         console.log(error);
         res.sendStatus(500) 
      }
   },
   NEW_PRODUCT:async(req,res) => {
      try {
         const {name , price , branch_id , restaurant_id} = req.body

         res.json(await model.newProduct(name,price,branch_id,restaurant_id))
      } catch (error) {
         console.log(error);
         res.sendStatus(500)
      }
   }
}