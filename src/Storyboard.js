import React from 'react';
import Canvas from './Canvas';

const Storyboard = () => {
  const draw = (context) => {
    // Your storyboard drawing code here
  };

  return (
    <div>
      <Canvas draw={draw} />
    </div>
  );
};

export default Storyboard;