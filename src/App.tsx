import ProductCard from "./components/ProductCard"
import Model from "./components/Ui/Model";
import Button from "./components/Ui/Button";
import { useState } from 'react'


import { Products } from "./data";

console.log(Products);





function App() {

    let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const data = Products.map(Product=> <ProductCard key={Product.id} product={Product}/>);

  return (
    <>
      


      <div className=" sm:container sm:mx-auto">


       <Button onClick={openModal} className="bg-indigo-800"> OpenModel</Button>


        <div className=" m-5 grid grid-col-1 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-2 rounded-md " >
        
        
      { data}
        </div>

      
     


      <Model isOpen={isOpen} title = "Test" closeModal={closeModal}>
      
        <div className="flex space-x-2">
           <Button className="bg-indigo-500"> Submit</Button>
        <Button className="bg-gray-300"> Cancle</Button>
       </div>
        </Model>
        

                      </div>

    </>


    
  )
}

export default App
