import { useState } from "react";
import { dictionary } from "../../dictionary";

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
    <>
      <h2>{dictionary.info_page.info_page_one_head}</h2>
      <p>{dictionary.info_page.info_page_steps.a}</p>
      <p>{dictionary.info_page.info_page_steps.b}</p>
      <p>{dictionary.info_page.info_page_steps.c}</p>
      <p>{dictionary.info_page.info_page_steps.d}</p>
      <p>{dictionary.info_page.info_page_steps.e}</p>

      <div
        style={
          {
            // maxWidth: "600px",
          }
        }
      >
        <h2 style={{ borderBottom: "2px solid #ddd", paddingBottom: "10px" }}>
          {dictionary.info_page.info_page_two_head}
        </h2>

        {faqEntries.map((entry, index) => (
          <div
            key={index}
            style={{
              borderBottom: "1px solid #ccc",
              padding: "10px 0",
              transition: "all 0.3s ease-in-out",
            }}
          >
            <h3
              onClick={() => handleToggle(index)}
              style={{
                cursor: "pointer",
                // color: expanded === index ? "#d9534f" : "#007bff",
                fontSize: "18px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {entry.question}
              <span style={{ fontSize: "16px" }}>
                {expanded === index ? "▲" : "▼"}
              </span>
            </h3>
            <div
              style={{
                maxHeight: expanded === index ? "200px" : "0",
                overflow: "hidden",
                transition: "max-height 0.3s ease-in-out",
                padding: expanded === index ? "10px 0" : "0",
                color: "#333",
                fontSize: "16px",
              }}
            >
              {entry.answer}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
