import { memo, useState, type ReactNode } from "react";
  //  definition des formats des donnes de nos composants 
interface SelectBouton {
    label:string;
    content:ReactNode;
}

interface ScreenGroupProps {
    boutton:SelectBouton[];
    defaulActive?:number;
}

const ScreenGroup = ({boutton, defaulActive = 1}:ScreenGroupProps) => {

    const [activeIndex, setActiveIndex] = useState<number | null>(defaulActive)  // typages de l'etats de chaque ecran
    return(
        <div className="flex flex-col gap-4 mt-10">
            {/* Les boutton */}
            <div className="flex left-2">
                {boutton.map((btn, index ) => (
                    <div
                    key={index}
                    onClick={()=>setActiveIndex(activeIndex===index? index:index)}
                    className={`px-2 py-2 w-[150px] h-10  rounded-tr-[6px]  rounded-tl-[6px] font-bold transition-colors duration-100 
                    ${activeIndex === index ? 'bg-[#153F2A]' :'bg-[#FFFFFF] text-gray-700'}`}
                    >
                        <div className="text-center">
                        {btn.label}
                        </div>
                    </div>
                ))}
            </div>
            {/* Page affiche de maniere conditionner  */}
            <div
            className="w-full flex justify-center "
            >
                {activeIndex !== null && (
                    <div
                    className=" bg-white"
                    >
                        {boutton[activeIndex].content}
                    </div>
                )}
            </div>
         </div>
    )
}

export default memo(ScreenGroup);

