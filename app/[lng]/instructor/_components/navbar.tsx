import Logo from '@/components/shared/logo'
import ModeToggle from '@/components/shared/mode-toggle'
import UserBox from '@/components/shared/user-box'
import React from 'react'

function Navbar() {
	return (
		<div className=' fixed z-50 inset-0 flex h-[10vh] bg-background justify-between border-b px-2 lg:px-4'>
			<Logo />
			<div className='flex items-center gap-4'>
				<ModeToggle />
				<UserBox />
			</div>
		</div>
	)
}

export default Navbar
