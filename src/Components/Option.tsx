import React from "react";

interface OptionProps {
  letter: number;
  text: string;
  onClick: () => void;
}

const indexToNumber = (letter: number) => {
  switch (letter) {
    case 0:
      return "A";
    case 1:
      return "B";
    case 2:
      return "C";
    case 3:
      return "D";

    default:
      break;
  }
};

const Option = ({ letter, text, onClick }: OptionProps) => {
  return (
    <div
      onClick={onClick}
      className="mt-3 flex h-10 w-full transition-all hover:cursor-pointer hover:shadow-[0_5px_50px_rgba(8,_112,_184,_0.7)]"
    >
      <div className="bg-[#4597ed] w-16 flex items-center justify-center">
        {indexToNumber(letter)}
      </div>
      <div className="bg-white w-full flex items-center text-black">
        <span className="px-3 text-lg">{text}</span>
      </div>
    </div>
  );
};

export default Option;
