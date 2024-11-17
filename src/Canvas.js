import React, { useState } from 'react';
import ToolBar from './ToolBar';
import TextBlock from './TextBlock';

const Canvas = (props) => {

  const [TextBlocks, setTextBlocks] = useState([]); //state to store the text boxes
  const [TextBlockValues, setTextBlockValues]  = useState({}); //state to store the text box values

  const handleAddTextBlock = () => {
  // update the sate to add a new text block.  This will trigger a re-render of the component
    const newTextBlockId = {id: `textBlock-${TextBlocks.length}`, x: 30, y: 30, value:""  };
    setTextBlocks((prevState) => [...prevState, { id: newTextBlockId, x: 30, y: 30, value:"" } ]);
    setTextBlockValues((prevState) => ({ ...prevState, [newTextBlockId]: '' }));
  };

  const handleTextBlockChange = (id, value) => {
    console.log('updating textblock', id, value);
    setTextBlockValues((prevState) => ({...prevState, [id]: value}));
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        backgroundColor: '#f0f0f0',
        overflow: 'auto',
      }}
    >
      <ToolBar onAddTextBlock={handleAddTextBlock} /> {/* Add the toolbar component */}
        {TextBlocks.map((textBlock) => (
          <TextBlock
            key={textBlock.id}
            id={textBlock.id}
            x={textBlock.x}
            y={textBlock.y}
            value={TextBlockValues[textBlock.id]}
            onChange={(value) => handleTextBlockChange(textBlock.id, value)}
          />
        ))}
    </div>
  );
};

export default Canvas;