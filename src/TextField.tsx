import React, { useState, useRef } from "react";

interface Person {
  fname: string;
  lname: string;
}

interface Props {
  text?: string; // optional
  hintText: string;
  errorText: string;
  floatingLabelText: string;
  multiLine: boolean;
  rows: number;
  onType: (text: string) => string; // return string
  onTypeII: (text: string) => void; // no return value
  myObject: {
    n1: string;
    n2: string;
  };
  myPersonObject: Person;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextNode {
  text: string;
}

const TextField: React.FC<Props> = ({ handleChange }) => {
  const [count, setCount] = useState<number | null | undefined>(5);
  // int, null or undefined

  const [objCount, setObjCount] = useState<{ text: string }>({ text: "hello" }); // object

  const [objCountII, setObjCountII] = useState<TextNode>({ text: "hello" });
  // object

  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  setCount(null);

  return (
    <div ref={divRef}>
      <input ref={inputRef} onChange={handleChange} />
    </div>
  );
};

export default TextField;
