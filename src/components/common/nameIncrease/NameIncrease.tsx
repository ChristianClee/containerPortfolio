import React from 'react';
import style from './NameIncrease.module.scss'


type PropsT = {

}
const NameIncrease:React.FC<PropsT> = () => {
  return (
    <div
      className={style.wrapper}
    >
      Ilya Mishkow
    </div>
  );
}
export default NameIncrease;