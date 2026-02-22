'use client';

import {useEffect, useState} from 'react';

export default function EnquireButton() {
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
		<a
			href={ `mailto:${ email }?subject=Community Inquiry&body=Hello, I am interested in becoming a member.` }
			className="flex items-center max-w-xs justify-center px-8 py-4 bg-white  font-bold hover:shadow-lg text-base rounded-full text-blue  hover:text-white hover:border-white border-2 bg-background hover:bg-navy transition-colors duration-300"
		>
			Have a Question?
			<span className="flex items-center justify-center ml-3 w-8 h-8 rounded-full">
        <i className="iconoir-arrow-up-right ml-2"/>
      </span>
		</a>
	);
}