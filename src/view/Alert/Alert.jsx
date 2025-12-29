import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

import styled from "styled-components";
import { theme } from "../../theme";

const FormWrapper = styled.div`
  max-width: 600px;
  background-color: ${theme.border_and_lines};
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid ${theme.border_and_lines};
  font-size: 1rem;
  outline: none;

  &:focus {
    border-color: ${theme.primary};
  }
`;

const ColorInput = styled.input`
  height: 48px;
  padding: 0;
  border-radius: 0.5rem;
  border: 1px solid ${theme.border_and_lines};
  cursor: pointer;
  background: none;

  &::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  &::-webkit-color-swatch {
    border: none;
    border-radius: 0.5rem;
  }

  &::-moz-color-swatch {
    border: none;
    border-radius: 0.5rem;
  }
`;

const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
`;

const Button = styled.button`
  background-color: ${theme.navbar_text_hover};
  color: ${theme.navbar_text};
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: ${theme.section_one_btn_background};
  }
`;

const PreviewWrapper = styled.div`
  margin-top: 2rem;
  padding: 1rem 1.5rem;
  border-radius: 0.75rem;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ fontColor }) => fontColor};
  font-size: 1rem;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  opacity: ${({ isShown }) => (isShown ? 1 : 0.4)};
  transition: all 0.2s ease;
`;

const PreviewLabel = styled.p`
  font-size: 0.85rem;
  color: ${theme.text};
  margin-bottom: -2rem;
`;

export function Alert() {
  const [isShown, setIsShown] = useState(true);
  const [text, setText] = useState("To jest przykładowy alert");
  const [fontColor, setFontColor] = useState("#ffffff");
  const [bgColor, setBgColor] = useState("#ff4d4f");
  const [adminPass, setAdminPass] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (adminPass === import.meta.env.VITE_ADMIN_PASS) {
      try {
        const docRef = doc(db, "alerts", "alert");
        await setDoc(docRef, {
          isShown,
          text,
          fontColor,
          bgColor,
        });

        window.location.reload();
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    } else {
      alert("Incorrect admin password");
    }
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <CheckboxWrapper>
          <input
            type="checkbox"
            checked={isShown}
            onChange={() => setIsShown(!isShown)}
          />
          Pokaż alert
        </CheckboxWrapper>

        <Input
          type="text"
          placeholder="Treść alertu"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <CheckboxWrapper>
          Kolor czcionki
          <ColorInput
            type="color"
            value={fontColor}
            onChange={(e) => setFontColor(e.target.value)}
          />
        </CheckboxWrapper>

        <CheckboxWrapper>
          Kolor tła
          <ColorInput
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
          />
        </CheckboxWrapper>

        <Input
          type="password"
          placeholder="Hasło administratora"
          value={adminPass}
          onChange={(e) => setAdminPass(e.target.value)}
        />

        <Button type="submit">Zapisz alert</Button>

        <PreviewLabel>Podgląd na żywo</PreviewLabel>

        <PreviewWrapper
          bgColor={bgColor}
          fontColor={fontColor}
          isShown={isShown}
        >
          {text || "Tutaj pojawi się treść alertu"}
        </PreviewWrapper>
      </Form>
    </FormWrapper>
  );
}
