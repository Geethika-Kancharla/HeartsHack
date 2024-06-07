import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Dictaphone = () => {
  const [isListening, setIsListening] = useState(false);
  const {
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const handleStartListening = () => {
    SpeechRecognition.startListening({ continuous: true });
    setIsListening(true);
  };

  const handleStopListening = () => {
    SpeechRecognition.stopListening();
    setIsListening(false);
  };

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <p style={{ fontSize: 18, marginBottom: 20 }}>Microphone: {isListening ? 'on' : 'off'}</p>
      <button style={buttonStyle} onClick={handleStartListening} disabled={isListening}>Start</button>
      <button style={buttonStyle} onClick={handleStopListening} disabled={!isListening}>Stop</button>
      <button style={buttonStyle} onClick={resetTranscript}>Reset</button>
      <p style={{ marginTop: 20, fontSize: 18 }}>{transcript}</p>
    </div>
  );
};

const buttonStyle = {
  fontSize: 16,
  padding: '10px 20px',
  margin: '0 10px',
  cursor: 'pointer',
  background: '#50C878',
  color: '#fff',
  border: 'none',
  borderRadius: 5,
  outline: 'none',
};

export default Dictaphone;