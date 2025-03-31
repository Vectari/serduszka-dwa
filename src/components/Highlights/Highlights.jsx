/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const StyledHighlightsContainer = styled.div`
  width: 300px;
  height: 250px;
  margin: 1rem;
  border-radius: 1rem;
  border: solid 0.1rem ${theme.border_and_lines};
  background-color: ${(props) =>
    props.primary
      ? `${theme.section_one_background}`
      : `${theme.section_two_background}`};
  color: ${(props) =>
    props.primary
      ? `${theme.section_one_text_on_background}`
      : `${theme.section_two_text_on_background}`};

  text-align: center;
  padding: 1rem;

  h1 {
    font-size: 1.5rem;
  }

  p {
    background-color: ${(props) =>
      props.primary
        ? `${theme.section_one_btn_background}`
        : `${theme.section_two_btn_background}`};
    color: ${(props) =>
      props.primary
        ? `${theme.section_two_text_on_background}`
        : `${theme.section_one_text_on_background}`};
    border-radius: 1rem;
    font-size: 2rem;
    font-weight: bold;
    margin-top: 2.5rem;
    padding: 1.5rem;
    transition: all 0.5s ease-in-out;
  }
`;

export function Highlights({ primary, header, number }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      console.log("Sprawdzam scroll:", window.scrollY);
      if (window.scrollY > 100) {
        setHasAnimated(true);
        window.removeEventListener("scroll", checkScroll);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          console.log("Element wszedł w widok");
          if (window.scrollY > 100) {
            console.log("Strona jest przewinięta, start animacji!");
            setHasAnimated(true);
          } else {
            console.log("Dodaję nasłuchiwacz scrolla");
            window.addEventListener("scroll", checkScroll);
          }
        }
      },
      { threshold: 0.5, rootMargin: "0px 0px -50px 0px" }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
      window.removeEventListener("scroll", checkScroll);
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (hasAnimated) {
      let start = 0;
      const duration = 1000; // 1 sekunda
      const stepTime = Math.max(Math.floor(duration / number), 5);

      const counter = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= number) {
          clearInterval(counter);
        }
      }, stepTime);
    }
  }, [hasAnimated, number]);

  return (
    <StyledHighlightsContainer primary={primary} ref={elementRef}>
      <div>
        <h1>{header}</h1>
        <p>{count}</p>
      </div>
    </StyledHighlightsContainer>
  );
}
