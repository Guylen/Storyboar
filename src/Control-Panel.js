import React from 'react';

const ControlPanel = ({ onTextChange, onToggleMode, isResizeMode }) => {
  return (
    <div className="control-panel">
      <h4>Text Settings</h4>
      <select onChange={(e) => onTextChange('size', e.target.value)}>
        <option value="">Select Size</option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
      <button onClick={() => onTextChange('bold')}>Bold</button>
      <button onClick={() => onTextChange('italic')}>Italic</button>
      <button onClick={() => onTextChange('underline')}>Underline</button>

      <div>
        <label>
          <input
            type="checkbox"
            checked={isResizeMode}
            onChange={onToggleMode}
          />
          Toggle Resize/Drag
        </label>
      </div>
    </div>
  );
};

export default ControlPanel;