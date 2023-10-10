import React from 'react';
import Header from './components/header/Header';
import Greeting from './pages/greeting/Greeting';



const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Greeting/>
      </main>
    </div>
  );
}
export default App;