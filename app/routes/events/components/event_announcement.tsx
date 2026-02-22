import React, {useRef, useEffect, useState} from 'react';
import axios from 'axios';
import {
	Clock,
	AlertCircle,
	CheckCircle2,
	XCircle,
	Calendar,
	Share2,
	Download,
	MapPin,
	Ticket,
} from 'lucide-react';
import {
	motion,
	useMotionValue,
	useTransform,
	useSpring,
} from 'framer-motion';
import {formatDateTimeWithZone} from '~/lib/utils/dateUtils';
import type {EventProps} from '~/types';

interface StatusDisplay {
	label: string;
	color: string;
	icon: React.ElementType;
	textColor: string;
}

// Update the TimeLeft interface to include seconds
interface TimeLeft {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
	status: 'upcoming' | 'happening' | 'past';
}

// Update calculateTimeLeft to include seconds
const calculateTimeLeft = (
	startDate: Date,
	endDate: Date
): TimeLeft => {
	const now = new Date();
	const start = new Date(startDate);
	const end = new Date(endDate);

	// Reset time portions to compare just the dates for "Happening Now"
	const nowDate = new Date(
		now.getFullYear(),
		now.getMonth(),
		now.getDate()
	);
	const cStartDate = new Date(
		start.getFullYear(),
		start.getMonth(),
		start.getDate()
	);
	const cEndDate = new Date(
		end.getFullYear(),
		end.getMonth(),
		end.getDate()
	);

	// Check if current date matches the event date
	const isToday = nowDate.getTime() === cStartDate.getTime();

	if (now.getTime() < start.getTime()) {
		// Upcoming event
		const difference = start.getTime() - now.getTime();
		const days = Math.floor(difference / (1000 * 60 * 60 * 24));
		const hours = Math.floor(
			(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		);
		const minutes = Math.floor(
			(difference % (1000 * 60 * 60)) / (1000 * 60)
		);
		const seconds = Math.floor((difference % (1000 * 60)) / 1000);
		return {days, hours, minutes, seconds, status: 'upcoming'};
	} else if (isToday && now.getTime() <= end.getTime()) {
		// Happening today and hasn't ended yet
		return {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
			status: 'happening',
		};
	} else {
		// Past event
		return {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
			status: 'past',
		};
	}
};

const BackgroundSVG = () => (
	<svg
		className="w-full h-full relative z-0"
		aria-hidden="true"
		role="img"
		viewBox="0 0 756 584"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>Background Gradient Circles</title>
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
);

const EventAnnouncementCard: React.FC<Partial<EventProps>> = ({
	id,
	collectionId,
	topics = [],
	name,
	startDate,
	endDate,
	location,
	directions,
	animationsEnabled = true,
	backgroundImage,
	isCancelled = false,
	isPostponed = false,
	newStartDate,
	newEndDate,
	address,
	description,
	organiser = [],
	baseUrl,
}) => {
	const cardRef = useRef<HTMLDivElement>(null);
	const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
		calculateTimeLeft(
			isPostponed && newStartDate ? newStartDate : startDate,
			isPostponed && newEndDate ? newEndDate : endDate
		)
	);

	
	const {date, timeRange, timeZone} = formatDateTimeWithZone(
		startDate,
		endDate
	);
// Costumized the image url
const [imageUrl, setImageUrl] = useState<string>('');

useEffect(() => {
  const originalUrl = `${baseUrl}/api/files/${collectionId}/${id}/${backgroundImage}`;
  async function fetchImage(url: string) {
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'blob',
    });
    const objectUrl = URL.createObjectURL(response.data);
    setImageUrl(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }
  fetchImage(originalUrl).catch(console.error);
}, [backgroundImage, baseUrl, collectionId, id]);


	const newDateTimeInfo =
		isPostponed && newStartDate && newEndDate
			? formatDateTimeWithZone(newStartDate, newEndDate)
			: null;

	const getStatusDisplay = (): StatusDisplay => {
		if (isCancelled) {
			return {
				label: 'Cancelled',
				color: 'bg-red-500',
				icon: XCircle,
				textColor: 'text-red-500',
			};
		}

		if (isPostponed) {
			return {
				label: 'Postponed',
				color: 'bg-yellow-500',
				icon: Calendar,
				textColor: 'text-yellow-500',
			};
		}

		switch (timeLeft.status) {
			case 'upcoming':
				return {
					label: 'Upcoming',
					color: 'bg-blue-500',
					icon: Clock,
					textColor: 'text-blue-500',
				};
			case 'happening':
				return {
					label: 'Happening Now',
					color: 'bg-green-500',
					icon: CheckCircle2,
					textColor: 'text-green-500',
				};
			case 'past':
				return {
					label: 'Past Event',
					color: 'bg-gray-500',
					icon: AlertCircle,
					textColor: 'text-gray-500',
				};
		}
	};

	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const rotateX = useTransform(y, [-0.5, 0.5], ['3deg', '-3deg']);
	const rotateY = useTransform(x, [-0.5, 0.5], ['-3deg', '3deg']);
	const springConfig = {damping: 30, stiffness: 250};
	const springRotateX = useSpring(rotateX, springConfig);
	const springRotateY = useSpring(rotateY, springConfig);

	function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
		if (!animationsEnabled) return;
		const rect = event.currentTarget.getBoundingClientRect();
		const mouseX = (event.clientX - rect.left) / rect.width - 0.5;
		const mouseY = (event.clientY - rect.top) / rect.height - 0.5;
		x.set(mouseX);
		y.set(mouseY);
	}

	function handleMouseLeave() {
		if (!animationsEnabled) return;
		x.set(0);
		y.set(0);
	}

	const handleShare = async () => {
		if (!cardRef.current) return;
		try {
			// TODO.log('Sharing:', name);
			// Implement your share logic here
		} catch (error) {
			// TODO.error('Error sharing:', error);
		}
	};

	const handleDownload = async () => {
		if (!cardRef.current) return;
		try {
			// TODO.log('Downloading:', name);
			// Implement your download logic here
		} catch (error) {
			// TODO.error('Error downloading:', error);
		}
	};

	const handleGetDirections = () => {
		if (address) {
			const encodedAddress = encodeURIComponent(address);
			window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
		}
	};

	const handleGetTickets = () => {
		window.open('https://tickets.fluttermalawi.com/', '_blank');
	};

	const StatusBadge = () => {
		const status = getStatusDisplay();
		const Icon = status.icon;

		return (
			<div
				className={ `z-30 flex flex-row items-center text-nowrap gap-2 ${ status.color } bg-opacity-50 text-white px-4 py-2 rounded-full` }
			>
				<Icon className="w-4 h-4"/>
				<span className="font-semibold text-sm">{ status.label }</span>
			</div>
		);
	};

	const PostponementBanner = () => {
		if (!isPostponed || !newStartDate || !newDateTimeInfo)
			return null;

		return (
			<div className="bg-yellow-500/20 backdrop-blur-sm rounded-lg p-4 mb-6">
				<div className="flex items-start gap-3">
					<Calendar className="w-5 h-5 text-yellow-500 mt-1"/>
					<div>
						<p className="text-white font-semibold">
							Event Postponed
						</p>
						{ description && (
							<>
								<div
									className="text-white/80 text-sm mt-1 "
									dangerouslySetInnerHTML={ {__html: description} }
								></div>
							</>
						) }
						<div className="mt-2">
							<p className="text-white text-sm">
								New Date: { newDateTimeInfo.date }
							</p>
							<p className="text-white text-sm">
								New Time: { newDateTimeInfo.timeRange }
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	};

	useEffect(() => {
		// Only run timer if the event is upcoming
		const currentTimeLeft = calculateTimeLeft(
			isPostponed && newStartDate ? newStartDate : startDate,
			isPostponed && newEndDate ? newEndDate : endDate
		);

		if (
			currentTimeLeft.status === 'upcoming' &&
			!isCancelled &&
			!isPostponed
		) {
			const timer = setInterval(() => {
				setTimeLeft(
					calculateTimeLeft(
						isPostponed && newStartDate ? newStartDate : startDate,
						isPostponed && newEndDate ? newEndDate : endDate
					)
				);
			}, 60000); // Update every minute

			return () => clearInterval(timer);
		}
	}, [
		startDate,
		endDate,
		newStartDate,
		newEndDate,
		isCancelled,
		isPostponed,
	]);

	// Update the TimeLeft interface to include seconds
	interface TimeLeft {
		days: number;
		hours: number;
		minutes: number;
		seconds: number;
		status: 'upcoming' | 'happening' | 'past';
	}

	const CountdownTimer = () => {
		const days = timeLeft.days || 0;
		const hours = timeLeft.hours || 0;
		const minutes = timeLeft.minutes || 0;
		const seconds = timeLeft.seconds || 0;

		// Move hooks before any conditional returns
		const [prevValues, setPrevValues] = useState({
			days,
			hours,
			minutes,
			seconds,
		});

		useEffect(() => {
			setPrevValues({days, hours, minutes, seconds});
		}, [days, hours, minutes, seconds]);

		// Now we can have our conditional return
		if (timeLeft.status !== 'upcoming' || isCancelled || isPostponed)
			return null;

		const AnimatedNumber = ({
									value,
									prevValue,
									className,
								}: {
			value: number;
			prevValue: number;
			className?: string;
		}) => {
			const hasChanged = value !== prevValue;

			return hasChanged ? (
				<motion.span
					key={ value }
					className={ className }
					initial={ {y: -20, opacity: 0} }
					animate={ {y: 0, opacity: 1} }
					transition={ {
						y: {type: 'spring', stiffness: 300, damping: 30},
						opacity: {duration: 0.2},
					} }
				>
					{ value.toString().padStart(2, '0') }
				</motion.span>
			) : (
				<span className={ className }>
          { value.toString().padStart(2, '0') }
        </span>
			);
		};

		const TimeUnit = ({
							  value,
							  prevValue,
							  label,
						  }: {
			value: number;
			prevValue: number;
			label: string;
		}) => (
			<div className="flex flex-col items-center bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
				<AnimatedNumber
					value={ value }
					prevValue={ prevValue }
					className="text-2xl font-bold text-white"
				/>
				<span className="text-xs text-white/80 mt-1">{ label }</span>
			</div>
		);

		return (
			<div className="sm:flex gap-4 my-4 hidden">
				<TimeUnit
					value={ days }
					prevValue={ prevValues.days }
					label="Days"
				/>
				<TimeUnit
					value={ hours }
					prevValue={ prevValues.hours }
					label="Hours"
				/>
				<TimeUnit
					value={ minutes }
					prevValue={ prevValues.minutes }
					label="Minutes"
				/>
				<TimeUnit
					value={ seconds }
					prevValue={ prevValues.seconds }
					label="Seconds"
				/>
			</div>
		);
	};
	// Update the useEffect in the main component to trigger updates every second
	useEffect(() => {
		const currentTimeLeft = calculateTimeLeft(
			isPostponed && newStartDate ? newStartDate : startDate,
			isPostponed && newEndDate ? newEndDate : endDate
		);

		if (
			currentTimeLeft.status === 'upcoming' &&
			!isCancelled &&
			!isPostponed
		) {
			const timer = setInterval(() => {
				setTimeLeft(
					calculateTimeLeft(
						isPostponed && newStartDate ? newStartDate : startDate,
						isPostponed && newEndDate ? newEndDate : endDate
					)
				);
			}, 1000);

			return () => clearInterval(timer);
		}
	}, [
		startDate,
		endDate,
		newStartDate,
		newEndDate,
		isCancelled,
		isPostponed,
	]);

	const CardContent = () => (
		<div className="my-6 select-none">
			<div className="w-full max-w-4xl bg-sky rounded-3xl overflow-hidden shadow-lg">
				<div className="p-8 relative">
					<div
						className="absolute top-0 right-0 w-3/4 h-full bg-blue-800/50 rounded-l-full z-0 backdrop-blur-sm"/>
					<div className="absolute inset-0">
						<div
							className="absolute inset-0 z-[1] bg-gradient-to-r from-black/80 via-black/60 to-black/20 backdrop-blur-[0.9]"/>
						{ backgroundImage ? (
							<div
								className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat"
								style={ {
									backgroundImage: `url(${imageUrl})`, 
								} }
							/>
						) : (
							<BackgroundSVG/>
						) }
					</div>

					<div className="relative z-20">
						<div className="flex flex-row items-center justify-between my-3">
							<StatusBadge/>
							<div className="gap-2 hidden">
								<button
									onClick={ (e) => {
										e.stopPropagation();
										handleShare();
									} }
									className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
									aria-label="Share event"
								>
									<Share2 className="w-5 h-5 text-white"/>
								</button>
								<button
									onClick={ (e) => {
										e.stopPropagation();
										handleDownload();
									} }
									className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
									aria-label="Download event card"
								>
									<Download className="w-5 h-5 text-white"/>
								</button>
							</div>
						</div>

						<h1
							className={ `text-white text-4xl font-bold leading-tight mb-4 flex w-3/4 ${
								isCancelled ? 'line-through opacity-70' : ''
							}` }
						>
							{ name }
						</h1>

						<PostponementBanner/>

						{ !isPostponed && <CountdownTimer/> }

						<div className="text-white mb-2 items-baseline">
              <span className="font-semibold text-xs">
                { isPostponed ? 'ORIGINAL DATE:' : 'DATE:' }
              </span>{ ' ' }
							{ date }
						</div>
						<div className="text-white mb-4 items-baseline">
              <span className="font-semibold text-xs">
                { isPostponed ? 'ORIGINAL TIME:' : 'TIME:' }
              </span>{ ' ' }
							{ timeRange } ({ timeZone })
						</div>
						{ address ? (
							<div className="flex flex-row gap-2 items-baseline">
              <span className="font-semibold text-white mb-4 text-xs">
                ADDRESS:
              </span>
								<div
									className="inline-block text-white font-semibold mb-6">
									{ address }
								</div>
							</div>
						) : (<></>
						) }
						<div className="flex flex-row gap-2 items-baseline">
              <span className="font-semibold text-white mb-4 text-xs">
                LOCATION:
              </span>
							<div
								className="inline-block bg-white text-blue-900 rounded-full px-4 py-1 text-sm font-semibold mb-6">
								{ location }
							</div>
						</div>

						<div className="flex flex-wrap gap-4 mt-6 mb-8">
							<button
								onClick={handleGetTickets}
								className="flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
							>
								<Ticket className="w-5 h-5" />
								Get Tickets
							</button>
							{address && (
								<button
									onClick={handleGetDirections}
									className="flex items-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
								>
									<MapPin className="w-5 h-5" />
									Get Directions
								</button>
							)}
						</div>

						<div className="flex flex-wrap gap-2 mt-3">
							{ organiser?.map((user) => (
								<div
									key={ user.id }
									className="bg-opacity-90 bg-white-70 text-white px-4 py-2 border-2 border-white rounded-full text-sm bg-gray-800 font-semibold text-nowrap"
								>
									{ user.name }
								</div>
							)) }
						</div>

						<div className="flex flex-wrap gap-2 mt-3">
							{ topics?.map((topic) => (
								<div
									key={ topic }
									className="bg-opacity-90 bg-white-70 text-white px-4 py-2 border-2 border-white rounded-full text-sm bg-gray-800 font-semibold text-nowrap"
								>
									{ topic }
								</div>
							)) }
						</div>
					</div>
				</div>
			</div>
		</div>
	);

	if (!animationsEnabled) {
		return <CardContent/>;
	}

	return (
		<motion.div
			style={ {perspective: 1000, transformStyle: 'preserve-3d'} }
			initial={ {opacity: 0, y: 50, scale: 0.95} }
			animate={ {opacity: 1, y: 0, scale: 1} }
			transition={ {type: 'spring', duration: 0.8, bounce: 0.3} }
		>
			<motion.div
				style={ {
					rotateX: springRotateX,
					rotateY: springRotateY,
				} }
				onMouseMove={ handleMouseMove }
				onMouseLeave={ handleMouseLeave }
				whileHover={ {scale: 1.02} }
				whileTap={ {scale: 0.98} }
			>
				<CardContent/>
			</motion.div>
		</motion.div>
	);
};

export default EventAnnouncementCard;
