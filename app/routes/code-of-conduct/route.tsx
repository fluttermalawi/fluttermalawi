import {useRouteError, isRouteErrorResponse} from "react-router";
import {useState, useEffect} from "react";
import {getWebsite} from "~/lib/repository";
import ReactMarkdown from "react-markdown";
import type {Website} from "~/types";
import td from "turndown";

export default function CodeOfConduct() {
    const [website, setWebsite] = useState<Website[]>([]);
    const [loading, setLoading] = useState(true);

    const TurndownService = td;
    const turndownService = new TurndownService();

    useEffect(() => {
        getWebsite()
            .then(data => {
                setWebsite(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error loading website:', error);
                setLoading(false);
            });
    }, []);

    return (
        <main className="min-h-screen flex justify-center items-center">
            <section className="w-full max-w-7xl py-12 md:py-24 lg:py-32">
                <div className="space-y-12 px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center my-12">
                        <div className="space-y-2">
                            <div className="inline-block rounded-full bg-blue text-white px-3 py-1 text-sm">
                                Community Initiatives.
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-navy">
                                Community Code of Conduct
                            </h2>
                            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                We want everyone, regardless of their experience with Flutter or
                                any other technology, to feel empowered to keep growing as a
                                technology expert and as a member of this community.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        {loading ? (
                            <div>Loading content...</div>
                        ) : website.length ? (
                            <div>
                                <ReactMarkdown
                                    className="text-gray-500 dark:text-gray-400 mb-2 prose">
                                    {turndownService.turndown(website[0].codeOfConduct)}
                                </ReactMarkdown>
                            </div>
                        ) : (
                            <div className="text-center py-8">
                                <p className="text-lg mb-4">
                                    We currently updating our code of conduct.
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

    let errorMessage = "An unexpected error occurred";

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
