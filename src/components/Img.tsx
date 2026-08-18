interface IProps { 
    imgPath: string, 
    alt: string, 
    className :string
}

const Img = ({imgPath , alt  , className}:IProps) => { 
    return (
        <img src={imgPath} alt={alt} className={ `${className} rounded-sm `} />
    )
}
export default Img;