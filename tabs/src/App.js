import React from 'react';
import './sass/App.scss';
import Tabs from './components/Tabs'
import LoadingSlide from './components/LoadingSlider'
function App() {
  return (
    <div className="App">
      <LoadingSlide/>
      <Tabs/>
    </div>
  );
}

export default App;
