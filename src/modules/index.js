const express = require('express')
const router = express.Router()

const RestaurantModule = require('./restaurnats/restaurants')
const BranchModule = require('./branches/branches')
const ProductModule = require('./products/products')

router
      .get('/restaurants',RestaurantModule.GET_RES)
      .get('/branches' ,BranchModule.GET )
      .get('/products',ProductModule.GET)
      .post('/restaurant',RestaurantModule.GET_BY_RES_ID)
      .post('/branch',BranchModule.GET_RES_BRANCHES)
      .post('/new-restaurant',RestaurantModule.NEW_RES)
      .post('/new-branch',BranchModule.NEW_BRANCH)
      .post('/new-product',ProductModule.NEW_PRODUCT)
      .post('/res-branch', BranchModule.GET_RES_BRANCHES)
      .put('/restaurant', RestaurantModule.EDIT_RES)





module.exports = router