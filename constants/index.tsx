import { Contact, Home, ListVideo, Rss } from 'lucide-react'
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
			'https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2Fd7180d95-5960-48a9-bd2c-1e3dda377329-gnzzth.png&w=1200&q=75',
		author: {
			image:
				'https://blog-app-one-mocha.vercel.app/_next/image?url=https%3A%2F%2Fap-southeast-2.graphassets.com%2Fclxnuwqb601h9061c121l8maw%2Fclyn2mhduc8kg071cvhalutdp&w=384&q=75',
			name: 'Chris Impley',
		},
		oldPrice: 179,
		currentPrice: 79,
		level: 'Beginner',
	},
	{
		title: 'ReactJS',
		previewImage:
			'https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2Ffa42d36e-0e79-4d72-806e-2884d9550590-uiysmj.png&w=1200&q=75',
		author: {
			image:
				'https://blog-app-one-mocha.vercel.app/_next/image?url=https%3A%2F%2Fap-southeast-2.graphassets.com%2Fclxnuwqb601h9061c121l8maw%2Fclyn2mhduc8kg071cvhalutdp&w=384&q=75',
			name: 'Chris Impley',
		},
		oldPrice: 159,
		currentPrice: 59,
		level: 'Intermidate',
	},
	{
		title: 'VueJS',
		previewImage:
			'https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2Fcee8c824-e21a-4a79-94df-b2374e2bc745-uiysne.png&w=1200&q=75',
		author: {
			image:
				'https://blog-app-one-mocha.vercel.app/_next/image?url=https%3A%2F%2Fap-southeast-2.graphassets.com%2Fclxnuwqb601h9061c121l8maw%2Fclyn2mhduc8kg071cvhalutdp&w=384&q=75',
			name: 'Chris Impley',
		},
		oldPrice: 129,
		currentPrice: 29,
		level: 'Intermidate',
	},
	{
		title: 'Telegram BOT',
		previewImage:
			'https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F28bb5b4e-fcd5-4efe-9dfc-ecedc7be17ba-yxqcfn.png&w=1200&q=75',
		author: {
			image:
				'https://blog-app-one-mocha.vercel.app/_next/image?url=https%3A%2F%2Fap-southeast-2.graphassets.com%2Fclxnuwqb601h9061c121l8maw%2Fclyn2mhduc8kg071cvhalutdp&w=384&q=75',
			name: 'Chris Impley',
		},
		oldPrice: 209,
		currentPrice: 109,
		level: 'Intermidate',
	},
	{
		title: 'React Native',
		previewImage:
			'https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2Ffa42d36e-0e79-4d72-806e-2884d9550590-uiysmj.png&w=1200&q=75',
		author: {
			image:
				'https://blog-app-one-mocha.vercel.app/_next/image?url=https%3A%2F%2Fap-southeast-2.graphassets.com%2Fclxnuwqb601h9061c121l8maw%2Fclyn2mhduc8kg071cvhalutdp&w=384&q=75',
			name: 'Chris Impley',
		},
		oldPrice: 129,
		currentPrice: 29,
		level: 'Intermidate',
	},
	{
		title: 'Foundation',
		previewImage:
			'https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F31fea751-8eaf-4034-8af8-e8ae50b6f863-sfstg7.png&w=1200&q=75',
		author: {
			image:
				'https://blog-app-one-mocha.vercel.app/_next/image?url=https%3A%2F%2Fap-southeast-2.graphassets.com%2Fclxnuwqb601h9061c121l8maw%2Fclyn2mhduc8kg071cvhalutdp&w=384&q=75',
			name: 'Chris Impley',
		},
		oldPrice: 209,
		currentPrice: 109,
		level: 'Intermidate',
	},
]

export const categories = [
	{
		icon: 'categories/digital-marketing.svg',
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
		image: 'https://www.bancegt.com/wp-content/uploads/2019/01/person2.jpg',
		job: 'Web Developer',
	},
	{
		name: 'Thomas Winter',
		image:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw0qAmnMWbC15sQsUvTctmq716NzKTHRa7a5nDysMFR6HXfn2WwKDPm64vguBTjXHtweU&usqp=CAU',
		job: 'Photographer',
	},
	{
		name: 'Emma Watson',
		image: 'https://www.bancegt.com/wp-content/uploads/2019/01/person3.jpg',
		job: 'Digital Marketer',
	},
	{
		name: 'John Doe',
		image: 'https://solensys.com/wp-content/uploads/2019/01/person5.jpg',
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
