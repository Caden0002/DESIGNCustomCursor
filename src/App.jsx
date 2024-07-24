import React from 'react';
import Page1 from "./components/Page1";
import useCustomCursor from './components/useCustomCursor';

function App() {
  useCustomCursor(); // Use the custom hook

  return (
    <div>
      <style>
        {`
          /* Apply custom cursor globally and for all states */
          html, body, *, button, a, input,
          .disabled, a:disabled, input:disabled {
            cursor: url('/blackcircle.svg'), auto;
          }

          button:hover, a:hover, input:hover, .hover:hover {
            cursor: url('/whitecircle.svg'), auto;
          }

          body.red-cursor * {
            cursor: url('/redcircle.svg'), auto;
          }
        `}
      </style>
      <Page1 />
    </div>
  );
}

export default App;
