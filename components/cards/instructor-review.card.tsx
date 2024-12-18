import React from 'react'
import { Button } from '../ui/button'
import { Flag } from 'lucide-react'
import { Avatar, AvatarFallback } from '../ui/avatar'

function InstructorReviewCard() {
	return (
		<div className='flex pb-4 border-b gap-4'>
			<div className='flex-1'>
				<div className='flex gap-3'>
					<Avatar>
						<AvatarFallback className='uppercase'>SB</AvatarFallback>
					</Avatar>
					<div className='flex flex-col'>
						<div className='font-space-grotesk'>
							Jakhongirbek{' '}
							<span className='text-xs text-muted-foreground'>3 days ago </span>
						</div>
						<div className='font-space-grotesk font-bold'>ReactJs Course</div>
						<div className='text-sm text-muted-foreground'>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
							exercitationem reiciendis amet quas quis enim harum autem numquam
							dignissimos alias.
						</div>
					</div>
				</div>
			</div>
			<Button variant={'ghost'} size={'icon'} className='self-start'>
				<Flag className='text-muted-foreground' />
			</Button>
		</div>
	)
}

export default InstructorReviewCard
