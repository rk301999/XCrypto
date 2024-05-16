import React from 'react'
import { HStack ,Button, Link } from '@chakra-ui/react'

const Header = () => {
  return (
    <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"}>
      <Button variant={"unstyled"} color={"white"}>
      <Link href={"/"}>Home</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"}>
      <Link href='/exchanges'>Exchanges</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"}>
      <Link href='/coins'>Coins</Link>
      </Button>

    </HStack>
  )
}

export default Header
