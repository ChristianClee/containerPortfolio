import React, { useRef, useState }  from 'react';
import style from './Button2Portfolio.module.scss';
import { useSelector } from 'react-redux';
import { useActions } from '../../../hooks/reduxHook';
import { selectGreeting } from '../../../redux/greetingSlice';
import { addClass, goLink} from './utilits';



const Button2Portfolio: React.FC<{
  text:
  string,
  link: string,
  target?: string,
  clickRef: React.MutableRefObject<boolean>
}> = ({ text, link, target, clickRef }) => {

  const { getClickButtonFalse } = useActions()
  const { onClickButton } = useSelector(selectGreeting)
  const btnRef = useRef<HTMLAnchorElement>(null)
  


  return (
    <a href='###'
      className={style.wrapper}
      ref={btnRef}
      target={target ? target : "" }
      onClick={
        () => {
          addClass(
            btnRef,
            style.wrapActive,
            onClickButton,
            getClickButtonFalse)
          
          if (clickRef.current) {
            clickRef.current = false
            goLink(link, clickRef, 1500)
          }
        }}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {text}
    </a>
  );
}
export default Button2Portfolio;