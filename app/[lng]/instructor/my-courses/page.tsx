import React from 'react'
import Header from '../_components/header'
import { courses } from '@/constants'
import InstructorCourseCard from '@/components/cards/instructor-course.card'

function Page() {
	return (
		<>
			<Header title='My Courses' description='Heere are your Courses' />
			<div className='mt-4 grid grid-cols-3 gap-4'>
				{courses.map(course => (
					<InstructorCourseCard key={course.title} {...course} />
				))}
			</div>
		</>
	)
}

export default Page
