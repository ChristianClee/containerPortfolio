import React from 'react';
import style from "./GoBack.module.scss"
import { ReactComponent as GoBackSVG } from "../../assets/pictures/svg/goBackArrow.svg"





const GoBack: React.FC = () => {


  return (
    <div
      className={style.wrapper}
      onClick={() => {
      }}
    >
      <GoBackSVG className={style.picture} />
    </div>
   
  );
}
export default GoBack;