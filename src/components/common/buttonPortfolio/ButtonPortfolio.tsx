import React from 'react';
import style from './ButtonPortfolio.module.scss'

const ButtonPortfolio:React.FC<{text:string}> = ({text}) => {
  return (
    <button className={style.wrapper}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {text}
    </button>
  );
}
export default ButtonPortfolio;