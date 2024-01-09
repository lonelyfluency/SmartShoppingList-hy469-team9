import { Request, Response, Router } from 'express';
import { IShoppinglistItem, ShoppinglistModel } from './shoppinglist.model';
import { ResourceController } from '../../shared';
import { StatusCodes } from 'http-status-codes';
import { Logger } from '../../shared/utils/logger';

export class ShoppinglistController extends ResourceController<IShoppinglistItem> {
  private logger: Logger = new Logger();

  constructor() {
    super(ShoppinglistModel);
  }

  public applyRoutes(): Router {
    const router = Router();
    router
      .get('/', this.getShoppinglistItems)
      .get('/:id', this.getShoppinglistItemById)
      .post('/', this.addShoppinglistItem)
      .put('/:id', this.updateShoppinglistItem)
      .delete('/:id', this.removeShoppinglistItem);

    return router;
  }


  getShoppinglistItems = async (req: Request, res: Response) => {
    this.logger.debug('Fetching shoppinglist items');
    try {
      const shoppinglistItems = await ShoppinglistModel.find({});
      res.status(StatusCodes.OK).json(shoppinglistItems);
    } catch (error) {
      this.logger.error('Error fetching shoppinglist items:', error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
    }
  }

  getShoppinglistItemById = async (req: Request, res: Response) => {
    this.logger.debug(`Fetching shoppinglist item with ID: ${req.params.id}`);
    try {
      const shoppinglistItem = await ShoppinglistModel.findById(req.params.id);
      if (!shoppinglistItem) {
        return res.status(StatusCodes.NOT_FOUND).send('Shoppinglist item not found');
      }
      res.status(StatusCodes.OK).json(shoppinglistItem);
    } catch (error) {
      this.logger.error('Error fetching shoppinglist item:', error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
    }
  }

  addShoppinglistItem = async (req: Request, res: Response) => {
    this.logger.debug('Adding new shoppinglist item');
    console.log('Received data:', req.body);
    try {
      const newShoppinglistItem = new ShoppinglistModel(req.body);
      const savedShoppinglistItem = await newShoppinglistItem.save();
      res.status(StatusCodes.CREATED).json(savedShoppinglistItem);
    } catch (error) {
      this.logger.error('Error adding shoppinglist item:', error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
    }
  }

  updateShoppinglistItem = async (req: Request, res: Response) => {
    this.logger.debug(`Updating shoppinglist item with ID: ${req.params.id}`);
    try {
      const updatedShoppinglistItem = await ShoppinglistModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedShoppinglistItem) {
        return res.status(StatusCodes.NOT_FOUND).send('Shoppinglist item not found');
      }
      res.status(StatusCodes.OK).json(updatedShoppinglistItem);
    } catch (error) {
      this.logger.error('Error updating shoppinglist item:', error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
    }
  }

  removeShoppinglistItem = async (req: Request, res: Response) => {
    this.logger.debug(`Removing shoppinglist item with ID: ${req.params.id}`);
    try {
      const deletedShoppinglistItem = await ShoppinglistModel.findByIdAndDelete(req.params.id);
      if (!deletedShoppinglistItem) {
        return res.status(StatusCodes.NOT_FOUND).send('Shoppinglist item not found');
      }
      res.status(StatusCodes.OK).send(`Shoppinglist item deleted: ${deletedShoppinglistItem._id}`);
    } catch (error) {
      this.logger.error('Error removing shoppinglist item:', error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
    }
  }
}
