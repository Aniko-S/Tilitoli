import React, { useEffect } from "react";
import prettyMs from "pretty-ms";

function Time({ run, number, setNumber }) {
  useEffect(() => {
    const interval = setInterval(() => {
      if (run) {
        setNumber((number) => number + 10);
      }
    }, 10);
    return () => clearInterval(interval);
  }, [run]);

  return (
    <h1>
      {prettyMs(number, {
        colonNotation: true,
        keepDecimalsOnWholeSeconds: true,
      })}
    </h1>
  );
}

export default Time;
