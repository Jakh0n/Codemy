import TopBar from '@/components/shared/top-bar'
import React from 'react'
import AllCourses from './_components/all-courses'

function Courses() {
	return (
		<div>
			<TopBar label='allCourses' description='allCourseDescription' />
			<AllCourses />
		</div>
	)
}

export default Courses
