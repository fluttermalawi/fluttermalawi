import {useRouteError, isRouteErrorResponse} from 'react-router';
import {useState, useEffect} from 'react';
import {getEvents} from '~/lib/repository';
import EventAnnouncementCard from './components/event_announcement';
import {motion} from 'framer-motion';
import SkeletonContainer from '~/routes/events/components/event_announcement_skeleton';
import type {EventProps} from '~/types';

export default function Event() {
	const [events, setEvents] = useState<EventProps[]>([]);
	const [loading, setLoading] = useState(true);
	const baseUrl = import.meta.env.VITE_POCKETBASE_URL || process.env.POCKETBASE_URL;

	useEffect(() => {
		getEvents()
			.then(data => {
				setEvents(data);
				setLoading(false);
			})
			.catch(error => {
				console.error('Error loading events:', error);
				setLoading(false);
			});
	}, []);

	const containerVariants = {
		hidden: {opacity: 0},
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.5,
				delayChildren: 0.1,
			},
		},
	};

	return (
		<main className="min-h-screen flex justify-center items-center">
			<section className="w-full max-w-7xl py-12 md:py-24 lg:py-32">
				<div className="space-y-6 px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center my-6">
						<div className="space-y-2">
							<div className="inline-block rounded-full bg-blue text-white px-3 py-1 text-sm">
								Community Initiatives.
							</div>
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-navy">
								Community Meetups & Events
							</h2>
							<p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"></p>
						</div>
					</div>
					<div className="flex flex-col my-2">
						{loading ? (
							<div className=" max-w-4xl mx-auto p-4">
								<SkeletonContainer/>
							</div>
						) : events.length ? (
							<div className=" max-w-4xl mx-auto p-4">
								{events.map((event) => (
									<motion.div
										className="container"
										variants={containerVariants}
										initial="hidden"
										animate="visible"
										key={event.id}
									>
										<EventAnnouncementCard
											name={event.name}
											id={event.id}
											collectionId={event.collectionId}
											topics={event.topics}
											isCancelled={event.isCancelled}
											startDate={event.startDate}
											endDate={event.endDate}
											isPostponed={event.isPostponed}
											newStartDate={event.newStartDate}
											newEndDate={event.newEndDate}
											description={event.description}
											location={event.location}
											organisers={event.organisers}
											animationsEnabled={true}
											backgroundImage={event.cover}
											baseUrl={baseUrl}
											address={event.address}
										/>
									</motion.div>
								))}
							</div>
						) : (
							<div className="text-center py-8">
								<p className="text-lg mb-4">
									We currently don&apos;t have upcoming events.
								</p>
							</div>
						)}
					</div>
				</div>
			</section>
		</main>
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
			<p>Sorry, there was an error: {errorMessage}</p>
		</div>
	);
}
