import { Check } from "phosphor-react";
import { memo, useState } from "react";

interface CheckboxProps {
  label: string;
  texte:string;
  checked: boolean;
  onChange: (value: boolean) => void;
}


const CheckBox =( {label, checked=false,texte ,onChange}:CheckboxProps) => {
    const [isChecked, setIsChecked] = useState(checked)
    //  const [activeIndex] = useState<boolean>(false) 

    const toogle = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onChange?.(newValue);
    }
    return(

        <div className="flex  cursor-pointer" onClick={()=>(toogle)}>
            <div className="flex flex-row gap-75">
                {/* carrer  */}
                <div className="flex flex-row gap-1">
                    <div
                        onClick={() => setIsChecked(isChecked == true ?false :true)}
                        className={`w-5 h-5 flex justify-center items-center rounded border transition-colors duration-200
                            ${isChecked ? "bg-blue-500 border-blue-500" :"bg-white border-gray-400"}`}
                        >
                        {isChecked && (
                        <Check size={8}/>
                        )}
                    </div>
                    <div>
                        <p className="text-black">{label}</p>
                    </div>
                </div>
                <div>
                    <p className="text-gray-700">{texte}</p>
                </div>
            </div>
        </div>
    )
}

export default memo(CheckBox);