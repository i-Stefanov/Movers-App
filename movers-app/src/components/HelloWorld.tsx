import React from "react";

type Props = {
  name: string; // The 'name' prop must be a string
};

const HelloWorld: React.FC<Props> = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

export default HelloWorld;
