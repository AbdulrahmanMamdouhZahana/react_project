


export const ProductValidation = (Product: {
    title: "",
    description: "",
    price: "",
    imgPath: "",
    // colors:[]
    
}) => {

    const handleImgURL = /^https?:\/\/.+/i;


    const errors =
    {
        title: "",
        description: "",
        price: "",
        imgPath: "",
    // colors:"",

    }
    
    if (!Product.title.trim() || Product.title.length < 10 || Product.title.length > 80) {
        errors.title = "Product Title Must be bettwen 10 and 80"
    }

    if (!Product.description.trim() || Product.description.length < 10 || Product.description.length > 200) { 
        errors.description =  "Product description Must be bettwen 10 and 200"
    }

    if (handleImgURL === Product.imgPath) { 
        errors.imgPath = "Img Field is Rquierd "
    }
    
    // if (Product.colors.length == 0) {
    //     errors.colors = "You Must Select Color"
    //  }
  

    // console.log(Product.price);
    

    if (!Product.price.trim() ||   isNaN(Number(Product.price))    ) { 
        errors.price = "Price Fied is Requierd "
    }

    // console.log(errors);
    

    return errors
    

}