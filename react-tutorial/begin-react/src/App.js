import React from 'react';
import Hello from './Hello.js';
import Wrapper from './Wrapper.js';

function App() { 
  return (
    <Wrapper>
      <Hello name='react' color='red'/>
      <Hello color="green"/>
    </Wrapper>
  );
}

export default App;
