import React from "react";

const App = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>hello from {process.env.NODE_ENV} env!!</p>
    </div>
  );
};

export default App;
