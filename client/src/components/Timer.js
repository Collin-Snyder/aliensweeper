import React, { useState } from "react";
import { useInterval } from "../scripts/customHooks";

const Timer = () => {
  const [time, setTime] = useState(0);

  useInterval(() => {
    setTime(time + 1);
  }, 1000);

  return (
    <div className="headerItem timer">{time.toString().padStart(3, "0")}</div>
  );
};

export default Timer;
