export interface IProduct {
  id?: number;
  imgPath: string;
  alt: string;
  title: string;
  description: string;
  price: string;
  category: {
                imgCat: string;
    altCat: string;
          },

  colors: string[];
}

export interface IForm {
  type: string;
  name: "title" | "description" | "imgPath" | "price";
  id: string;
  label: string;
}