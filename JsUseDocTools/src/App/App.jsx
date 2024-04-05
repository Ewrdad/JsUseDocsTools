import React from 'react';

/**
 * @alias App
 * @description Main entry point of the render process for viewing
 * 
*/
export const App = () => {
    const [first, setfirst] = useState("second")
  return (
    <div>
      <h1>Hello, world from react</h1>
    </div>
  );
}