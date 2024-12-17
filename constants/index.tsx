import {
	Contact,
	FileCode,
	GaugeCircle,
	Home,
	ListVideo,
	MessageSquareMore,
	MonitorPlay,
	Rss,
	Settings2,
} from 'lucide-react'
import {
	DiCisco,
	DiCreativecommonsBadge,
	DiDjango,
	DiDocker,
	DiGhost,
	DiGithubFull,
	DiLess,
	DiMailchimp,
	DiMeteorfull,
	DiNetmagazine,
	DiNginx,
	DiStylus,
	DiYahoo,
} from 'react-icons/di'

export const navLinks = [
	{ route: '', name: 'navLink1', icon: Home },
	{ route: 'courses', name: 'navLink2', icon: ListVideo },
	{ route: 'blogs', name: 'navLink3', icon: Rss },
	{ route: 'contacts', name: 'navLink4', icon: Contact },
]

export const lngs = [
	{ route: 'en', label: 'English' },
	{ route: 'uz', label: "O'zbekcha" },
	{ route: 'ru', label: 'Русский' },
	{ route: 'tr', label: 'Türkçe' },
]

export const companies = [
	DiCisco,
	DiCreativecommonsBadge,
	DiGhost,
	DiGithubFull,
	DiMeteorfull,
	DiLess,
	DiMailchimp,
	DiNetmagazine,
	DiNginx,
	DiStylus,
	DiYahoo,
	DiDjango,
	DiDocker,
]

export const filterCourses = [
	{ label: 'cateogry1', name: 'all' },
	{ label: 'cateogry2', name: 'trending' },
	{ label: 'cateogry3', name: 'popular' },
	{ label: 'cateogry4', name: 'featured' },
]

export const filterLevels = [
	{ label: 'level1', name: 'all' },
	{ label: 'level2', name: 'beginner' },
	{ label: 'level3', name: 'intermediate' },
	{ label: 'level4', name: 'advanced' },
]

export const courses = [
	{
		title: 'JavaScript',
		previewImage:
			'https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2Ffa42d36e-0e79-4d72-806e-2884d9550590-uiysmj.png&w=1200&q=75',
		author: {
			image: 'https://www.svgrepo.com/show/1356/man.svg',
			name: 'Chris Impley',
		},
		oldPrice: 179,
		currentPrice: 79,
		level: 'Beginner',
	},
	{
		title: 'ReactJS',
		previewImage:
			'https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F28bb5b4e-fcd5-4efe-9dfc-ecedc7be17ba-yxqcfn.png&w=1200&q=75',
		author: {
			image: 'https://www.svgrepo.com/show/1356/man.svg',
			name: 'Chris Impley',
		},
		oldPrice: 159,
		currentPrice: 59,
		level: 'Intermidate',
	},
	{
		title: 'VueJS',
		previewImage:
			'https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2FmMbSyFqocdYGuy6elWw32ShZLOavzytcQulCmd8ogs7R0e4K&w=1200&q=75',
		author: {
			image: 'https://www.svgrepo.com/show/1356/man.svg',
			name: 'Chris Impley',
		},
		oldPrice: 129,
		currentPrice: 29,
		level: 'Intermidate',
	},
	{
		title: 'Telegram BOT',
		previewImage:
			'https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2FmMbSyFqocdYG9DSjR2mKaGFPMRBJzUvYxLTQqoHhtjX72Nmw&w=1200&q=75',
		author: {
			image: 'https://www.svgrepo.com/show/1356/man.svg',
			name: 'Chris Impley',
		},
		oldPrice: 209,
		currentPrice: 109,
		level: 'Intermidate',
	},
	{
		title: 'React Native',
		previewImage:
			'https://sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F27f17594-ae28-4fe1-86ce-964a5c89c78d-kilw7k.png&w=1920&q=75',
		author: {
			image:
				'https://blog.sammi.app/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FKmuGvX9oRjYkG3bzttvc&w=1920&q=75',
			name: 'Chris Impley',
		},
		oldPrice: 129,
		currentPrice: 29,
		level: 'Intermidate',
	},
	{
		title: 'Foundation',
		previewImage:
			'https://sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2Fbcdfb541-3300-430f-b8b2-ff0fb57df056-kilw6p.png&w=1920&q=75',
		author: {
			image:
				'https://blog.sammi.app/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FKmuGvX9oRjYkG3bzttvc&w=1920&q=75',
			name: 'Chris Impley',
		},
		oldPrice: 209,
		currentPrice: 109,
		level: 'Intermidate',
	},
]

export const categories = [
	{
		icon: '/categories/digital-marketing.svg',
		label: 'Digital Marketing',
	},
	{ icon: '/categories/web-development.svg', label: 'Web Development' },
	{ icon: '/categories/graphic-design.svg', label: 'Graphic Design' },
	{ icon: '/categories/photography.svg', label: 'Photography' },
	{ icon: '/categories/social-sciences.svg', label: 'Social Sciences' },
	{ icon: '/categories/art-humanities.svg', label: 'Art & Humanities' },
	{
		icon: '/categories/personal-development.svg',
		label: 'Personal Development',
	},
	{ icon: '/categories/it-software.svg', label: 'IT & Software' },
]

export const instructors = [
	{
		name: 'Chris Impley',
		image: 'https://www.bancegt.com/wp-content/uploads/2019/01/person3.jpg',
		job: 'Web Developer',
	},
	{
		name: 'Thomas Winter',
		image: 'https://www.bancegt.com/wp-content/uploads/2019/01/person2.jpg',
		job: 'Photographer',
	},
	{
		name: 'Emma Watson',
		image: 'https://www.bancegt.com/wp-content/uploads/2019/01/person5.jpg',
		job: 'Digital Marketer',
	},
	{
		name: 'John Doe',
		image: 'https://www.bancegt.com/wp-content/uploads/2019/01/person6.jpg',
		job: 'Designer',
	},
]

export const learningJourney = [
	{
		title: 'startTitle1',
		excerpt: 'startDescription1',
		image: '/journey/rating.png',
	},
	{
		title: 'startTitle2',
		excerpt: 'startDescription2',
		image: '/journey/science.png',
	},
	{
		title: 'startTitle3',
		excerpt: 'startDescription3',
		image: '/journey/online-learning.png',
	},
	{
		title: 'startTitle4',
		excerpt: 'startDescription4',
		image: '/journey/certificate.png',
	},
]

export const instructorNavLinks = [
	{
		label: 'Dashboard',
		route: '/instructor',
		icon: GaugeCircle,
	},
	{
		label: 'My Courses',
		route: '/instructor/my-courses',
		icon: MonitorPlay,
	},
	{
		label: 'Create Course',
		route: '/instructor/create-course',
		icon: FileCode,
	},
	{
		label: 'Reviews',
		route: '/instructor/reviews',
		icon: MessageSquareMore,
	},
	{
		label: 'Settings',
		route: '/instructor/settings',
		icon: Settings2,
	},
]

export const courseLevels = ['beginner', 'intermediate', 'advanced']
export const courseCategory = [
	'front-end',
	'back-end',
	'full-stack',
	'mobile',
	'desktop',
	'game',
]
export const courseLanguage = ['english', 'uzbek', 'russian', 'turkish']
