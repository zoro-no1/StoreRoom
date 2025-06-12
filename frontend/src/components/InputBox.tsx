function InputBox({placeholder,ref}:{placeholder:string,ref?:any}){
    return <input type="text" placeholder={placeholder} className=" rounded-md p-2 text-black" ref={ref} />
}
export default InputBox