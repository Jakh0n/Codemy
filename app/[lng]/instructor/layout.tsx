import { ChildProps } from '@/types'
import React from 'react'
import Navbar from './_components/navbar'
import Sidebar from './_components/sidebar'

function Layout({ children }: ChildProps) {
	return (
		<>
			<Navbar />
			<Sidebar />
			<main className='pl-[320px] pt-[12vh] w-full'>
				<div className='px-4 pb-4 rounded-md size-full bg-secondary'>
					{children}
				</div>
			</main>
		</>
	)
}

export default Layout
