import React, { useState } from 'react';

const ToolBar= ({ onAddTextBlock }) => {
  const [textBlocks, setTextBlocks ] = useState([]);
  const newTextBlock = ``;
  
  const handleAddTextBlock = () => {
    onAddTextBlock();
    setTextBlocks([...textBlocks, newTextBlock]);
    console.log('Add text block button click')
  };

  return (
    <div style={{ backgroundColor: '#333', padding: 10, color: '#fff' }}>
      <h2 >StoryBoar</h2>
      <button onClick={handleAddTextBlock}>Add Text Box</button>
    </div>
  );
};

export default ToolBar;