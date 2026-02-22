import {defer} from '@remix-run/node';
import {
	Await,
	useLoaderData,
	useRouteError,
	isRouteErrorResponse,
	Link,
} from '@remix-run/react';
import {Suspense} from 'react';
import type {LoaderFunction} from '@remix-run/node';
import {getProjects} from '~/lib/repository';
import type {Project} from '~/types';
import ProjectButton from '~/components/ProjectButton';
import * as process from 'node:process';
import ProjectShowcaseSkeleton from "~/routes/projects/components/project_showcase_skeleton";

export const loader: LoaderFunction = async () => {
	const baseUrl = process.env.POCKETBASE_URL;
	const projectsPromise = getProjects();

	return defer({
		projects: projectsPromise,
		baseUrl: baseUrl,
	});
};

export default function Projects() {
	const {projects, baseUrl} = useLoaderData<typeof loader>();

	return (
		<main className="min-h-screen flex justify-center items-center bg-gray-100">
			<section className="w-full max-w-6xl py-12 px-4 md:px-6 lg:px-8">
				<div className="flex flex-col items-center justify-center space-y-4 text-center my-6">
					<div className="space-y-2 mb-12">
						<div className="inline-block rounded-full bg-blue text-white px-3 py-1 text-sm">
							Community Initiatives.
						</div>
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-navy">
							Project Showcase
						</h2>
						<p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"></p>
					</div>
				</div>
				<Suspense fallback={ <div><ProjectShowcaseSkeleton/></div> }>
					<Await
						resolve={ projects }
						errorElement={ <div><ProjectShowcaseSkeleton/></div> }
					>
						{ (resolvedProjects: Project[]) =>
							resolvedProjects.length ? (
								<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
									{ resolvedProjects.map((project) => (
										<div
											key={ project.id }
											className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200"
										>
											<Link
												to={ project.link || '#' }
												target={ project.link ? '_blank' : '_self' }
												className="block"
												rel="noreferrer"
											>
												{/* Project Image */ }
												{ project.image && (
													<img
														src={ `${ baseUrl }/api/files/${ project.collectionId }/${ project.id }/${ project.image }` }
														alt={ project.name || 'Project Image' }
														className="w-full h-40 object-cover rounded-t-lg"
													/>
												) }
												<div className="p-6">
													{/* Project Title */ }
													<h2 className="text-xl font-semibold text-gray-800 mb-2">
														{ project.name }
													</h2>
													{/* Project Description */ }
													<p className="text-gray-600 mb-4">
														{ project.shortDescription ||
															'A description of the project.' }
													</p>
													{/* Project Technologies */ }
													<div className="flex flex-wrap gap-2">
														{ project.technology.map((tech) => (
															<span
																key={ tech }
																className="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm font-medium border border-gray-200"
															>
                                { tech }
                              </span>
														)) }
													</div>
												</div>
											</Link>
										</div>
									)) }
								</div>
							) : (
								<div className="text-center py-8">
									<p className="text-lg mb-4">
										We currently don&apos;t have any projects to
										showcase.
									</p>
									<p className="text-md mb-6">
										Would you like to be the first to showcase a
										project?
									</p>
									<ProjectButton/>
								</div>
							)
						}
					</Await>
				</Suspense>
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
		<div className="error-container text-center py-8">
			<h1 className="text-3xl font-bold text-red-600 mb-4">Error</h1>
			<p className="text-lg text-gray-700">
				Sorry, there was an error: { errorMessage }
			</p>
		</div>
	);
}
