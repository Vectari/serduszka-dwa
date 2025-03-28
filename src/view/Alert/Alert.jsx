import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
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
        const docRef = await addDoc(collection(db, "alerts"), {
          isShown,
          text,
          fontColor,
          bgColor,
        });
        console.log("Document written with ID: ", docRef.id);
        // Clear form after submission
        setIsShown(true);
        setText("");
        setFontColor("");
        setBgColor("");
        setAdminPass("");
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
        Font Color:
        <select
          value={fontColor}
          onChange={(e) => setFontColor(e.target.value)}
        >
          <option value="">Select Color</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          {/* Add more color options as needed */}
        </select>
      </label>
      <br />
      <label>
        Background Color:
        <select value={bgColor} onChange={(e) => setBgColor(e.target.value)}>
          <option value="">Select Color</option>
          <option value="white">White</option>
          <option value="black">Black</option>
          <option value="gray">Gray</option>
          {/* Add more color options as needed */}
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
