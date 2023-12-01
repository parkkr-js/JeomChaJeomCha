const Tts = ({ transcript, isListening }) => {
    if (transcript && !isListening) {
      const speech = new SpeechSynthesisUtterance();
      speech.lang = "ko-KR";
      speech.text = transcript;
      window.speechSynthesis.speak(speech);
    }
  };
  
  export default Tts;
  