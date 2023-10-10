import style from './LinkPortfolio.module.scss'

interface Ilink { children: string, link: string }

const LinkPortfolio: React.FC<Ilink> = ({ children, link }) => {
  return (
    <button
      className={style.wrapper}
      onLoad={() => { console.log("sdfds") }}
    >
      {children}
    </button>
  )
}
export default LinkPortfolio