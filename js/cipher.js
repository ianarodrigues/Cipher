const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const cipher = {
  encode(key, message) {
    if (typeof key !== "number") {
      throw new TypeError("Key precisa ser um número");
    }
    let newMessage = "";
    for (const char of message) {
      const charIndexAtAlphabet = alphabet.indexOf(char);
      if (charIndexAtAlphabet >= 0) {
        const newChar = alphabet.charAt((charIndexAtAlphabet + key) % 26);
        newMessage += newChar;
      } else {
        newMessage += char;
      }
    }
    return newMessage;
  },
  decode(key, message) {
    if (typeof key !== "number") {
      throw new TypeError("Key precisa ser um número");
    }
    let newMessage = "";
    for (const char of message) {
      const charIndexAtAlphabet = alphabet.indexOf(char);
      if (charIndexAtAlphabet >= 0) {
        const newChar = alphabet.charAt(
          (((charIndexAtAlphabet - key) % 26) + 26) % 26
        );
        newMessage += newChar;
      } else {
        newMessage += char;
      }
    }
    return newMessage;
  },
};

export default cipher;
