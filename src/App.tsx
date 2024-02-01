import React, { useRef, useState } from 'react';
import Header from './components/header/Header';
import Greeting from './pages/greeting/Greeting';
import picture from './assets/pictures/jpg/background_game.jpg'
import { CSSTransition } from 'react-transition-group';
import NameIncrease from './components/common/nameIncrease/NameIncrease';
import { useActions } from './hooks/reduxHook'
import { useSelector } from 'react-redux';
import { selectGreeting } from './redux/greetingSlice';
import "./styles/transition.scss"

const App: React.FC = () => {
  const {onClickButton} = useSelector(selectGreeting)
  // console.log(onClickButton)
  const increaseRef = useRef<boolean>(false)
  const [inscript, setInscript] = useState<boolean>(false)

  setTimeout(() => {
    setInscript(onClickButton)
  },200)


  return (
    <div className="App">
      {/* <Header /> */}
      
      <main>
        <CSSTransition
          in={inscript}
          classNames={"aaa"}
          timeout={1500}
          mountOnEnter={true}
          unmountOnEnter={true}
        >
          <NameIncrease/>
        </CSSTransition>
        
        <Greeting/>
      </main>
      <img src={picture} alt="" className='background' />
    </div>
  );
}
export default App;