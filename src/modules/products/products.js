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
   },
   DELETE:async(req,res) => {
      try {
         const { id } = req.params
         res.json(await model.delProduct(id))
      } catch (error) {
         console.log(error);
         res.sendStatus(500) 
      }
   },
   GET_PRODUCT:async(req,res) => {
      try {
         const { id } = req.params
         res.json( await model.getProduct(id))
      } catch (error) {
         res.sendStatus(500)
         console.log(error);
      }
   },
   UPDATE:async(req,res) => {
      try {
         const {name , price , id } = req.body
         res.json(await model.updateProduct(name,price,id))
      } catch (error) {
         console.log(error)
         res.sendStatus(500)
      }
   },
   GET_BRANCH_PRODUCT:async(req,res) => {
      try {
         const { id } = req.params
         res.json(await model.getBranchProduct(id))
      } catch (error) {
         console.log(error)
         res.sendStatus(500)
      }
   }
}