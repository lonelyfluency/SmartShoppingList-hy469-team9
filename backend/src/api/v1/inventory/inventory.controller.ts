import { Request, Response, Router } from 'express';
import { IInventoryItem, InventoryModel } from './inventory.model';
import { ResourceController } from '../../shared';
import { StatusCodes } from 'http-status-codes';
import { Logger } from '../../shared/utils/logger';

export class InventoryController extends ResourceController<IInventoryItem> {
  private logger: Logger = new Logger();

  constructor() {
    super(InventoryModel);
  }

  public applyRoutes(): Router {
    const router = Router();
    router
      .get('/', this.getInventoryItems)
      .get('/:id', this.getInventoryItemById)
      .post('/', this.addInventoryItem)
      .put('/:id', this.updateInventoryItem)
      .delete('/:id', this.removeInventoryItem);

    return router;
  }


  getInventoryItems = async (req: Request, res: Response) => {
    this.logger.debug('Fetching inventory items');
    try {
      const inventoryItems = await InventoryModel.find({});
      res.status(StatusCodes.OK).json(inventoryItems);
    } catch (error) {
      this.logger.error('Error fetching inventory items:', error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
    }
  }

  getInventoryItemById = async (req: Request, res: Response) => {
    this.logger.debug(`Fetching inventory item with ID: ${req.params.id}`);
    try {
      const inventoryItem = await InventoryModel.findById(req.params.id);
      if (!inventoryItem) {
        return res.status(StatusCodes.NOT_FOUND).send('Inventory item not found');
      }
      res.status(StatusCodes.OK).json(inventoryItem);
    } catch (error) {
      this.logger.error('Error fetching inventory item:', error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
    }
  }

  addInventoryItem = async (req: Request, res: Response) => {
    this.logger.debug('Adding new inventory item');
    console.log('Received data:', req.body);
    try {
      const newInventoryItem = new InventoryModel(req.body);
      const savedInventoryItem = await newInventoryItem.save();
      res.status(StatusCodes.CREATED).json(savedInventoryItem);
    } catch (error) {
      this.logger.error('Error adding inventory item:', error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
    }
  }

  updateInventoryItem = async (req: Request, res: Response) => {
    this.logger.debug(`Updating inventory item with ID: ${req.params.id}`);
    try {
      const updatedInventoryItem = await InventoryModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedInventoryItem) {
        return res.status(StatusCodes.NOT_FOUND).send('Inventory item not found');
      }
      res.status(StatusCodes.OK).json(updatedInventoryItem);
    } catch (error) {
      this.logger.error('Error updating inventory item:', error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
    }
  }

  removeInventoryItem = async (req: Request, res: Response) => {
    this.logger.debug(`Removing inventory item with ID: ${req.params.id}`);
    try {
      const deletedInventoryItem = await InventoryModel.findByIdAndDelete(req.params.id);
      if (!deletedInventoryItem) {
        return res.status(StatusCodes.NOT_FOUND).send('Inventory item not found');
      }
      res.status(StatusCodes.OK).send(`Inventory item deleted: ${deletedInventoryItem._id}`);
    } catch (error) {
      this.logger.error('Error removing inventory item:', error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
    }
  }
}
