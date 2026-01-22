function startVoice() {
  if (!("webkitSpeechRecognition" in window)) {
    alert("Voice not supported in this browser");
    return;
  }

  const recognition = new webkitSpeechRecognition();
  recognition.lang = "en-US";
  recognition.start();

  recognition.onresult = function (event) {
    document.getElementById("chat-input").value =
      event.results[0][0].transcript;
  };
}
