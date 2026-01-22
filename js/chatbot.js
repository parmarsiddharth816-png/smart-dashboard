function sendMessage() {
  const input = document.getElementById("chat-input");
  const body = document.getElementById("chat-body");

  if (!input.value.trim()) return;

  const userMsg = document.createElement("div");
  userMsg.textContent = "You: " + input.value;
  body.appendChild(userMsg);

  const botMsg = document.createElement("div");
  botMsg.textContent = "Bot: I am your dashboard assistant 🤖";
  body.appendChild(botMsg);

  body.scrollTop = body.scrollHeight;
  input.value = "";
}
