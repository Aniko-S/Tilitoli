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
    <div className="row justify-content-center align-items-center h-25">
      <div className="time">
        {prettyMs(number, {
          colonNotation: true,
          keepDecimalsOnWholeSeconds: true,
        })}
      </div>
    </div>
  );
}

export default Time;
