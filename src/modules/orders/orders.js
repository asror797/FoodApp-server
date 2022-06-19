const model = require('./model')

module.exports = {
   GET:async(_,res) => {
      try {
         res.json(await model.getOrders())
      } catch (error) {
         console.log(error);
         res.sendStatus(500)
      }
   },
   NEW:async(req,res) => {
      try {
         console.log(req.body);
         const {name , phone , id , time } = req.body
         console.log(name , phone , id , time);
         res.json( await model.newOrder(name,phone,id,time))
      } catch (error) {
         res.sendStatus(500)
         console.log(error)
      }
   },
   DELETE:async(req,res) => {
      try {
         const { id } = req.params
         res.json( await model.delOrder(id))
      } catch (error) {
         res.sendStatus(500)
         console.log(error);  
      }
   },
   CANCEL:async(req,res) => {
      try {
         const { id } = req.params
         res.json(await model.cancelOrder(id))
      } catch (error) {
         res.sendStatus(500)
         console.log(error);
      }
   }
}