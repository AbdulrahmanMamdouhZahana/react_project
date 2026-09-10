import ProductCard from "./components/ProductCard";
import Model from "./components/Ui/Model";
import Button from "./components/Ui/Button";
import Input from "./components/Ui/Input";
import { useState, ChangeEvent, SubmitEvent } from 'react';
import type { IProduct } from './components/interfaces'
import toast, { Toaster } from 'react-hot-toast';

import { ProductValidation } from "./validation"


import { Categorys, Colors, Products } from "./data";
import { AddProductInputs } from "./data";
import ErrorMsg from "./components/Ui/ErrorMsg";
import ColorsButton from "./components/Ui/ColorsButton";
import SelecetMenu from "./components/Ui/SelectMenu";
import DeleteModel from "./components/Ui/DeleteModel";

// console.log(Products);






function App() {


  const defalutProduct = {
    title: "",
    description: "",
    price: "",
    imgPath: "",
    alt: "",
    colors: [],
    category: {
      imgCat: "",
      altCat: "",
    }

  }

  //  STATES
  const [product, setproduct] = useState<IProduct>(defalutProduct);


  const [editProduct, setEditProduct] = useState<IProduct>(defalutProduct);
  const [idxProduct, setidxProduct] = useState<number>(0);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)





  const [productList, setProductList] = useState(Products)


  const [isOpen, setIsOpen] = useState(false)
  const [isEditOpen, setIsEditOpen] = useState(false)

  const [errorsMsg, setErrorsMsg] = useState({

    title: "",
    description: "",
    price: "",
    imgPath: "",
  })


  const [tempColor, setTempColor] = useState([]);



  const [selectedCategory, setSelectedCategor] = useState(Categorys[0])


  // Handler Function

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  function closeEditModal() {
    setIsEditOpen(false)
  }

  function openEditModal() {
    setIsEditOpen(true)
  }



  function closeDeleteModal() {
    setIsDeleteOpen(false)
  }

  function openDeleteModal() {
    setIsDeleteOpen(true)
  }



  const { title, description, price, imgPath } = product;



  const submitHandler = (e: SubmitEvent<HTMLButtonElement>): void => {
    e.preventDefault();




    const errorsMsg = ProductValidation({ title, description, price, imgPath });
    setErrorsMsg(errorsMsg);


    if (Object.values(errorsMsg).every(value => value === "")) {



      setProductList((prev) => [{ ...product, id: 7, colors: tempColor, category: selectedCategory }, ...prev])

      setproduct(
        {
          title: "",
          description: "",
          price: "",
          imgPath: "",
          alt: "",
          colors: [],
          category: {
            imgCat: "",
            altCat: "",
          }


        }
      )
      closeModal();
      setTempColor([])
    }












    // const errorsMsg = ProductValidation({ title, description, price, imgPath } )

  }

  const editSubmitHandler = (e: SubmitEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    const errorsMsg = ProductValidation({ title, description, price, imgPath });
    setErrorsMsg(errorsMsg);


    const updatedProduct = [...productList]
    updatedProduct[idxProduct] = {
      ...editProduct, colors: tempColor.concat(editProduct.colors)
    };
    setProductList(updatedProduct)


    setEditProduct(
      defalutProduct
    )
    closeEditModal();
    setTempColor([])
    toast.success("Product updated successfully")







    // const errorsMsg = ProductValidation({ title, description, price, imgPath } )

  }


  const ChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {

    const { value, name } = e.target;

    setproduct({
      ...product, [name]: value
    })

    setErrorsMsg({
      ...errorsMsg,
      [name]: ""
    })

  };

  const ChangeEditHandler = (e: ChangeEvent<HTMLInputElement>) => {

    const { value, name } = e.target;

    setEditProduct({
      ...editProduct, [name]: value
    })

    setErrorsMsg({
      ...errorsMsg,
      [name]: ""
    })

  };


  const onCancel = () => {
    closeModal();
    setproduct(defalutProduct)

  }

  const onEditCancel = () => {
    closeEditModal();

  }


  //reander data 

  // console.log(errorsMsg);







  const data = productList.map((Product, idx) =>
    <ProductCard key={Product.id} product={Product}
      openDeleteModal={openDeleteModal}
      setEditProduct={setEditProduct}
      openEditModal={openEditModal} idx={idx} setidxProduct={setidxProduct} />
  )


  const AddInputs = AddProductInputs.map(input =>



    <div key={input.id}>
      <label htmlFor={input.id}>{input.label}</label>
      <Input type={input.type} name={input.name} id={input.id} value={product[input.name]} onChange={ChangeHandler} />
      <ErrorMsg msg={errorsMsg[input.name]} />

    </div>


  )

  // console.log(AddInputs);

  const colorInputs = Colors.map((color) => <ColorsButton key={color} color={color} onClick={() => {
    console.log(tempColor);



    if (tempColor.includes(color)) {
      setTempColor((prev) => prev.filter((item) => item !== color))

      return;

    }

    if (editProduct.colors.includes(color)) {
      setTempColor((prev) => prev.filter((item) => item !== color))

      return;

    }



    setTempColor((prev) => [...prev, color])




  }} />)



  const reanderEditInpusWithErrorMes = (id, name, label) => {
    return (
      <div>
        <label htmlFor={id}>

          {label}
        </label>
        <Input type={"text"} name={name} id={id} value={editProduct[name]} onChange={ChangeEditHandler} />
        <ErrorMsg msg={errorsMsg[name]} />

      </div>

    )
  }


  const deleteProductHanedler = () => {


    const prdID = editProduct.id;

    const updateProduct = productList.filter((product) => prdID !== product.id)

    setProductList(updateProduct);
    closeDeleteModal();
    toast.success("Product deleted successfully")



















    // const updatedProductList = productList.filter((product) => product.id !== idxProduct);

    // setProductList(updatedProductList);
    // closeDeleteModal();



  }




  return (
    <>



      <div className=" container  xl:mx-auto">



        <div className="flex justify-between items-center mx-7 ">
          <span className="text-indigo-600 font-bold text-4xl"> Product </span>
          <Button onClick={openModal} className="bg-indigo-600  mt-5" width="50"> add Product </Button>

        </div>

        <div className=" m-5 grid grid-col-1 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-2 rounded-md " >


          {data}
        </div>




        {/* Add Product Modal */}
        <Model isOpen={isOpen} title="Add A New Product" closeModal={closeModal}>


          <form action="" onSubmit={submitHandler}>


            {AddInputs}

            <SelecetMenu selectedCategory={selectedCategory} setSelectedCategor={setSelectedCategor} />


            <div className="flex flex-wrap  space-y-1 space-x-1 m-1" >
              {colorInputs}


              {tempColor.map(color => (

                <span className="text-amber-50 rounded-sm p-0.5 m-1  " key={color} style={{ backgroundColor: color }}>{color}</span>

              ))}



            </div>




            <div className="flex space-x-2">
              <Button className="bg-indigo-500 hover:bg-indigo-800 transition-colors"> Submit</Button>
              <Button className="bg-gray-300  hover:bg-gray-600 transition-colors" onClick={onCancel}> Cancle</Button>
            </div>



          </form>

        </Model>





        {/* Edit  Product Modal */}

        <Model isOpen={isEditOpen} title="Edit A Product" closeModal={closeEditModal}>


          <form action="" onSubmit={editSubmitHandler}>

            {reanderEditInpusWithErrorMes("title", "title", "Title")}
            {reanderEditInpusWithErrorMes("description", "description", "Description")}
            {reanderEditInpusWithErrorMes("price", "price", "Price")}
            {reanderEditInpusWithErrorMes("imgPath", "imgPath", "Image Path")}



            <SelecetMenu selectedCategory={editProduct.category} setSelectedCategor={(value) => setEditProduct({ ...editProduct, category: value })} />





            <div className="flex flex-wrap  space-y-1 space-x-1 m-1" >
              {colorInputs}


              {tempColor.concat(editProduct.colors).map(color => (

                <span className="text-amber-50 rounded-sm p-0.5 m-1 " key={color} style={{ backgroundColor: color }}>{color}</span>
              ))}



            </div>





            <div className="flex space-x-2">
              <Button className="bg-indigo-500 hover:bg-indigo-800 transition-colors"> Submit</Button>

              <Button className="bg-gray-300  hover:bg-gray-600 transition-colors" type="button" onClick={onEditCancel}> Cancle</Button>
            </div>


          </form>

        </Model>


        <DeleteModel openDeleteModal={openDeleteModal} closeDeleteModal={closeDeleteModal} isDeleteOpen={isDeleteOpen} deleteProductHanedler={deleteProductHanedler} />


      </div>


      <Toaster />

    </>



  )
}

export default App
