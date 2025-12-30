/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { theme } from "../../theme";
import { dictionary } from "../../dictionary";

const StyledHighlightsContainer = styled.div`
  width: 280px;
  min-height: 230px;
  margin: 1rem;
  border-radius: 1rem;
  border: solid 0.1rem ${theme.border_and_lines};

  background-color: ${(props) =>
    props.primary
      ? theme.section_one_background
      : theme.section_two_background};

  color: ${(props) =>
    props.primary
      ? theme.section_one_text_on_background
      : theme.section_two_text_on_background};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  text-align: center;
  padding: 1rem;

  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 1.5rem;
    line-height: 1.2;
    margin-bottom: 1rem;
    word-break: break-word;
  }

  p {
    background-color: ${(props) =>
      props.primary
        ? theme.section_one_btn_background
        : theme.section_two_btn_background};

    color: ${(props) =>
      props.primary
        ? theme.section_two_text_on_background
        : theme.section_one_text_on_background};

    border-radius: 1rem;
    font-size: 2rem;
    font-weight: bold;
    padding: 1rem 1.25rem;
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: all 0.5s ease-in-out;
  }

  @media (max-width: ${dictionary.width.mobile}) {
    width: 100%;
    max-width: 220px;
    min-height: 150px;

    h1 {
      font-size: 1.2rem;
    }

    p {
      font-size: 1.3rem;
      padding: 0.75rem 1rem;
    }
  }
`;

export function Highlights({ primary, header, number }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 100) {
        setHasAnimated(true);
        window.removeEventListener("scroll", checkScroll);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          if (window.scrollY > 100) {
            setHasAnimated(true);
          } else {
            window.addEventListener("scroll", checkScroll);
          }
        }
      },
      {
        threshold: 0.5,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(elementRef.current);
      }
      window.removeEventListener("scroll", checkScroll);
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let start = 0;
    const duration = 1000;
    const stepTime = Math.max(Math.floor(duration / number), 5);

    const counter = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= number) {
        clearInterval(counter);
      }
    }, stepTime);

    return () => clearInterval(counter);
  }, [hasAnimated, number]);

  return (
    <StyledHighlightsContainer primary={primary} ref={elementRef}>
      <h1>{header}</h1>
      <p>{count}</p>
    </StyledHighlightsContainer>
  );
}
