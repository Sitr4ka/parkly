const Modal= ({show=false,setShow=()=>{},children})=>{
    
    return(
        <>
        {show&&  
            <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50" >
                <div className="bg-white p-6 rounded-xl w-full max-w-lg">

                   {children} 
                   </div>
            </div>
        }
          
        </>
    )
}
export const ModalHeader=({children})=>{
    return(
        <>
            <div className="flex items-center justify-between p-4 md:p-5 ">
                {children}         
            </div>
        </>
    )
}
export const ModalBody=({children})=>{
    return (
        <>
            <div className="p-4 md:p-5 space-y-4">
                {children}
            </div>
        </>
    )
}
export const ModalFooter=({children})=>{
    return(
        <>
            <div className="flex items-center p-4 md:p-3">
            {children}
            </div>
        </>
    )
}
export default Modal