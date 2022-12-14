import React from 'react';
import './App.css';

// Components
import Header from './components/header/header';
import HomePageContainer from './components/homePage/HomePageContainer';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <HomePageContainer></HomePageContainer>
    </div>
  );
}

export default App;
