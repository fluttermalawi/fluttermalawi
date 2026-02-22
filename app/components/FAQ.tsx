import { useState } from "react";
import type { FAQItem } from "~/types";

interface FAQDropdownProps {
    faq: FAQItem;
    isOpen: boolean;
    onToggle: () => void;
}

interface FAQProps {
    faqs: FAQItem[];
}


const FAQDropdown = ({ faq, isOpen, onToggle }: FAQDropdownProps) => {
    return (
        <div className="border-b border-gray-200">
            <button
                type="button"
                className="w-full py-6 flex items-center justify-between text-left hover:text-gray-400 transition-colors"
                onClick={onToggle}
            >
                <span className="text-xl font-medium text-navy">{faq.question}</span>
                <svg
                    className={`w-6 h-6 text-navy transform transition-transform ${isOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <title>Toggle Icon</title>
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>

            {isOpen && (
                <div className="pb-6 text-gray-900">
                    <p className="break-words whitespace-normal overflow-wrap-normal text-base">{faq.answer}</p>
                </div>
            )}
        </div>
    );
};

const FAQ = ({ faqs }: FAQProps) => {
    const [openIndex, setOpenIndex] = useState<string | null>(null);
    return (

        <div className="my-12">
            {faqs.map((faq) => (
                <FAQDropdown
                    key={faq.id}
                    faq={faq}
                    isOpen={openIndex === faq.id}
                    onToggle={() => setOpenIndex(openIndex === faq.id ? null : faq.id)}
                />
            ))}
        </div>

    );
};

export default FAQ;
