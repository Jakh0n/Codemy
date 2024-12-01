'use client'

import { useTranslation } from '@/i18n/client'
import { useParams } from 'next/navigation'
import Hero from './_components/hero'

function Page() {
	return (
		<div>
			<Hero />
		</div>
	)
}

export default Page
