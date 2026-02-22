export type Sponsor = {
	id: string;
	collectionId: string;
	collectionName: string;
	created: string;
	updated: string;
	logo: string;
	name: string;
	website: string;
};

export type Initiative = {
	id: number;
	title: string;
	img: string;
	alt: string;
	description: string;
};

export type Website = {
	codeOfConduct: string;
	termsOfService: string;
	cookiePolicy: string;
};

export type FAQItem = {
	id: string;
	question: string;
	answer: string;
};

export type ProjectType =
	| "Prototype"
	| "Tutorial"
	| "Production"
	| "Clone";

export type ProjectTechnology =
// Mobile
	| "Android"
	| "iOS"
	| "Flutter"
	| "React Native"
	| "Kotlin"
	| "Swift"

	// Web
	| "Web"
	| "React"
	| "Angular"
	| "Vue"
	| "Svelte"
	| "Next.js"
	| "TypeScript"

	// Backend
	| "Node.js"
	| "Django"
	| "Ruby on Rails"
	| "Spring"
	| "ASP.NET Core"
	| "GraphQL"

	// Database
	| "SQL"
	| "MongoDB"
	| "PostgreSQL"
	| "Redis"

	// Cloud
	| "Cloud"
	| "AWS"
	| "Azure"
	| "Google Cloud Platform"
	| "Kubernetes"
	| "Docker"

	// AI/ML
	| "AI"
	| "Machine Learning"
	| "TensorFlow"
	| "PyTorch"
	| "TensorFlow.js"
	| "Scikit-learn"
	| "Natural Language Processing"

	// Google Technologies
	| "Firebase"
	| "Gemini"
	| "Gemma"

	// Emerging Technologies
	| "Blockchain"
	| "Augmented Reality"
	| "Virtual Reality"
	| "Internet of Things"

	// DevOps
	| "CI/CD"
	| "Jenkins"
	| "GitHub Actions"

	// Operating Systems
	| "Linux"
	| "Windows"
	| "macOS"

	// Programming Languages
	| "Python"
	| "JavaScript"
	| "Java"
	| "C#"
	| "C++"
	| "Go"
	| "Rust"

	// Other
	| "Microservices"
	| "Serverless Computing"
	| "Edge Computing"
	| "Quantum Computing"
	| "Cybersecurity";

export type Difficulty =
	| "Beginner"
	| "Intermediate"
	| "Advanced";

export type AppType =
	| "Free"
	| "Open Source"
	| "Paid"
	| "Freemium"
	| "Premium";

// Optional: Helper object for grouping technologies by category
export const TechnologyCategories = {
	Mobile: [
		"Android",
		"iOS",
		"Flutter",
		"React Native",
		"Kotlin",
		"Swift",
	] as const,

	Web: [
		"Web",
		"React",
		"Angular",
		"Vue",
		"Svelte",
		"Next.js",
		"TypeScript",
	] as const,

	Backend: [
		"Node.js",
		"Django",
		"Ruby on Rails",
		"Spring",
		"ASP.NET Core",
		"GraphQL",
	] as const,

	Database: [
		"SQL",
		"MongoDB",
		"PostgreSQL",
		"Redis",
	] as const,

	Cloud: [
		"Cloud",
		"AWS",
		"Azure",
		"Google Cloud Platform",
		"Kubernetes",
		"Docker",
	] as const,

	AI_ML: [
		"AI",
		"Machine Learning",
		"TensorFlow",
		"PyTorch",
		"TensorFlow.js",
		"Scikit-learn",
		"Natural Language Processing",
	] as const,

	GoogleTech: [
		"Firebase",
		"Gemini",
		"Gemma",
	] as const,

	EmergingTech: [
		"Blockchain",
		"Augmented Reality",
		"Virtual Reality",
		"Internet of Things",
	] as const,

	DevOps: [
		"CI/CD",
		"Jenkins",
		"GitHub Actions",
	] as const,

	OS: [
		"Linux",
		"Windows",
		"macOS",
	] as const,

	ProgrammingLanguages: [
		"Python",
		"JavaScript",
		"Java",
		"C#",
		"C++",
		"Go",
		"Rust",
	] as const,

	Other: [
		"Microservices",
		"Serverless Computing",
		"Edge Computing",
		"Quantum Computing",
		"Cybersecurity",
	] as const,
} as const;

export type Project = {
	id: string;
	collectionId: string;
	collectionName: string;
	created: string;
	updated: string;
	image: string;
	name: string;
	date: string;
	link: string;
	year: number;
	projectType: ProjectType;
	city: string;
	shortDescription: string;
	technology: ProjectTechnology[];
	difficulty: Difficulty;
	appType: AppType;
	published: boolean;
};

