import React from 'react'
import { useEffect,useState } from 'react';
import "../styles/Typewriter.scss"


    const Typewriter = () => {
        const [text, setText] = useState('');
        const phrases = [
         "Design",
         "Size n Shape",
         "Colour",
         "Materials",
         "Finishing Touches"

        ];
        const typingSpeed = 100; // Adjust the typing speed (interval) as needed
        const pauseDuration = 3000; // Adjust the pause between phrases as needed
      
        useEffect(() => {
          let currentPhraseIndex = 0;
          let currentCharacterIndex = 0;
      
          const typeNextCharacter = () => {
            const currentPhrase = phrases[currentPhraseIndex];
            if (currentCharacterIndex <= currentPhrase.length) {
              setText(currentPhrase.slice(0, currentCharacterIndex));
              currentCharacterIndex++;
            } else {
              currentCharacterIndex = 0;
              currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length; // Cycle through phrases
              setText('');
              setTimeout(typeNextCharacter, pauseDuration);
            }
          };
      
          const typingInterval = setInterval(typeNextCharacter, typingSpeed);
      
          return () => {
            clearInterval(typingInterval);
          };
        }, []);
      
        return <div className='typecontainer'>
      <div className="typewriter-text">{text}</div>
      </div>;
      };


export default Typewriter