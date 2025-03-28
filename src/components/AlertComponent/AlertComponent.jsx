import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import styled from "styled-components";

// Styled component
const StyledAlertComponent = styled.div`
  color: ${(props) => props.fontColor || "black"};
  background-color: ${(props) => props.bgColor || "#f72c2c"};
  text-align: center;
  margin: -1rem;
  border-radius: 1rem;
`;

export function AlertComponent() {
  const [alertData, setAlertData] = useState(null);

  useEffect(() => {
    const fetchAlertData = async () => {
      const docRef = doc(db, "alerts", "alert");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setAlertData(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };

    fetchAlertData();
  }, []);

  // Jeśli dane są w trakcie ładowania lub alertData jest null, komponent nie renderuje nic
  if (!alertData) return null;

  const { isShown, text, fontColor, bgColor } = alertData;

  // Jeśli isShown jest false, komponent nie wyświetla alertu
  if (!isShown) return null;

  return (
    <StyledAlertComponent fontColor={fontColor} bgColor={bgColor}>
      <h3>{text}</h3>
    </StyledAlertComponent>
  );
}
