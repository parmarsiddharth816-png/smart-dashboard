function startVoice() {
  let rec = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  rec.lang = "en-US";
  rec.start();
  rec.onresult = e => {
    userInput.value = e.results[0][0].transcript;
  };
}
