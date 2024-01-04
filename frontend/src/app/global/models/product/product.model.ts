export interface Product {
    "Class Name (str)": string;
    "Class ID (int)": number;
    "Coarse Class Name (str)": string;
    "Price": number;
    "Coarse Class ID (int)": number;
    "Iconic Image Path (str)": string;
    "Product Description Path (str)": string;
  }
  
  export interface Category {
    coarseClassName: string;
    coarseClassId: number;
    products: Product[];
  }
  
  // This will be used for the mapping function
  export interface MappedCategory {
    [key: number]: Category;
  }
  