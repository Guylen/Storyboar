import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import { ResizableBox } from "react-resizable";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./style.css";

const TextBlock = ({
  id,
  initialX = 0,
  initialY = 0,
  initialValue = "",
  onChange,
}) => {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [content, setContent] = useState(initialValue);
  const [size, setSize] = useState({ width: 200, height: 200 });

  useEffect(() => {
    setContent(initialValue);
  }, [initialValue]);

  const handleDrag = (e, data) => {
    setPosition({ x: data.x, y: data.y });
  };

  const handleContentChange = (newContent) => {
    setContent(newContent);
    onChange(newContent);
  };

  const handleResizeStop = (event, { size }) => {
    setSize(size);
  };

  const handleMouseDown = (e) => {
    e.stopPropagation(); // Prevent the drag event from being triggered
  };

  const modules = {
    toolbar: [[{ size: [] }], ["bold", "italic", "underline", "blockquote"]],
    clipboard: {
      matchVisual: true,
    },
  };

  return (
    <ResizableBox
      width={size.width}
      height={size.height}
      minConstraints={[100, 100]}
      maxConstraints={[500, 500]}
      onResizeStop={handleResizeStop}
      handle={<span className="resize-handle" onMouseDown={handleMouseDown} />}
    >
      <Draggable
        position={position}
        onDrag={handleDrag}
        handle=".draggable-handle" // Specify a handle class for dragging
        height="inherit"
      >
        <div style={{ position: "fixed" }}>
          <div className="draggable-handle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrows-move"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 0a.5.5 0 0 1 .5.5v5.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 6.293V.5A.5.5 0 0 1 8 0zM8 16a.5.5 0 0 1-.5-.5v-5.793l-3.146 3.147a.5.5 0 0 1-.708-.708l4-4a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1-.708.708L8.5 10.707V15.5A.5.5 0 0 1 8 16z"
              />
            </svg>
          </div>

          <ReactQuill
            value={content}
            onChange={handleContentChange}
            modules={modules}
          />
        </div>
      </Draggable>
    </ResizableBox>
  );
};

export default TextBlock;
