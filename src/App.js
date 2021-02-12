import logo from './logo.svg';
import './App.css';
import Child2 from './Child2';
import Child1 from './Child1';
import { useState } from 'react';

function App() {
  const [selectedMessage,setMessage]=useState('open');
  return (
    <div className="app">

    <Child2 selectedMessage={selectedMessage}/>
    <Child1 setMessage={setMessage}/>
     </div>
  );
}

export default App;
