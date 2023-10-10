import React, { useState } from 'react';
import style from "./Greeting.module.scss"
import LinkPortfolio from '../../components/common/linkPortfolio/LinkPortfolio'
import ButtonPortfolio from '../../components/common/buttonPortfolio/ButtonPortfolio';
import Button2Portfolio from '../../components/common/button2portfolio/Button2Portfolio';


const Greeting: React.FC = () => {
  

  return (
    <nav className={style.wrapper}>
      <Button2Portfolio text={"clocks"} />
      <Button2Portfolio text={"matrix"} />
      <Button2Portfolio text={"pizza's store"} />
      <Button2Portfolio text={"book's app"} />
    </nav>
  );
}
export default Greeting;


