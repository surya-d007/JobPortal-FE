import React from "react";

export default function TextWithPartialUnderline({ title, length }) {
  const firstChar = title.slice(0, 1); // First character (no underline)
  const firstPart = title.slice(1, length); // From the second character to the desired length
  const remainingPart = title.slice(length, 40); // The remaining text after the 'length' characters

  return (
    <h1 className="font-medium text-[0.8rem] md:text-lg lg:text-xl">
      {firstChar}
      <span className="underline underline-offset-2 md:underline-offset-[7px] decoration-3">
        {firstPart}
      </span>
      {remainingPart}
    </h1>
  );
}
