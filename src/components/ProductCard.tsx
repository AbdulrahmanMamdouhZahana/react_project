import Img from "./Img";
import Button from "./Ui/Button";
import { cutText } from "../utils/function";
import ColorsButton from "./Ui/ColorsButton";


interface Product {
    colors: string[];
    imgPath: string;
    alt: string;
    title: string;
    description: string;
    price: number | string;
    category: {
        imgCat: string;
        altCat: string;
    };
    // Add any other fields as needed
}

interface IProps {
    product: Product;
    setEditProduct: (product) => void,
    openEditModal: () => void,
    idx: number,
    setidxProduct: (idx: number) => void
    deleteProduct: () => void
    openDeleteModal: () => void,
}



const ProductCard = ({ product, setEditProduct, openEditModal, idx, setidxProduct, deleteProduct, openDeleteModal }: IProps) => {

    const { colors, imgPath, alt, title, description, price, ...rest } = product

    const productColor = colors.map(color => <ColorsButton key={color} color={color} />)
    // console.log(productColor)


    //Handelar 


    const onEdit = () => {
        setEditProduct(product)
        openEditModal()
        setidxProduct(idx)

    }

    const onDelete = () => {
        setEditProduct(product)
        openDeleteModal()


    }




    return (
        <div className="border border-[#e9e6ecff] flex flex-col p-2 max-w-sm rounded-2xl">


            <Img imgPath={imgPath} alt={alt} className="lg:object-cover h-52 w-full" />



            <h2 className="py-2 title">{title}</h2>
            <p>{cutText(description, 79)}</p>


            <div className="flex gap-2 my-2">
                {productColor}
            </div>

            <div className="flex justify-between">
                <span>{price}</span>
                <img src={product.category.imgCat} alt={product.category.altCat} className="w-7 h-7 rounded-full" />
            </div>

            {/* <div className="flex justify-between my-3">
            <button className="text-amber-50 p-3 bg-indigo-600 w-full cursor-pointer">Edit</button>
                <button className="text-amber-50 p-3  bg-red-600 w-full cursor-pointer">delete</button>
                </div> */}


            <div className="flex mt-3 space-x-2 ">
                <Button
                    className="bg-indigo-700"
                    width="w-full"
                    onClick={onEdit}
                >
                    Edit
                </Button>

                <Button className="bg-red-700" width="w-full" onClick={onDelete}>Delete</Button>

            </div>
        </div>
    )
}
export default ProductCard;