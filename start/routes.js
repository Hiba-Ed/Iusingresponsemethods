'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
| 
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
Route.get('/enter', 'TestController.enter')
Route.get('/product/add', 'TestController.add')
Route.post('/product', 'TestController.product')
Route.get('/products/:product_id', 'TestController.info').as('product.info');
Route.get('/macbook', 'TestController.macbook')