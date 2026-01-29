// import React from 'react'

import { memo } from "react"
import { apple, facebook, google } from "../constantes/Imgpath"
import Bouton from "./Bouton"
import CheckBox from "./CheckboxComponent"
import InputComponent from "./InputComponent"
import LineComponent from "./LineComponent"
import LinkComponent from "./linkComponent"

const EmailConnection = () => {
  return (
    <div className="">
        <div className="flex ">
            <InputComponent labelone="Email" placeone="Enter your adress email" isHrere={true} labeltwo="Password" placetwo="Entrer your password"/>
        </div>
        <div className="flex flex-col mt-5 ml-2">
            <CheckBox label="Se souvenir de moi" checked={true} onChange={(value)=>console.log(value)} texte="Forgot Passeword"/>
        </div>
        <div className="mt-10">
            <Bouton label="Login"/>
        </div>
        <div className="flex flex-row gap-4 mt-10 ml- ">
            <LineComponent width="255px"/> 
            <p className="font-bold text-1xl text-black -mt-3">Or with</p>
            <LineComponent width="255px"/> 

        </div>
        <div className="flex flex-raw gap-20 mt-10">
            <LinkComponent title="Apple" source={apple}/>
            <LinkComponent title="Google" source={google}/>
            <LinkComponent title="Facebook" source={facebook}/>
        </div>
        <div className="mt-5">
            <p className=" text-[#505050]"><span className="text-[#505050] font-bold px-1">Don't have an account?</span>sign up</p>
        </div>
        <div className="mt-17">
            <p className="text-[#505050]">2026 Flexum All reserved</p>
        </div>
    </div>
  )
}

export default memo(EmailConnection)
