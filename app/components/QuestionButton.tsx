'use client';

import { useEffect, useState } from 'react';

export default function QuestionButton() {
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Simulating an async operation to fetch the email
    const fetchEmail = async () => {
      // In a real app, you might fetch this from an API or config file
      setEmail('fluttermalawi@gmail.com');
    };
    fetchEmail();
  }, []);

  return (
    <div className="flex justify-center ">
      <a
        href={`mailto:${email}?subject=FAQ Inquiry&body=Hello, I have a question.`}
        className="flex items-center justify-center px-8 py-4 bg-background font-bold hover:shadow-lg border-2 border-slate-600 text-base rounded-full text-primary bg-background hover:bg-primary hover:text-background transition-colors duration-300 animate-pulse"
      >
        Ask a Question
        <span className="flex items-center justify-center ml-3 w-8 h-8 rounded-full">
          <i className="iconoir-arrow-up-right ml-2" />
        </span>
      </a>
    </div>
  );
}
