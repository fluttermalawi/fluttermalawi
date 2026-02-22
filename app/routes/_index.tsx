import {
	Await,
	useLoaderData,
	useRouteError,
	isRouteErrorResponse,
	data,
} from 'react-router';
import {Suspense} from 'react';
import type {LoaderFunction} from 'react-router';
import EnquireButton from '~/components/EnquireButton';
import SponsorButton from '~/components/SponsorButton';
import {
	getFaq,
	getInitiatives,
	getSponsors,
} from '~/lib/repository';
import type {Sponsor, Initiative, FAQItem} from '~/types';
import QuestionButton from '~/components/QuestionButton';
import FAQ from '~/components/FAQ';
import CTASection from '~/components/CTASection';
import * as process from 'node:process';

export const loader: LoaderFunction = async () => {
	const baseUrl = process.env.POCKETBASE_URL;
	const sponsorsPromise = getSponsors();
	const initiativesPromise = getInitiatives();
	const faqPromise = getFaq();

	return data({
		sponsors: sponsorsPromise,
		initiatives: initiativesPromise,
		faqs: faqPromise,
		baseUrl: baseUrl,
	});
};

export default function Home() {
	const {sponsors, initiatives, faqs, baseUrl} =
		useLoaderData<typeof loader>();

	return (
		<div className="flex flex-col min-h-screen">
			<section className="relative overflow-hidden px-6 lg:px-8 bg-sky h-screen flex items-center justify-center">
				{ ' ' }
				{/* Added flex and centering utilities */ }
				{/* SVG Background */ }
				<div className="absolute inset-0">
					<svg
						className="w-full h-full"
						aria-hidden="true"
						role="img"
						viewBox="0 0 756 584"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect
							x="-355.5"
							y="-167.5"
							width="1110.62"
							height="1110.62"
							rx="555.31"
							fill="#04428E"
							stroke="url(#paint0_linear_223_413)"
						/>
						<rect
							x="-167.776"
							y="20.224"
							width="735.172"
							height="735.172"
							rx="367.586"
							fill="#032247"
							stroke="url(#paint1_radial_223_413)"
						/>
						<defs>
							<linearGradient
								id="paint0_linear_223_413"
								x1="199.81"
								y1="-168"
								x2="199.81"
								y2="943.62"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopColor="#0264CA"/>
								<stop offset="1" stopColor="#032247"/>
							</linearGradient>
							<radialGradient
								id="paint1_radial_223_413"
								cx="0"
								cy="0"
								r="1"
								gradientUnits="userSpaceOnUse"
								gradientTransform="translate(199.81 387.81) rotate(90) scale(368.086)"
							>
								<stop stopColor="#04428E"/>
								<stop offset="1" stopColor="#0264CA"/>
							</radialGradient>
						</defs>
					</svg>
				</div>
				{/* Content */ }
				<div className="relative z-10 mx-auto max-w-2xl">
					{ ' ' }
					{/* Removed padding classes */ }
					<div className="text-center">
						<h1 className="lg:leading-tighter text-8xl font-bold tracking-tighter sm:text-8xl md:text-[6rem] xl:text-[6.8rem] 2xl:text-[7.5rem] py-3 text-white">
							We All Grow Together
						</h1>
						<p className="mx-auto max-w-[700px] text-gray-300 md:text-xl my-6 text-sm">
							A community that builds together grows together.
						</p>
						<p className="mx-auto max-w-[700px] text-gray-100 md:text-2xl py-3 text-base">
							Our goal with this community is to create a friendly and
							engaging space for developers in Malawi who are
							interested in learning and developing using Flutter.
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<EnquireButton/>
						</div>
					</div>
				</div>
			</section>

			<section className="w-full py-12 my-16 md:py-24 lg:py-32 flex justify-center">
				<div className="space-y-12 px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<div className="inline-block rounded-full bg-blue text-white px-3 py-1 text-sm">
								Community Initiatives.
							</div>
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-navy">
								Our Commitment to Growth.
							</h2>
							<p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
								We want everyone, regardless of their experience with
								Flutter or any other technology, to feel empowered to
								keep growing as a technology expert and as a member of
								this community.
							</p>
						</div>
					</div>
					<div className="container flex items-center justify-center p-4">
						<Suspense fallback={ <div>Loading initiatives...</div> }>
							<Await
								resolve={ initiatives }
								errorElement={ <div>Error loading initiatives!</div> }
							>
								{ (resolvedInitiatives: Initiative[]) => (
									<div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8">
										{ resolvedInitiatives.map((item) => (
											<div
												key={ item.id }
												className="overflow-hidden rounded-xl hover:shadow-xl max-w-sm justify-items-center gap-2 p-5"
											>
												{ item.img && (
													<img
														src={ item.img }
														alt={ item.alt || item.title }
														width={ 300 }
														height={ 200 }
														className="w-full h-48 object-contain"
													/>
												) }
												<div className="px-6 py-12">
													<h4 className="text-lg md:text-xl font-bold mb-2">
														{ item.title }
													</h4>
													<p className="text-sm text-gray-500 dark:text-gray-400">
														{ item.description }
													</p>
												</div>
											</div>
										)) }
									</div>
								) }
							</Await>
						</Suspense>
					</div>
				</div>
			</section>
			{/*<section>*/ }
			{/*	<Suspense fallback={ <div>Loading CTA...</div> }>*/ }
			{/*		<Await*/ }
			{/*			resolve={ sponsors }*/ }
			{/*			errorElement={ <div>Error loading Call to Action!</div> }*/ }
			{/*		>*/ }
			{/*			{ (resolvedSponsors: Sponsor[]) =>*/ }
			{/*				resolvedSponsors.length ? <CTASection/> : <div></div>*/ }
			{/*			}*/ }
			{/*		</Await>*/ }
			{/*	</Suspense>*/ }
			{/*</section>*/ }
			<CTASection/>

			<section className="bg-gradient-to-r from-primary to-primary-foreground px-4 sm:px-6 lg:px-8 mb-24">
				<div className="max-w-7xl mx-auto mb-5">
					<h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] py-3 text-navy">
						Sponsors
					</h2>
					<Suspense fallback={ <div>Loading sponsors...</div> }>
						<Await
							resolve={ sponsors }
							errorElement={ <div>Error loading sponsors!</div> }
						>
							{ (resolvedSponsors: Sponsor[]) =>
								resolvedSponsors.length ? (
									<div>
										<div
											className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8 items-start mb-5 my-5">
											{ resolvedSponsors.map((sponsor) => (
												<div key={ sponsor.id }>
													<a
														href={ sponsor.website }
														target="_blank"
														className="rounded-xl hover:shadow-xl gap-2 p-5 flex sm:flex-col justify-start items-start sm:justify-center sm:items-center sm:text-center h-auto sm:h-52 w-full"
														rel="noreferrer"
													>
														{ sponsor.logo && (
															<img
																src={ `${ baseUrl }/api/files/${ sponsor.collectionId }/${ sponsor.id }/${ sponsor.logo }` }
																alt={ sponsor.name || sponsor.website }
																width={ 70 }
																height={ 70 }
																className="rounded-full bg-white object-contain flex-shrink-0"
															/>
														) }
														<div className="px-2 py-2 overflow-hidden w-full">
															<h4 className="text-lg md:text-xl font-bold mb-2 line-clamp-2 overflow-hidden">
																{ sponsor.name }
															</h4>
															{/*<p className="text-xs font-light text-gray-500 dark:text-gray-400 line-clamp-1">*/ }
															{/*	{ sponsor.website }*/ }
															{/*</p>*/}
														</div>
													</a>
												</div>
											)) }
										</div>
										<SponsorButton/>
									</div>
								) : (
									<div className="text-center py-8">
										<p className="text-lg mb-4">
											We currently don&apos;t have any sponsors.
										</p>
										<p className="text-md mb-6">
											Would you like to become our first sponsor?
										</p>
										<div className="flex justify-center">
											<SponsorButton/>
										</div>
									</div>
								)
							}
						</Await>
					</Suspense>
				</div>
			</section>

			<section className="bg-gradient-to-r from-primary to-primary-foreground px-4 sm:px-6 lg:px-8 mb-24">
				<div className="max-w-7xl mx-auto mb-5">
					<h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] py-3 text-navy">
						Frequently Asked Questions
					</h2>
					<Suspense fallback={ <div>Loading Questions...</div> }>
						<Await
							resolve={ faqs }
							errorElement={ <div>Error loading sponsors!</div> }
						>
							{ (resolvedFaqs: FAQItem[]) =>
								resolvedFaqs.length ? (
									<div>
										<FAQ faqs={ resolvedFaqs }/>
										<QuestionButton/>
									</div>
								) : (
									<div className="text-center py-8">
										<p className="text-lg mb-4">
											We currently don&apos;t have any answers.
										</p>
										<p className="text-md mb-6">
											Would you like to ask the first question?
										</p>
										<div className="flex justify-center">
											<QuestionButton/>
										</div>
									</div>
								)
							}
						</Await>
					</Suspense>
				</div>
			</section>
		</div>
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
