import { memo } from "react";

interface LineProps {
  width?: string; // largeur 
  height?: string; // hauteur
  color?: string; // couleur 
}

const Line = ({ width = "100%", height = "1px", color = "#DDDDDD", ...props }: LineProps) => {
  return (
    <div
      style={{ width, height, backgroundColor: color, }}
      {...props}
    />
  );
};

export default memo(Line);
