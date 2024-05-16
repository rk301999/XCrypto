import { Box, Spinner, VStack } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
  return (
   <VStack h={"80vh"} w={"full"} justify={"center"}>
    <Box transform={"scale(1)"}>
      <Spinner  thickness='7px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl'/>
    </Box>
   </VStack>
  )
}

export default Loader
