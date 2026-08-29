import ProductCard from "./components/ProductCard";
import Model from "./components/Ui/Model";
import Button from "./components/Ui/Button";
import Input from "./components/Ui/Input";
import { useState, ChangeEvent  , SubmitEvent} from 'react';
import type { IProduct } from './components/interfaces'

import { ProductValidation} from "./validation"


import { Categorys, Colors, Products } from "./data";
import { AddProductInputs } from "./data";
import ErrorMsg from "./components/Ui/ErrorMsg";
import ColorsButton from "./components/Ui/ColorsButton";
import SelecetMenu from "./components/Ui/SelectMenu";

// console.log(Products);






function App() {

  //  STATES
  const [product, setproduct] = useState<IProduct>(
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
  );

  
  

  const [productList, setProductList] = useState(Products)
    console.log(productList);


  const [isOpen, setIsOpen] = useState(false)

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




  const { title, description, price, imgPath } = product;
  


  const submitHandler = (e: SubmitEvent<HTMLButtonElement>): void => {
    e.preventDefault();

    


    const errorsMsg = ProductValidation({ title, description, price, imgPath });
    setErrorsMsg(errorsMsg);
    
    
    if (Object.values(errorsMsg).every(value => value === "")) { 
      


      setProductList((prev) => [{ ...product, id: 7, colors: tempColor , category : selectedCategory }, ...prev])
        
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




  const ChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {

    const { value, name } = e.target;
    
    setproduct({
      ...product, [name]: value
    })

    setErrorsMsg({
      ...errorsMsg, 
      [name] : ""
    })

  };

  const onCancel = () => {
    closeModal();
    setproduct(
      {
        title: "",
        description: "",
        price: "",
        imgPath: "",
        alt: "",
        colors: [],
        category: [{
          imgPath: "",
          alt: "",
        }
        ]
        
      }
    )

  }


  //reander data 

  // console.log(errorsMsg);
  

  const data = productList.map(Product => <ProductCard key={Product.id} product={Product} />);
  

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
    setTempColor((prev)=> prev.filter((item)=>item !== color))

      return;
      
    }

    setTempColor((prev)=>[...prev , color])
  
    
    
    
   }}/>)

  

  return (
    <>
      


      <div className=" sm:container  2xl:mx-auto">



        <div className="flex justify-between items-center mx-7 ">
          <span className="text-indigo-600 font-bold text-4xl"> Product </span>
                 <Button onClick={openModal} className="bg-indigo-600  mt-5" width="50"> add Product </Button>

        </div>

        <div className=" m-5 grid grid-col-1 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-2 rounded-md " >
        
        
      { data}
        </div>

      
     


        <Model isOpen={isOpen} title="Add A New Product" closeModal={closeModal}>
          
       
          <form action="" onSubmit={submitHandler}>


            {AddInputs} 

            <SelecetMenu selectedCategory={selectedCategory} setSelectedCategor={ setSelectedCategor} />


            <div className="flex flex-wrap  space-y-1 space-x-1 m-1" > 
              {colorInputs}


              {tempColor.map(color => (
                  
              <span className="text-amber-50 rounded-sm p-0.5 m-1  " key={color} style={{backgroundColor:color}}>{color}</span>
         
              ))}

              

            </div>

            

      
        <div className="flex space-x-2">
              <Button className="bg-indigo-500 hover:bg-indigo-800 transition-colors"> Submit</Button>
        <Button className="bg-gray-300  hover:bg-gray-600 transition-colors" onClick={onCancel}> Cancle</Button>
            </div>
            

            
          </form>

        </Model>
        

        </div>

    </>


    
  )
}

export default App
