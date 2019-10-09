import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = function(mode, replace = false) {
    setMode(mode);
    setHistory(prev => [...prev, mode]);
    if (replace) {
      setHistory(history.splice(history.length - 2, 1, mode));
    }
  };
  const back = function() {
    if (history.length > 1) {
      history.pop();
    }
    setMode(history[history.length - 1]);
  };

  return { mode, transition, back };
}
