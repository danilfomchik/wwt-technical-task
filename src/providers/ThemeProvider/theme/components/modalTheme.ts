import { modalAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
	overlay: {
		backdropFilter: 'blur(12.5px)'
	},

	dialogContainer: {
		padding: '5rem',

		'@media (max-width: 768px)': {
			padding: '4rem 2rem'
		},

		'@media (max-width: 480px)': {
			padding: '3rem 1rem'
		}
	},

	dialog: {
		justifyContent: 'space-between',
		minH: '296px',
		height: 'auto',
		borderRadius: 'md',
		margin: 0
	},

	closeButton: {
		position: 'static',
		'& svg': {
			width: '1.25rem',
			height: '1.25rem',

			'@media (max-width: 768px)': {
				width: '1rem',
				height: '1rem'
			}
		}
	},

	header: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		gap: 4,
		fontSize: '2.5rem',
		lineHeight: '3.025rem',
		fontWeight: 'medium',
		textAlign: 'center',
		padding: '0px 0px 25px 56px',
		margin: '0px 32px',
		position: 'relative',

		'@media (max-width: 768px)': {
			fontSize: '2rem',
			lineHeight: '2.5rem'
		},

		'@media (max-width: 480px)': {
			margin: '0px 16px'
		}
	},

	body: {
		flex: 'none',
		pt: 0,
		pb: 0,
		px: 34,

		'@media (max-width: 480px)': {
			padding: '0 1.25rem'
		}
	}
})

const sizes = {
	md: {
		dialog: {
			maxW: '1280px',
			pt: 8,
			pb: 8,

			'@media (max-width: 480px)': {
				pt: 6,
				pb: 6
			}
		}
	},
	lg: {
		dialog: {
			maxW: '1280px',
			pt: 10,
			pb: 10,

			'@media (max-width: 480px)': {
				pt: 8,
				pb: 8
			}
		}
	},
	xl: {
		dialog: {
			maxW: '100%'
		}
	}
}

export const modalTheme = defineMultiStyleConfig({
	baseStyle,
	sizes,
	defaultProps: {
		size: 'lg'
	}
})
