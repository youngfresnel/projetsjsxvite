import { memo, type HTMLAttributes } from "react"

export interface LinkProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  source: string
}

const Linkcard = ({ title, source, ...props }: LinkProps) => {
  return (
    <div
      className="flex flex-row items-center justify-center w-[136px] h-[50px] rounded-[12px] border gap-2 border-[#DDDDDD]"
      {...props}
    >
      <img src={source} alt={title} className="  rounded" />
      
      <p className="text-center font-medium text-black translate-y-0">{title}</p>
    </div>
  )
}

export default memo(Linkcard)
