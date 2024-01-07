export class CartItemModel {
    public _id!: string; // MongoDB generated ID
    public productId!: string;
    public productName!: string;
    public productPrice!: number;
    public quantity!: number;
    public productImgUrl!: string;
    public selected?: boolean;
  
    constructor(model?: any) {
      Object.assign(this, model);
    }
  }
  