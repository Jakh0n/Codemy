import React from 'react'
import Header from '../_components/header'
import StatisticsCard from '@/components/cards/statistics.csrd'
import { MonitorPlay } from 'lucide-react'
import { PiStudent } from 'react-icons/pi'
import { GrMoney } from 'react-icons/gr'
import { courses } from '@/constants'
import InstructorCourseCard from '@/components/cards/instructor-course.card'

function Page() {
	return (
		<>
			<Header title='Dashboard' description='Welcome to dashboard' />
			<div className='grid grid-cols-3 mt-4 gap-4'>
				<StatisticsCard label='Total Courses ' value='4' Icon={MonitorPlay} />
				<StatisticsCard
					label='Total Students '
					value='11.000'
					Icon={PiStudent}
				/>
				<StatisticsCard label='Total sale ' value='$190.00' Icon={GrMoney} />
			</div>
			<Header
				title='Lates Courses'
				description='Here are your latest Courses'
			/>
			<div className='mt-4 grid grid-cols-4 gap-4 '>
				{courses
					.map(course => (
						<InstructorCourseCard key={course.title} {...course} />
					))
					.slice(0, 4)}
			</div>
		</>
	)
}

export default Page
