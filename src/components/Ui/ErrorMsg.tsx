interface IProps {
    msg : string
    
 }

const ErrorMsg = ({msg }:IProps) => { 
    return (
            msg  ? <span className="text-red-600 text-xs block">{msg}</span> : null
    )
}
export default ErrorMsg;