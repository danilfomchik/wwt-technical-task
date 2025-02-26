import { PropsWithChildren } from 'react'

import {
	Box,
	Modal as ChakraModal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	ModalProps
} from '@chakra-ui/react'

import { IModalProps } from './types'

export const Modal = ({
	modalTitle,
	isOpen,
	onClose,
	children,
	...restProps
}: PropsWithChildren<IModalProps & ModalProps>) => {
	// const { t } = useTranslation()

	return (
		<ChakraModal
			isOpen={isOpen}
			onClose={onClose}
			{...restProps}
		>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>
					<Box flex="1">{modalTitle}</Box>
					<ModalCloseButton size="lg" />
				</ModalHeader>

				<ModalBody>{children}</ModalBody>
			</ModalContent>
		</ChakraModal>
	)
}
