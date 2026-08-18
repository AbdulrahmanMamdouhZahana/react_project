import Img from "./Img";
import Button from "./Ui/Button";
import { cutText } from "../utils/function";


interface IProps{
    product: object;
 }

const ProductCard = ({ product }: IProps) => {
    
    const {imgPath, alt, title, description, price, ...rest} = product
    return (
            <div className="border flex flex-col p-2 max-w-sm ">
                

                <Img imgPath={imgPath} alt={alt}  className="lg:object-cover h-52 w-full"/>
                
            
            
                <h2 className="py-2 title">{title}</h2>
                <p>{cutText(description ,79)}</p>


            <div className="flex gap-2 my-2">
            <span className= "w-5 h-5 bg-indigo-400 rounded-full  cursor-pointer "   />
            <span className= "w-5 h-5 bg-yellow-400 rounded-full cursor-pointer  "   />
            <span className= "w-5 h-5 bg-red-400 rounded-full cursor-pointer  "   />
            </div>

            <div className="flex justify-between">
                    <span>{ price}</span>
                    <img src={ product.category[0].imgPath} alt={ product.category[0].alt} className="w-7 h-7 rounded-full" />
            </div>

{/* <div className="flex justify-between my-3">
            <button className="text-amber-50 p-3 bg-indigo-600 w-full cursor-pointer">Edit</button>
                <button className="text-amber-50 p-3  bg-red-600 w-full cursor-pointer">delete</button>
                </div> */}

         
                <div className="flex mt-3">
<Button
    className="bg-indigo-600"
    width="w-full"
    onClick={() => console.log("clicked")}
>
    Edit
</Button>
                  
                    <Button className="bg-red-600" width="w-full">Delete</Button>
                </div>
            </div>
    )
}
export default ProductCard;