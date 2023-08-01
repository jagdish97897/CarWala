
import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formatTime = (time) => {
    return time.toLocaleTimeString('en-US', { hour12: false });
  };

  return <div>{formatTime(currentTime)}</div>;
};

export default Clock;
