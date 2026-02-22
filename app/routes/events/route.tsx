import {defer} from '@remix-run/node';
import {
	Await,
	useLoaderData,
	useRouteError,
	isRouteErrorResponse,
} from '@remix-run/react';
import {Suspense} from 'react';
import type {LoaderFunction} from '@remix-run/node';
import {getEvents} from '~/lib/repository';

import EventAnnouncementCard from './components/event_announcement';
import {motion} from 'framer-motion';
import * as process from 'node:process';
import SkeletonContainer from '~/routes/events/components/event_announcement_skeleton';
import type {EventProps} from '~/types';

// const delay = (ms: number) =>
//   new Promise((resolve) => setTimeout(resolve, ms));

export const loader: LoaderFunction = async () => {
	const baseUrl = process.env.POCKETBASE_URL;
	const eventPromise = getEvents();

	// await delay(5000);

	return defer({
		events: eventPromise,
		baseUrl: baseUrl,
	});
};

export default function Event() {
	const {events, baseUrl} = useLoaderData<typeof loader>();

	const containerVariants = {
		hidden: {opacity: 0},
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.5, // Delay between each card
				delayChildren: 0.1, // Initial delay before first card
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
						<Suspense
							fallback={
								<div>
									<div className=" max-w-4xl mx-auto p-4">
										<SkeletonContainer/>
									</div>
								</div>
							}
						>
							<Await
								resolve={ events }
								errorElement={ <div><SkeletonContainer/></div> }
							>
								{ (resolvedEvents: EventProps[]) =>
									resolvedEvents.length ? (
										<div>
											<div className=" max-w-4xl mx-auto p-4">
												{ resolvedEvents.map((event) => (
													<motion.div
														className="container"
														variants={ containerVariants }
														initial="hidden"
														animate="visible"
														key={ event.id }
													>
														<EventAnnouncementCard
															name={ event.name }
															id={ event.id }
															collectionId={ event.collectionId }
															topics={ event.topics }
															isCancelled={ event.isCancelled }
															startDate={ event.startDate }
															endDate={ event.endDate }
															isPostponed={ event.isPostponed }
															newStartDate={ event.newStartDate }
															newEndDate={ event.newEndDate }
															description={ event.description }
															location={ event.location }
															organisers={ event.organisers }
															animationsEnabled={ true }
															backgroundImage={ event.cover }
															baseUrl={ baseUrl }
															address={ event.address }
															// city={event.city}
														/>
													</motion.div>
												)) }
											</div>
										</div>
									) : (
										<div className="text-center py-8">
											<p className="text-lg mb-4">
												We currently don&apos;t have upcoming events.
											</p>
											<div className="flex justify-center"></div>
										</div>
									)
								}
							</Await>
						</Suspense>
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
			<p>Sorry, there was an error: { errorMessage }</p>
		</div>
	);
}
