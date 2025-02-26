import { Box } from '@chakra-ui/react'

import { Filters } from '@components/Filters'

export const App = () => {
	return (
		<Box
			maxW="90rem"
			mx="auto"
			minH="100dvh"
			p={8}
		>
			<Filters />
		</Box>
	)
}
