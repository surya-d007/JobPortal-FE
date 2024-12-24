"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
const TextWithReadMore = ({ text, url, limit }) => {
  const [isTruncated, setIsTruncated] = useState(true);
  const router = useRouter();

  // Truncate the text to the specified limit
  const truncatedText =
    text.slice(0, limit) + (text.length > limit ? "  ..." : "  ...");

  return (
    <div className="   ">
      <p className=" text-xs md:text-sm  min-w-full text-justify indent-8 text-gray-700">
        {isTruncated ? truncatedText : text}
        <span className="text-[#6C63FF] hover:no-underline underline ml-3 text-sm ">
          Read More
        </span>
      </p>
    </div>
  );
};

export default TextWithReadMore;
