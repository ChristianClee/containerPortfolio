import React from 'react';
import style from './FlashingInscript.module.scss'


type PropsT = {
  text: string;
  styleClass: "normal" | "flashing";
  delay: string;
}


const FlashingInscript:React.FC<PropsT> = ({text,styleClass, delay}) => {
  return (
    <div
      className={style.wrapper}
    >
      {text.split('').map((item, index) => (
        <span
          key={index}
          className={style[styleClass]}
          
          style={{'--delay': delay}}
        >{item}</span>
      ) )} 
    </div>
  );
}
export default FlashingInscript;