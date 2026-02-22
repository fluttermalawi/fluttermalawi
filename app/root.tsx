import {
	isRouteErrorResponse,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useRouteError,
} from '@remix-run/react';

import './tailwind.css';
import type {LinksFunction, MetaFunction} from '@remix-run/node';
import Footer from './components/Footer';
import Header from './components/Header';
import React from 'react';
import NavBar from './components/NavBar';

export const links: LinksFunction = () => [
	{rel: 'preconnect', href: 'https://fonts.googleapis.com'},
	{
		rel: 'preconnect',
		href: 'https://fonts.gstatic.com',
		crossOrigin: 'anonymous',
	},
	{
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
	},
	{
		rel: 'stylesheet',
		href: 'https://cdn.jsdelivr.net/gh/iconoir-icons/iconoir@main/css/iconoir.css',
	},
];

export const meta: MetaFunction = () => {
	return [
		{
			description: 'A community that builds together grows together.',
			keywords: 'Flutter, Dart, Malawi',
			authors: [{name: 'Flutter Malawi'}],
			twitter: {
				card: 'summary_large_image',
				title: 'Flutter Malawi | Community',
				url: 'https://fluttermalawi.com/',
				description:
					'A community that builds together grows together.',
				images: [
					'https://pbs.twimg.com/profile_images/1793Q391444960358400/-Ie3AgTT_400x400.jpg',
				],
			},
		},
	];
};

export function Layout({children}: { children: React.ReactNode }) {
	return (
		<html lang="en">
		<head>
			<meta charSet="utf-8"/>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<Meta/>
			<Links/>
			<title>Flutter Malawi | Community</title>
		</head>
		<body className="flex flex-col min-h-screen mt-12">
		{ children }
		<ScrollRestoration/>
		<Scripts/>
		</body>
		</html>
	);
}

export default function App() {
	return (
		<>
			{/* <Header /> */ }
			<NavBar/>
			<main className="h-screen flex-1">
				<Outlet/>
			</main>
			<Footer/>
		</>
	);
}

export function ErrorBoundary() {
	const error = useRouteError();

	let errorMessage = 'An unexpected error occurred';

	if (isRouteErrorResponse(error)) {
		errorMessage = error.data;
	} else if (error instanceof Error) {
		errorMessage = error.message;
	}

	return (
		<div className="error-container">
			<h1>Error</h1>
			<p>Sorry, there was an error: { errorMessage }</p>
		</div>
	);
}
