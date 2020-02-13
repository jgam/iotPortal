import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello'
import Wrapper from './Wrapper'
import GetUserInfo from './GetUserInfo';
import Counter from './Counter';
import InputSample from './InputSample'

function App() {

  
  return (
    <div>
      <Wrapper>
        <Hello name="react" color="red"/>
        <Hello color="pink"/>
      </Wrapper>
      <Counter />
      <GetUserInfo />
      <InputSample />

      
    </div>
  );
}
export default App;
