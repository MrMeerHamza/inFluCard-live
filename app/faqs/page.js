"use client"

import { useState } from "react";
import "./faqs.css";

export default function FAQs() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const sections = [
        {
            title: "GETTING STARTED",
            faqs: [
                { question: "How does InfluCard work?", answer: "Explanation here..." },
                { question: "How did you come up with the concept of InfluCard?", answer: "Explanation here..." },
            ],
        },
        {
            title: "WHO CAN JOIN?",
            faqs: [
                { question: "How do I get an invite code?", answer: "Explanation here..." },
                { question: "How can I get the InfluCard?", answer: "Explanation here..." },
            ],
        },
        {
            title: "USING THE INFLUCARD",
            faqs: [
                { question: "Where can I use the InfluCard?", answer: "Explanation here..." },
                { question: "Do I need to pay any fees?", answer: "Explanation here..." },
            ],
        },
        {
            title: "INFLUCARD SCORE",
            faqs: [
                { question: "Where can I use the InfluCard?", answer: "Explanation here..." },
                { question: "Do I need to pay any fees?", answer: "Explanation here..." },
            ],
        },
    ];

    return (
        <div className="faqs">
            {/* <header className="header">
                <h1>FAQs</h1>
            </header> */}

                <h1>FAQs</h1>
            <div className="accordion-container">
                {sections.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="accordion">
                        <h2>{section.title}</h2>
                        {section.faqs.map((faq, faqIndex) => {
                            const combinedIndex = `${sectionIndex}-${faqIndex}`;
                            return (
                                <div key={combinedIndex} className="faq-item">
                                    <button
                                        className="faq-question"
                                        onClick={() => toggleAccordion(combinedIndex)}
                                    >
                                        {faq.question}
                                        <span>{openIndex === combinedIndex ? "-" : "+"}</span>
                                    </button>
                                    <div
                                        className={`faq-answer-wrapper ${openIndex === combinedIndex ? "open" : ""
                                            }`}
                                    >
                                        <p className="faq-answer">{faq.answer}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
}