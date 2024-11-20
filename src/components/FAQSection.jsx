import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

function FAQSection() {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const faqs = [
    { id: 1, question: 'What are the key features of your premium properties?', answer: 'Our premium properties feature state-of-the-art amenities, sustainable design, and prime locations.' },
    { id: 2, question: 'How does the consultation process work in design?', answer: 'We offer personalized consultations to understand your needs and preferences, followed by detailed proposals.' },
    { id: 3, question: 'What are your typical project timelines?', answer: 'Project timelines vary based on scope, but typically range from 6-12 months for complete development.' },
  ];

  return (
    <section className="bg-gray-900 py-20">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold text-white mb-12">FREQUENTLY ASKED QUESTIONS</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq) => (
          <div key={faq.id} className="bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden">
            <button
              className="w-full flex justify-between items-center px-6 py-4 text-lg font-semibold bg-gray-200"
              onClick={() => setActiveQuestion(activeQuestion === faq.id ? null : faq.id)}
            >
              {faq.question}
              <ChevronDown
                className={`w-5 h-5 transform ${activeQuestion === faq.id ? 'rotate-180' : ''}`}
              />
            </button>
            <AnimatePresence>
              {activeQuestion === faq.id && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  className="bg-gray-100 px-6 py-4"
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
}

export default FAQSection;
