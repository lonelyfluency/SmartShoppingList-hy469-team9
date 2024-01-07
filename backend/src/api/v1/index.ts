import * as express from 'express';
import { ExampleController } from './example/example.controller';
import { ItemShopController } from './item-shop/item-shop.controller';
import { TaskController } from './task/task.controller';
import { CartController } from './cart/cart.controller';
const apiV1Router = express.Router();


apiV1Router
  // Example routes
  .use(
    '/cart',
    new CartController().applyRoutes()
  )
  .use(
    '/example',
    new ExampleController().applyRoutes()
  )
  .use(
    '/item-shop',
    new ItemShopController().applyRoutes()
  )
  .use(
    '/tasks',
    new TaskController().applyRoutes()
  );


export { apiV1Router };

