import { memo, type ButtonHTMLAttributes } from "react";

 export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string; 
}      

const Bouton = ({label, ...props}:ButtonProps) => {
    return(
        <button  {...props}  className=" flex justify-center items-center w-full h-[56px] rounded-[12px]  bg-[#A1E86F]">
            <p className=" text-[#153F2A]">{label}</p>
        </button>
    )
}
 
export default   memo(Bouton)



