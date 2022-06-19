
const model = require('./model')



module.exports = {
   GET:async(_,res) => {
      try {
         res.json( await model.AllBranches())
      } catch (error) {
         console.log(error);
         res.sendStatus(500)
      }
   },
   NEW_BRANCH:async(req,res) => {
      try {
         const {name , id} = req.body

         res.json( await model.newBranch(name, id))
      } catch (error) {
         console.log(error);
         res.sendStatus(500)
      }
   },
   GET_RES_BRANCHES:async(req,res) => {
      try {
            const { id } = req.params
            res.json(await model.getResBranch(id))
      } catch (error) {
         console.log(error);
         res.sendStatus(500)
      }
   },
   DEL_BRANCH:async(req,res) => {
      try {
         const {id} = req.params
         res.json( await model.delBranch(id))
      } catch (error) {
         console.log(error)
         res.sendStatus(500)
      }
   }
}