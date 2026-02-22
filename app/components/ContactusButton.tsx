'use client';

import { useEffect, useState } from 'react';

export default function ContactusButton() {
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
    // <button onClick={()=>{

    // }}
    //     className="bg-white text-[#0F1729] px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
    //     Apply now
    // </button>
    <div className="flex justify-start ">
      <a
        href={`mailto:${email}?subject=CONTACT &body=Hello, I would like join.`}
        className="bg-white text-[#0F1729] px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors flex items-center justify-center bg-background hover:shadow-lg border-2 border-slate-600 text-base text-primary bg-background hover:bg-primary hover:text-background duration-300 animate-pulse"
      >
        Contact Us
        <span className="flex items-center justify-center ml-3 w-8 h-8 rounded-full">
          <i className="iconoir-arrow-up-right ml-2" />
        </span>
      </a>
    </div>
  );
}
