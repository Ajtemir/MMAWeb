export interface IProduct{
  id?:number
  title?:string
  description:string
  price:number
  createDate?:Date
  userId:string
  categoryId:number
  images: string[]

}
