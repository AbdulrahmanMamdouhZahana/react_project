import Img from "./Img";
import Button from "./Ui/Button";
import { cutText } from "../utils/function";
import ColorsButton from "./Ui/ColorsButton";


interface IProps{
    product: object;
}
 

const ProductCard = ({ product }: IProps) => {

    const { colors, imgPath, alt, title, description, price, ...rest } = product
    
    const productColor = colors.map(color =>  <ColorsButton key={color} color={color} /> )
    // console.log(productColor)
    

    
    return (
            <div className="border flex flex-col p-2 max-w-sm ">
                

                <Img imgPath={imgPath} alt={alt}  className="lg:object-cover h-52 w-full"/>
                
            
            
                <h2 className="py-2 title">{title}</h2>
                <p>{cutText(description ,79)}</p>


            <div className="flex gap-2 my-2">
                {productColor}
            </div>

            <div className="flex justify-between">
                    <span>{ price}</span>
                    <img src={ product.category.imgCat} alt={ product.category.altCat} className="w-7 h-7 rounded-full" />
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