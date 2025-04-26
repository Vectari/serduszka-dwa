import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

export function Alert() {
  const [isShown, setIsShown] = useState(true);
  const [text, setText] = useState("");
  const [fontColor, setFontColor] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [adminPass, setAdminPass] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (adminPass === import.meta.env.VITE_ADMIN_PASS) {
      try {
        // Używamy stałego identyfikatora dla dokumentu
        const docRef = doc(db, "alerts", "alert"); // "alert" to unikalny identyfikator dokumentu
        await setDoc(docRef, {
          isShown,
          text,
          fontColor,
          bgColor,
        });
        console.log("Document successfully written!");

        // Odświeżenie strony po udanym zapisaniu danych
        window.location.reload(); // Odświeża stronę

        // Opcjonalnie możesz wyczyścić formularz po wysłaniu
        // setIsShown(true);
        // setText("");
        // setFontColor("");
        // setBgColor("");
        // setAdminPass("");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    } else {
      alert("Incorrect admin password");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        isShown:
        <input
          type="checkbox"
          checked={isShown}
          onChange={() => setIsShown(!isShown)}
        />
      </label>
      <br />
      <label>
        Text:
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <br />
      <label>
        Kolor czcionki:
        <select
          value={fontColor}
          onChange={(e) => setFontColor(e.target.value)}
        >
          <option value="">Select Color</option>
          <option value="white">Biały</option>
          <option value="black">Czarny</option>
        </select>
      </label>
      <br />
      <label>
        Kolor tła:
        <select value={bgColor} onChange={(e) => setBgColor(e.target.value)}>
          <option value="">Select Color</option>
          <option value="red">Czerwony</option>
          <option value="green">Zielony</option>
        </select>
      </label>
      <br />
      <label>
        Admin Password:
        <input
          type="password"
          value={adminPass}
          onChange={(e) => setAdminPass(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Send</button>
    </form>
  );
}
