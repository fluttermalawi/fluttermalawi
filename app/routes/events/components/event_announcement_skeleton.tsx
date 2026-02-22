import { motion, Variants } from "framer-motion";



const containerVariants: Variants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const EventCardSkeleton = () => {
    return (
        <motion.div
            className="my-6 animate-pulse"
            initial="initial"
            animate="animate"
        >
            <div className="w-full max-w-4xl bg-gray-100 border-1 border-gray-400 rounded-3xl overflow-hidden shadow-lg">
                <div className="p-8 relative">
                    {/* Background shapes with blur */}
                    <div className="absolute top-0 right-0 w-3/4 h-full bg-blue-800/30 rounded-l-full z-0 backdrop-blur-sm" />

                    {/* Content */}
                    <div className="relative z-20">
                        <div className="flex flex-row items-center justify-between">
                            {/* Topics skeleton */}
                            <div className="flex flex-row mt-6 gap-2 items-center justify-start">
                                <div className="inline-block bg-gray-200 rounded-full w-24 h-8 mb-4" />
                                <div className="inline-block bg-gray-200 rounded-full w-20 h-8 mb-4" />
                            </div>

                            {/* Action buttons skeleton */}
                            <div className="absolute top-2 right-2 flex gap-2">
                                <div className="p-2 rounded-full bg-gray-200 w-9 h-9" />
                                <div className="p-2 rounded-full bg-gray-200 w-9 h-9" />
                            </div>
                        </div>

                        {/* Title skeleton */}
                        <div className="bg-gray/20 rounded-lg w-3/4 h-12 mb-4" />

                        {/* Date and Time skeletons */}
                        <div className="flex flex-col gap-2 mb-4">
                            <div className="flex items-center gap-2">
                                <div className="bg-gray-200 rounded w-12 h-4" />
                                <div className="bg-gray-200 rounded w-32 h-4" />
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="bg-gray-200 rounded w-12 h-4" />
                                <div className="bg-gray-200 rounded w-48 h-4" />
                            </div>
                        </div>

                        {/* Location skeleton */}
                        <div className="flex flex-row gap-2 items-center">
                            <div className="bg-gray-200 rounded w-16 h-4 mb-4" />
                            <div className="bg-gray-200 rounded-full w-32 h-8 mb-6" />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const SkeletonContainer = () => {
    return (
        <motion.div
            variants={containerVariants}
            initial="initial"
            animate="animate"
        >
            <EventCardSkeleton />
            <EventCardSkeleton />
            <EventCardSkeleton />
        </motion.div>
    );
};

export default SkeletonContainer;