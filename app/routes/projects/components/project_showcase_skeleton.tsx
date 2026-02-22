import React from 'react';
import type {Variants} from 'framer-motion';
import {motion} from 'framer-motion';

const containerVariants: Variants = {
	initial: {opacity: 0},
	animate: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1
		}
	}
};

const itemVariants: Variants = {
	initial: {
		opacity: 0,
		y: 20
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.4
		}
	}
};

const ProjectCardSkeleton = () => {
	return (
		<motion.div
			variants={ itemVariants }
			className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
		>
			{/* Image skeleton */ }
			<div className="w-full h-40 bg-gray-200 animate-pulse"/>

			<div className="p-6 space-y-4">
				{/* Title skeleton */ }
				<div className="h-7 bg-gray-200 rounded-md w-3/4 animate-pulse"/>

				{/* Description skeleton */ }
				<div className="space-y-2">
					<div className="h-4 bg-gray-100 rounded w-full animate-pulse"/>
					<div className="h-4 bg-gray-100 rounded w-5/6 animate-pulse"/>
				</div>

				{/* Technologies skeleton */ }
				<div className="flex flex-wrap gap-2">
					<div className="h-6 w-16 bg-gray-100 rounded-full animate-pulse"/>
					<div className="h-6 w-20 bg-gray-100 rounded-full animate-pulse"/>
					<div className="h-6 w-14 bg-gray-100 rounded-full animate-pulse"/>
				</div>
			</div>
		</motion.div>
	);
};

const ProjectShowcaseSkeleton = () => {
	return (
		<>
			<motion.div
				variants={ containerVariants }
				initial="initial"
				animate="animate"
				className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
			>
				{ Array.from({length: 8}).map((_, index) => (
					<ProjectCardSkeleton key={ index }/>
				)) }
			</motion.div>
		</>
	);
};

export default ProjectShowcaseSkeleton;
