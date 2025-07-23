import React, { useEffect } from "react";

export default function Contactus() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//code.tidio.co/lxnwmcazrboqzyud8a0nnjny4mwvqbfz.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      
    </>
  );
}
