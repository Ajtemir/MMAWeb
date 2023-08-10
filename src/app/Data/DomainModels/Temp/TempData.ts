import {IProduct} from "../Common/IProduct";

export const products: IProduct[] =[
  {
    id : 1,
    title: "title 1",
    description: "description 1 dsfsdfds fdhfggjfg   nfgj g                jhgghj         jghjgh          -------------------------------ghfg",
    price: 10,
    createDate: new Date(),
    userId: "1",
    categoryId: 1,
    images: [
      'http://localhost/images/1_photo.jpg',
    ]
  },
  {
    id : 2,
    title: "title 2",
    description: "description 2 dsfsdfds fdhfggjfg   nfgj g                jhgghj         jghjgh          -------------------------------ghfg",
    price: 20,
    createDate: new Date(),
    userId: "2",
    categoryId: 2,
    images: [
      'http://localhost/images/2_photo.jpg',
    ]
  }
]
