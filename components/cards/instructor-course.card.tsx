import { ICourse } from '@/types'
import Image from 'next/image'
import React from 'react'

function InstructorCourseCard(course: ICourse) {
	return (
		<div className='flex flex-col space-y-2 rounded-md bg-background p-2'>
			<div className='relative h-40 w-full'>
				<Image
					src={course.previewImage}
					alt={course.title}
					fill
					className='rounded-md object-cover'
				/>
			</div>
		</div>
	)
}

export default InstructorCourseCard
