const express = require('express')
const router = express.Router()

const RestaurantModule = require('./restaurnats/restaurants')
const BranchModule = require('./branches/branches')
const ProductModule = require('./products/products')
const OrderModule = require('./orders/orders')

router
      .get('/restaurants',RestaurantModule.GET_RES)
      .get('/branches' ,BranchModule.GET )
      .get('/products',ProductModule.GET)
      .get('/orders',OrderModule.GET)
      .get('/branch/product/:id',ProductModule.GET_BRANCH_PRODUCT)
      .get('/product/:id',ProductModule.GET_PRODUCT)
      .get('/res-branch/:id', BranchModule.GET_RES_BRANCHES)
      .get('/restaurant/:id',RestaurantModule.GET_BY_RES_ID)
      .get('/branch/:id',BranchModule.GET_RES_BRANCHES)
      .post('/new-restaurant',RestaurantModule.NEW_RES)
      .post('/new-branch',BranchModule.NEW_BRANCH)
      .post('/new-product',ProductModule.NEW_PRODUCT)
      .post('/order',OrderModule.NEW)
      .put('/restaurant', RestaurantModule.EDIT_RES)
      .put('/product',ProductModule.UPDATE)
      .delete('/product/:id',ProductModule.DELETE)
      .delete('/restaurant/:id',RestaurantModule.DEL)
      .delete('/branch/:id',BranchModule.DEL_BRANCH)
      .delete('/order/:id',OrderModule.DELETE)





module.exports = router