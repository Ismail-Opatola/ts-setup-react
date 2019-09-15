import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from './TextField';
import { Counter } from './Counter';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <TextField
        hintText=""
        errorText=""
        floatingLabelText=""
        multiLine={false}
        rows={1} 
        myPersonObject={{
          fname: 'ISMAIL',
          lname: 'OPATOLA'
        }}
        handleChange={(e => e.preventDefault())}
        /> */}
        <Counter>
           {({count, setCount}) => (
             <div>
               {count}
               <button onClick={() => setCount(count++)}>+</button>
             </div>
           )}
        </Counter>
    </div>
  );
}

export default App;
