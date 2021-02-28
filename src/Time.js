import React, { useState, useEffect } from "react";
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
    <h2>
      {prettyMs(number, {
        colonNotation: true,
        keepDecimalsOnWholeSeconds: true,
      })}
    </h2>
  );
}

export default Time;
