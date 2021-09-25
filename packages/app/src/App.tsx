import React from 'react';
import { Button, Body } from '@justin/shared'
import './App.css';

function App() {
  return (
    <div className="App">
      <Button color="#000" backgroundColor="red">Button import from shared</Button>
      <Body fontSize={12} fontWeight={500}>Text from shared</Body>
    </div>
  );
}

export default App;
