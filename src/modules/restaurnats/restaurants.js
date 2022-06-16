const model = require('./model')


module.exports = {
   GET_RES:async(_,res) => {
      try {
         
         res.json(await model.getRestaurants())
      } catch (error) {
         res.sendStatus(500)
         console.log(error);
      }
   },
   GET_BY_RES_ID:async(req,res) => {
      try {
         const { id } = req.body
         res.json(await model.getRestaurantById(id))
      } catch (error) {
         res.sendStatus(500)
         console.log(error);
      }
   },
   NEW_RES:async(req,res) => {
      try {
         const {name , id } = req.body
         res.json(await model.newRestaurant(name,id))
      } catch (error) {
         console.log(error);
         res.sendStatus(500)
      }
   },
   EDIT_RES:async(req,res) => {
      try {
         const {name , ctgry_id , id} = req.body
         res.json( await model.editRestaurant(name , ctgry_id ? ctgry_id : null , id))
      } catch (error) {
         console.log(error)
         res.sendStatus(500)
      }
   }
}