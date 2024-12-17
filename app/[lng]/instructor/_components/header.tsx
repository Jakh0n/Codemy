import React from 'react'
interface Props {
	title: string
	description: string
}
function Header({ title, description }: Props) {
	return (
		<div className='pt-4 '>
			<h1 className='font-bold text-4xl font-space-grotesk'>{title}</h1>
			<p className='font-medium text-sm text-muted-foreground'>{description}</p>
		</div>
	)
}

export default Header
