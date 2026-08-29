import type { IForm, IProduct } from "../components/interfaces"

export const Products :IProduct[]= [
    {
        id: 1,
        imgPath: "car_1.jpeg",
        alt: "Car Image",
        title: "BMW car",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perspiciatis minus est impedit aliquid cum magni quaerat similique odit laboriosam.",
        price: "500,000$",
       
        category: {
                imgCat: "car_1.jpeg",
            altCat: "Car Image",
        },
        
        colors: [
          "#2563EB",
  "#3B82F6",
  "#10B981",
  "#22C55E",
        ],
        
        


    }

    ,
     {
        id: 2,
        imgPath: "shoes.jpg",
        alt: "shoes Image",
        title: " shoes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perspiciatis minus est impedit aliquid cum magni quaerat similique odit laboriosam.",
        price: "500$",
       
         category: {
              imgCat: "shoes.jpg",
            altCat: "shoes",
        
         }
         ,

        colors: [
        "#2563EB",
  "#3B82F6",
  "#10B981",
  "#22C55E",
        ],
        
        


    }
     
     
     , {
        id: 3,
        imgPath: "shoes_2.jpg",
        alt: "shoes Image",
        title: " shoes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perspiciatis minus est impedit aliquid cum magni quaerat similique odit laboriosam.",
        price: "500$",
       
         category: {
                 imgCat: "shoes.jpg",
            altCat: "shoes",
         },
    
            
         
        colors: [
         "#2563EB",
  "#3B82F6",
  "#10B981",
  "#22C55E",
        ],
        
        


    }
     
    ,
      {
        id: 4,
        imgPath: "shoes_3.jpg",
        alt: "shoes Image",
        title: " shoes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perspiciatis minus est impedit aliquid cum magni quaerat similique odit laboriosam.",
        price: "500$",
       
         
        
          category: {
                         imgCat: "shoes.jpg",
            altCat: "shoes",
                  },

        
        colors: [
           "#2563EB",
  "#3B82F6",
  "#10B981",
  "#22C55E",
        ],
        
        


    }
      
    ,
      
       {
        id: 5,
        imgPath: "Dawn-Soap.jpg",
        alt: "Dawn Soap Image",
        title: " Dawn-Soap",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perspiciatis minus est impedit aliquid cum magni quaerat similique odit laboriosam.",
        price: "500$",
       
           category: {
                          imgCat: "Dawn-Soap.jpg",
            altCat: "Dawn-Soap",
                },

    
        colors: [
          "#2563EB",
  "#3B82F6",
  "#10B981",
  "#22C55E",
        ],
        
        


    }
       
       
      ,  {
        id: 6,
        imgPath: "headset.jpeg",
        alt: "headset",
        title: " headset",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perspiciatis minus est impedit aliquid cum magni quaerat similique odit laboriosam.",
        price: "500$",
    

          category: {
        imgCat: "headset.jpeg",
        altCat: "headset",
                  },

        

        colors: [
            "#2563EB",
  "#3B82F6",
  "#10B981",
  "#22C55E",
        ],
        
        


    }
]


export const AddProductInputs :IForm[] = [
    {
    id:"title",
    type: "text", 
     name: "title", 
    label:"Product Title"
       
        
    },


  {
        type: "text", 
      
                name: "description", 
                id:"description",
        label:"Product Description"
       
        
    }, 
    {
      
        type: "text", 
        
                name: "price", 
                id:"price",
          
      
        label:"Product Price"
       
        
    },
    {
        type: "text", 
         name: "imgPath", 
         id:"imgPath",
        label:"Product Img URL"
       
        
    },



]



export const Colors : string[] = [
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFA500",
  "#800080",
  "#FFC0CB",
  "#A52A2A",
  "#2563EB",
  "#3B82F6",
  "#10B981",
  "#22C55E",
  "#F59E0B",
  "#EF4444",
  "#8B5CF6",
  "#06B6D4",
  "#14B8A6",
    
]


export const Categorys =[
    { 
        id:1,
        name: "Nike", 
        imgCat:"shoes_3.jpg"
        
    }
    ,
     { 
        id:2,
        name: "Cars", 
        imgCat:"car_1.jpeg"
        
    }
     , { 
        id:3,
        name: "headset", 
        imgCat:"headset.jpeg"
        
    }
]
