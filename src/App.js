import { useEffect, useRef } from 'react';
import { draggable } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import './styles.css';

const ComponentOne = () => (
  <div className="component-one">
    First cmp
    <span>New Cmp</span>

  </div>
);

const ComponentTwo = () => (
  <div className="component-two">
    Component Two
  </div>
);

const ComponentThree = () => (
  <div className="component-three">
    Component Three
  </div>
);

const ComponentFour = () => (
  <div className="component-four">
    Component Four
  </div>
);

const ComponentFive = () => (
  <div className="component-five">
    Component Five
  </div>
);

const Wrapper = ({ Comp }) => {
  const ref = useRef();

  useEffect(() => {
    return draggable({
      element: ref.current
    })
  }, []);

  return (
    <div ref={ref}>
      <Comp/>
    </div>
  );
}

const App = () => {

  return (
    <div className="container">
      <Wrapper Comp={ComponentOne} />
      <Wrapper Comp={ComponentTwo} />
      <Wrapper Comp={ComponentThree} />
      <Wrapper Comp={ComponentFour} />
      <Wrapper Comp={ComponentFive} />
      <Wrapper Comp={ComponentOne} />
      <Wrapper Comp={ComponentThree} />
      <Wrapper Comp={ComponentThree} />
      <Wrapper Comp={ComponentOne} />
    </div>
  );
};

export default App;