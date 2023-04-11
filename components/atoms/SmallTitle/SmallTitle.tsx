import React from 'react'
import { Heading as BaseHeading, HeadingProps } from '@chakra-ui/react'

const SmallTitle: React.FC<HeadingProps> = ({ children, ...props }) => (
  <BaseHeading
    mb="20px"
    fontSize={16}
    fontWeight={700}
    color='#333333'
    {...props}>
    {children}
  </BaseHeading>
)

export default SmallTitle
