import React, { useRef }  from 'react';
import style from './Button2Portfolio.module.scss';
import { useSelector } from 'react-redux';
import { useActions } from '../../../hooks/reduxHook';
import { selectGreeting } from '../../../redux/greetingSlice';
import { addClass, goLink } from './utilits'

const Button2Portfolio: React.FC<{ text: string }> = ({ text,}) => {
  const {getClickButtonFalse} = useActions()
  const { onClickButton } = useSelector(selectGreeting)
  const btnRef = useRef<HTMLAnchorElement>(null)




  return (
    <a href='###'
      className={style.wrapper}
      ref={btnRef}
      onClick={
        () => {
          addClass(
        btnRef,
        style.wrapActive,
        onClickButton,
        getClickButtonFalse)
          goLink(1200)
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