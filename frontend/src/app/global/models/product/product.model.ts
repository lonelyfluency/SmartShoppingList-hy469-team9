export interface Product {
    Name: string;
    NameId: number;
    ClassName: string;
    Price: number;
    ClassId: number;
    ImagePath: string;
    ProductDescriptionPath: string;
  }
  
  export interface Category {
    Name: string;
    Id: number;
    products: Product[];
  }
  
  // This will be used for the mapping function
  export interface MappedCategory {
    [key: number]: Category;
  }
  