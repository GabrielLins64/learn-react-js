import React from 'react';
import ReactDOM from 'react-dom/client';
// import TikTakToe from './components/TikTakToe/Index';
// import Clock from './components/Clock/Index';
// import FClock from './components/FClock/Index';
// import ThemeText from './components/Themes/Index';
// import Counter from './components/ReducerCounter/Index';
import MeasureExample from './components/CallbackRef/Index';
import './style.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="App">
    {/* <TikTakToe /> */}
    {/* <Clock /> */}
    {/* <FClock /> */}
    {/* <ThemeText /> */}
    {/* <Counter initialState={0} /> */}
    <MeasureExample />
  </div>
);
