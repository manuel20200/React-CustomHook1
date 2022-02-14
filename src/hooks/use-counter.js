import { useState, useEffect } from "react";

const useCounter = (fordwards = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (fordwards) {
                setCounter((prevCounter) => prevCounter + 1);
            } else {
                setCounter((prevCounter) => prevCounter - 1);
            }
    }, 1000);

    return () => clearInterval(interval);
  }, [fordwards]);

  return counter;
};

export default useCounter;