export type ProjectDTO = {
	image: string;
	name: string;
	date: string;
	year: number;
	projectType: ProjectType;
	city: string;
	shortDescription: string;
	technology: ProjectTechnology[];
	difficulty: Difficulty;
	appType: AppType;
};

export type EventType =
// Main Event Types
	| "Conference"
	| "Speaker Session"
	| "Tech Talk"
	| "Info Session"
	| "Watch Party"
	| "Technical Session"

	// Workshops & Learning
	| "Workshop"
	| "Code Lab"
	| "Study Jam"
	| "Training Session"
	| "Hands-on Lab"
	| "Bootcamp"

	// Interactive Sessions
	| "Hackathon"
	| "Bug Bash"
	| "Code Review Session"
	| "Architecture Review"
	| "Design Sprint"
	| "Open Source Sprint"

	// Community & Networking
	| "Community Meetup"
	| "Networking Event"
	| "Office Hours"
	| "Mentorship Session"
	| "Career Fair"

	// Presentations & Discussions
	| "Panel Discussion"
	| "Roundtable"
	| "Lightning Talk"
	| "Fireside Chat"
	| "AMA Session"
	| "Tech Debate"
	| "Developer Q&A"

	// Showcases
	| "Demo Day"
	| "Project Showcase"
	| "Developer Showcase"
	| "Product Launch Event"

	// Specific Tech Events
	| "DevFest"
	| "Google I/O Extended"
	| "Flutter Festival"
	| "Android Dev Days"
	| "Cloud Summit"
	| "Tech Roadshow"

	// Career Development
	| "Portfolio Review"
	| "Mock Interview"
	| "Resume Review Workshop"
	| "Career Development Session";

export type EventTopic =
// Mobile Development
	| "Android"
	| "Android Architecture"
	| "Android Compose"
	| "Android Jetpack"
	| "Android Testing"
	| "Flutter"
	| "Flutter Architecture"
	| "Flutter Testing"
	| "Flutter Web"
	| "Flutter Desktop"
	| "State Management"
	| "Animation"
	| "UI/UX Design"
	| "Mobile Security"
	| "Cross-Platform Development"
	| "Kotlin"
	| "Dart"

	// Cloud & Backend
	| "Cloud"
	| "Firebase"
	| "Google Cloud Platform"
	| "Cloud Functions"
	| "Cloud Storage"
	| "App Engine"
	| "Cloud Run"
	| "Kubernetes"
	| "DevOps"
	| "Serverless"
	| "Database"
	| "API Development"

	// AI & ML
	| "AI"
	| "Machine Learning"
	| "TensorFlow"
	| "TensorFlow js"
	| "TensorFlow Lite"
	| "Gemini"
	| "Gemma"
	| "MLKit"
	| "Computer Vision"
	| "Natural Language Processing"
	| "AI Ethics"
	| "Generative AI"

	// Web Development
	| "Web"
	| "Progressive Web Apps"
	| "Web Performance"
	| "Web Security"
	| "Angular"
	| "Material Design"

	// Events & Community
	| "DevFest"
	| "Google I/O Extended"
	| "Community Building"
	| "Diversity in Tech"
	| "Women in Tech"
	| "Tech Leadership"
	| "Career Development"
	| "Open Source"
	| "Code Labs"
	| "Hackathon"

	// Business & Professional Development
	| "Business"
	| "Entrepreneurship"
	| "Startup Development"
	| "Product Management"
	| "Technical Writing"
	| "Developer Relations"
	| "Google Play"
	| "App Monetization"
	| "Project Management"

	// Emerging Technologies
	| "AR/VR"
	| "Internet of Things"
	| "Edge Computing"
	| "Blockchain"
	| "5G Technologies"
	| "Quantum Computing";

export enum LocationType {
	Hybrid = "Hybrid",
	Physical = "Physical",
	Online = "Online",
}

export type EventDTO = {
	id: string;
	collectionId: string;
	collectionName: string;
	created: string;
	updated: string;
	eventType: EventType;
	city: string;
	region: string;
	name: string;
	cover: string;
	isCancelled: boolean;
	isPostponed: boolean;
	organisers: string[];
	location: LocationType;
	address: string;
	directions: string;  
	topics: EventTopic[];
	description: string;
	startDate: Date;
	endDate: Date;
	newStartDate: Date;
	newEndDate: Date;
	animationsEnabled?: boolean;
};

export interface EventProps extends EventDTO {
	animationsEnabled?: boolean;
	backgroundImage?: string;
	baseUrl: string;
	organiser: Organiser[];
}

export interface Organiser {
	id: string;
	name: string;
	role: string;
	image: string;
}
