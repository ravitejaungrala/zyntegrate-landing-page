import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, speed = 80, delay = 500, className = "" }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStart(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (start && index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[index]);
        setIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed, start]);

  const isFinished = index === text.length;

  return (
    <span style={{ whiteSpace: 'pre-line' }} className={`${className} ${!isFinished && start ? 'typing-active' : ''}`}>
      {displayedText}
    </span>
  );
};

export default Typewriter;
