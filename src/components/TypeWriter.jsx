import { useState, useEffect } from 'react';

const TypeWriter = ({
  text,
  speed = 100,
  delay = 0,
  showCursor = true,
  onComplete,
  className = '',
  startDelay = 0
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (startDelay > 0) {
      const startTimer = setTimeout(() => {
        setHasStarted(true);
      }, startDelay);
      return () => clearTimeout(startTimer);
    } else {
      setHasStarted(true);
    }
  }, [startDelay]);

  useEffect(() => {
    if (!hasStarted || isCompleted) return;

    const delayTimer = setTimeout(() => {
      setIsTyping(true);
      let currentIndex = 0;

      const typingInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
          setIsCompleted(true);
          if (onComplete) {
            onComplete();
          }
        }
      }, speed);

      return () => clearInterval(typingInterval);
    }, delay);

    return () => clearTimeout(delayTimer);
  }, [text, speed, delay, onComplete, hasStarted, isCompleted]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && isTyping && (
        <span
          style={{
            display: 'inline-block',
            width: '2px',
            height: '1em',
            backgroundColor: '#64ffda',
            marginLeft: '2px',
            animation: 'typewriter-blink 1s infinite'
          }}
        />
      )}
    </span>
  );
};

export default TypeWriter;