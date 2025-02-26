import { checkboxAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(checkboxAnatomy.keys)

const defaultControlStylesOnAction = {
	bg: 'white',
	borderColor: 'black'
}

const baseStyle = definePartsStyle({
	control: {
		bg: 'white',
		borderWidth: '0.125rem',
		borderColor: '#31393C',
		borderRadius: 4,

		_hover: {
			...defaultControlStylesOnAction,
			_checked: defaultControlStylesOnAction
		},
		_checked: defaultControlStylesOnAction
	},
	icon: {
		color: 'black',
		// svg has inline stroke-width param, so I don't see any other way to set this parameter.
		strokeWidth: '0.0625rem!important'
	},
	label: {
		ml: 4,
		lineHeight: '1.21rem',
		fontWeight: 400
	}
})

const mdSize = definePartsStyle({
	control: {
		w: '1.5rem',
		h: '1.5rem',
		m: 0.5
	},
	icon: {
		fontSize: '0.75rem'
	}
})

export const checkboxTheme = defineMultiStyleConfig({
	baseStyle,
	defaultProps: {
		size: 'md'
	},
	sizes: {
		md: mdSize
	}
})
