import React from 'react'
import { Box as BaseBox, BoxProps } from '@chakra-ui/react'

const Box: React.FC<BoxProps> = ({ children, ...props }) => (
    <BaseBox bg='#ffffff' p="16px" borderRadius="8px" mb="10px" {...props}>{children}</BaseBox>
)

export default Box
