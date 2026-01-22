document.getElementById("chat-toggle").onclick = toggleChat;

function toggleChat() {
  document.getElementById("chatbot").classList.toggle("hidden");
}

function sendMessage() {
  let input = document.getElementById("userInput");
  let msg = input.value.trim();
  if (!msg) return;

  addMsg(msg, "user-msg");
  input.value = "";

  setTimeout(() => {
    addMsg(aiReply(msg), "bot-msg");
  }, 500);
}

function addMsg(text, cls) {
  let div = document.createElement("div");
  div.className = cls;
  div.innerText = text;
  chatBody.appendChild(div);
}

function aiReply(q) {
  q = q.toLowerCase();
  if (q.includes("revenue")) return "Revenue is $84,000";
  if (q.includes("users")) return "Active users: 12,800";
  if (q.includes("orders")) return "Total orders: 3,600";
  return "Ask about revenue, users or orders";
}
