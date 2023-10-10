
type btnRefT= React.RefObject<HTMLAnchorElement>

export function addClass(
  btnRef:btnRefT,
  style: string,
  state: boolean,
  func: ()=> void
) {

  const btnRef_ = btnRef.current
    if (state && btnRef_) {
      btnRef_.classList.add(style)
      func()
  }
    // if (btnRef_) {
  //   const cl = btnRef_.classList[0]
  //   const unActive = document.getElementsByClassName(cl)
  //   for (let i = 0; i < unActive.length; i++){
  //     const elem = unActive[i]   
  //   }
  // }
}
  
export function goLink(timeDelay: number) {
  setTimeout(() => {
    window.location.href = "https://www.google.com/"
  },timeDelay)
}