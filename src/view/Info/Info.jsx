import { useState } from "react";
import { theme } from "../../theme";
import { dictionary } from "../../dictionary";
import styled from "styled-components";

const StyledInfoWrapper = styled.div`
  text-align: center;

  h2 {
    border-bottom: 2px solid #ddd;
    padding-bottom: 10px;
  }

  p {
    color: ${theme.section_two_text_on_background};
    background-color: ${theme.section_two_background};
    border-radius: 1rem;
    padding: 0.5rem;

    span {
      font-weight: bolder;
      font-size: 1.1rem;
    }
  }
`;

const StyledFAQContainer = styled.div`
  margin-top: 2rem;
`;

const StyledFAQItem = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
  transition: all 0.3s ease-in-out;
`;

const StyledFAQQuestion = styled.h3`
  cursor: pointer;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledFAQAnswer = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, padding 0.3s ease-in-out;
  color: #333;
  font-size: 16px;
  padding: 0;

  &.expanded {
    max-height: 200px;
    padding: 10px 0;
  }
`;

export function Info() {
  const [expanded, setExpanded] = useState(null);

  const handleToggle = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const faqEntries = [
    {
      question: dictionary.info_page.info_page_faq.q1,
      answer: dictionary.info_page.info_page_faq.a1,
    },
    {
      question: dictionary.info_page.info_page_faq.q2,
      answer: dictionary.info_page.info_page_faq.a2,
    },
    {
      question: dictionary.info_page.info_page_faq.q3,
      answer: dictionary.info_page.info_page_faq.a3,
    },
    {
      question: dictionary.info_page.info_page_faq.q4,
      answer: dictionary.info_page.info_page_faq.a4,
    },
    {
      question: dictionary.info_page.info_page_faq.q5,
      answer: dictionary.info_page.info_page_faq.a5,
    },
  ];

  return (
    <StyledInfoWrapper>
      <h2>{dictionary.info_page.info_page_one_head}</h2>
      <p>
        <span>1. </span>
        {dictionary.info_page.info_page_steps.a}
      </p>
      <p>
        <span>2. </span>
        {dictionary.info_page.info_page_steps.b}
      </p>
      <p>
        <span>3. </span>
        {dictionary.info_page.info_page_steps.c}
      </p>
      <p>
        <span>4. </span>
        {dictionary.info_page.info_page_steps.d}
      </p>
      <p>
        <span>5. </span>
        {dictionary.info_page.info_page_steps.e}
      </p>

      <StyledFAQContainer>
        <h2>{dictionary.info_page.info_page_two_head}</h2>
        {faqEntries.map((entry, index) => (
          <StyledFAQItem key={index}>
            <StyledFAQQuestion onClick={() => handleToggle(index)}>
              {entry.question}
              <span>{expanded === index ? "▲" : "▼"}</span>
            </StyledFAQQuestion>
            <StyledFAQAnswer className={expanded === index ? "expanded" : ""}>
              {entry.answer}
            </StyledFAQAnswer>
          </StyledFAQItem>
        ))}
      </StyledFAQContainer>
    </StyledInfoWrapper>
  );
}
