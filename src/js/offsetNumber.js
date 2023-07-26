function captureKey() {
  const value = document.querySelector(".offset-input").value;
  return localStorage.setItem("key", value);
}
document.querySelector(".btn-offset").addEventListener("click", captureKey);
