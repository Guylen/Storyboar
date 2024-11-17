import React from 'react';
import Canvas from './Canvas';

const App = () => {
  const draw = (context) => {
    // Your drawing code here
  };

  return (
    <div>
      <Canvas draw={draw} />
    </div>
  );
};

export default App;
