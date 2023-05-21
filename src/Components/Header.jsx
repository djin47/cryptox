import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <HStack bgColor={"blackAlpha.900"} padding={'4'} shadow={"base"}>
        <Button variant={"unstyled"} color={"white"}>
            <Link to="/">Home</Link>
        </Button>
        <Button variant={"unstyled"} color={"white"}>
            <Link to="/coins">Coin</Link>
        </Button>
        <Button variant={"unstyled"} color={"white"}>
            <Link to="/exchanges">Exchanges</Link>
        </Button>
    </HStack>
  )
}

export default Header