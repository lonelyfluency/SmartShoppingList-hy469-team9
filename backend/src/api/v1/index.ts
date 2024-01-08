import * as express from 'express';
// import { createServer } from 'http';
// import { Server } from 'socket.io';
import { ExampleController } from './example/example.controller';
import { ItemShopController } from './item-shop/item-shop.controller';
import { TaskController } from './task/task.controller';
import { CartController } from './cart/cart.controller';
const apiV1Router = express.Router();

// const app = express();
// const server = createServer(app);
// const io = new Server(server);

// io.on('connection', (socket) => {
//   console.log('a user connected');
// });


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

