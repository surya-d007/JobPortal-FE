"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AdBanner() {
  useEffect(() => {
    if (window.adsbygoogle) {
      window.adsbygoogle.push({});
    }
  }, []);

  return (
    <div>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-1280785045224988"
        data-ad-slot="2100071845"
        data-ad-format="auto"
        data-ad-test="on"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}
