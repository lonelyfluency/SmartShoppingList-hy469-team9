import { Request, Response, Router } from 'express';
import { ICartItem, CartModel } from './cart.model';
import { ResourceController } from '../../shared';
import { StatusCodes } from 'http-status-codes';
import { Logger } from '../../shared/utils/logger';

export class CartController extends ResourceController<ICartItem> {
  private logger: Logger = new Logger();

  constructor() {
    super(CartModel);
  }

  public applyRoutes(): Router {
    const router = Router();
    router
      .get('/', this.getCartItems)
      .get('/:id', this.getCartItemById)
      .post('/', this.addCartItem)
      .put('/:id', this.updateCartItem)
      .delete('/:id', this.removeCartItem);

    return router;
  }


  getCartItems = async (req: Request, res: Response) => {
    this.logger.debug('Fetching cart items');
    try {
      const cartItems = await CartModel.find({});
      res.status(StatusCodes.OK).json(cartItems);
    } catch (error) {
      this.logger.error('Error fetching cart items:', error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
    }
  }

  getCartItemById = async (req: Request, res: Response) => {
    this.logger.debug(`Fetching cart item with ID: ${req.params.id}`);
    try {
      const cartItem = await CartModel.findById(req.params.id);
      if (!cartItem) {
        return res.status(StatusCodes.NOT_FOUND).send('Cart item not found');
      }
      res.status(StatusCodes.OK).json(cartItem);
    } catch (error) {
      this.logger.error('Error fetching cart item:', error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
    }
  }

  addCartItem = async (req: Request, res: Response) => {
    this.logger.debug('Adding new cart item');
    console.log('Received data:', req.body);
    try {
      const newCartItem = new CartModel(req.body);
      const savedCartItem = await newCartItem.save();
      res.status(StatusCodes.CREATED).json(savedCartItem);
    } catch (error) {
      this.logger.error('Error adding cart item:', error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
    }
  }

  updateCartItem = async (req: Request, res: Response) => {
    this.logger.debug(`Updating cart item with ID: ${req.params.id}`);
    try {
      const updatedCartItem = await CartModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedCartItem) {
        return res.status(StatusCodes.NOT_FOUND).send('Cart item not found');
      }
      res.status(StatusCodes.OK).json(updatedCartItem);
    } catch (error) {
      this.logger.error('Error updating cart item:', error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
    }
  }

  removeCartItem = async (req: Request, res: Response) => {
    this.logger.debug(`Removing cart item with ID: ${req.params.id}`);
    try {
      const deletedCartItem = await CartModel.findByIdAndDelete(req.params.id);
      if (!deletedCartItem) {
        return res.status(StatusCodes.NOT_FOUND).send('Cart item not found');
      }
      res.status(StatusCodes.OK).send(`Cart item deleted: ${deletedCartItem._id}`);
    } catch (error) {
      this.logger.error('Error removing cart item:', error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
    }
  }
}
