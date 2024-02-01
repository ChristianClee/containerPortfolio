import { useState } from "react"
type btnRefT = React.RefObject<HTMLAnchorElement>






export function addClass(
  btnRef:btnRefT,
  style: string,
  state: boolean,
  func: (arg: boolean)=> void
) {
  const btnRef_ = btnRef.current
    if (state && btnRef_) {
      btnRef_.classList.add(style)
      func(false)
      setTimeout(() => {
        btnRef_.classList.remove(style)
        func(true);
        }, 1400);
  }

}

  
export function goLink(
  link: string,
  clickRef: React.MutableRefObject<boolean>,
  timeDelay: number
) {
  return setTimeout(() => {
    window.open(link, "_blank");
    clickRef.current = true
  }, timeDelay);
}