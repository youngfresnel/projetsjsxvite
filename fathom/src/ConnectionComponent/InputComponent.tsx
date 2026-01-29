// import React from 'react'

import { Eye, EyeSlash } from "phosphor-react";
import { memo, useState, type InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes <HTMLInputElement> {
  labeltwo:string;
  labelone:string;
  placeone:string;
  placetwo:string;
  content?:string;
  isHrere:boolean;
  error?:string;
}



  const Loginput = ({labelone, labeltwo, isHrere,placetwo,placeone, error,content, ...props}:InputProps) => {

  const [isVisible, setIsVisible] = useState<boolean>();

  return(
    <div className="flex flex-col gap-1">
      <p className="text-black">{labelone}</p>
      <input {...props}   maxLength={50}  placeholder={placeone} className={`w-150  px-4 py-3 border  text-gray-500  text-1xl rounded-2xl outline-none focus:ring-2 focus:ring-black  ${error? "border-red-500" : "border-gray-300"}`} />
      <p className="text-black">{labeltwo}</p>
      <input {...props} placeholder={placetwo} type={isVisible? "text" :"password"}  minLength={8} maxLength={20} className={`w-150 px-4 py-3 border  text-gray-500  text-1xl rounded-2xl outline-none focus:ring-2 focus:ring-black  ${error? "border-red-500" : "border-gray-300"}`} />

        {error && (
        <span className="text-sm">
          {error}
        </span>
      )}

      {isHrere && (
        <div
        typeof="email"
        onClick={() => setIsVisible(!isVisible)}
        className=' absolute right-63 top-1/2 translate-y-0 text-gray-500'
        >
          {isVisible ? <Eye color="black"/> : <EyeSlash color="black"/>}
        </div>
      )}

      
    </div>
  )

}

export default memo(Loginput)




