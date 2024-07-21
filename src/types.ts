export interface Picture {
    id: string;
    urls: {
      small: string;
      regular: string;
    };
    alt_description: string;
  }