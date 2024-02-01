import React, { useState, useRef } from 'react';
import style from "./Greeting.module.scss"
import LinkPortfolio from '../../components/common/linkPortfolio/LinkPortfolio'
import ButtonPortfolio from '../../components/common/buttonPortfolio/ButtonPortfolio';
import Button2Portfolio from '../../components/common/button2portfolio/Button2Portfolio';
import FlashingInscript from '../../components/common/flashingInscript/FlashingInscript';


const Greeting: React.FC = () => {
  const clickRef = useRef(true)

  return (
    <nav className={style.wrapper}>
      <div className={style.item}>
        <Button2Portfolio text={"Tic-Tac_Toe"} link={"http://miskkov-ilya-test.ru"} clickRef={clickRef} />
        <FlashingInscript text={"full Stuck"} styleClass={"flashing"} delay='0s'/>
      </div>

      <div className={style.item}>
        <Button2Portfolio text={"Film App"} link={"https://christianclee.github.io/films_site/"} clickRef={clickRef }/>
        <FlashingInscript text={"frontedn"} styleClass={"normal"} delay='1s'/>
      </div>

      <div className={style.item}>
        <Button2Portfolio text={"clocks"} link={"https://christianclee.github.io/clock/"} clickRef={clickRef } />
        <FlashingInscript text={"frontend"} styleClass={"normal"} delay='2s'/>
      </div>

      <div className={style.item}>
        <Button2Portfolio text={"pizza's store"} link={"https://christianclee.github.io/Pizza_app/"} clickRef={clickRef }/>
        <FlashingInscript text={"frontend"} styleClass={"normal"} delay='3s'/>
      </div>      
    </nav>
  );
}
export default Greeting;


