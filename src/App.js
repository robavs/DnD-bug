import {useEffect, useState, useRef} from 'react';
import {
	draggable,
} from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import './App.css';

function Item() {
  const [tooltip1, setTooltip1] = useState(false);
  const itemRef = useRef();

  function showTooltip1(){
    console.log('showed');
    setTooltip1(true);
  }

  function hideTooltip1(){
    console.log('hide');
    setTooltip1(false);
  }

  useEffect(() => {
    draggable({ element: itemRef.current })
  }, []);

  return (
    <div ref={itemRef} className="item">
      {tooltip1 && <div className="firstTooltip">First tooltip is displayed</div>}
      <div
        onMouseEnter={showTooltip1}
        onMouseLeave={hideTooltip1}
        className="icon1"
      >
        Icon1
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="list">
      <Item />
    </div>
  )
}

