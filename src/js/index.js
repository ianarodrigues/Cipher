import cipher from "./cipher.js";

function getKey() {
  return Number(localStorage.getItem("key"));
}

function getMessage() {
  return document.querySelector(".write-secret").value.toUpperCase();
}

function codeMessage() {
  const newMessage = cipher.encode(getKey(), getMessage());
  return localStorage.setItem("codedMessage", newMessage);
}
function decodeMessage() {
  const newMessage = cipher.decode(getKey(), getMessage()); // return localStorage.setItem("decodedMessage", newMessage);
  return localStorage.setItem("decodedMessage", newMessage);
}
document.querySelector(".btn-encode").addEventListener("click", codeMessage);
document.querySelector(".btn-decode").addEventListener("click", decodeMessage);
