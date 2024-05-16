import React from 'react'
import { Img,  VStack ,Heading, Link,Text} from '@chakra-ui/react'

const CoinCard = ({name,image,symbol,price,id,currencySymbol="₹"}) => {
  return (
    <Link href={`/coins/${id}`} >
        <VStack w={"52"} shadow={"lg"} p={"8"} borderRadius={"lg"} transition={"all 0.3s"} m={"4"}
        css={{
            "&:hover":{
                transform: "scale(1.1)",
            }
        }}>
            <Img src={image} w={"10"} h={"10"} objectFit={"contain"} alt='exchange'/>
            <Heading size={"md"} noOfLines={1}>{name}</Heading>
            <Heading size={"md"} noOfLines={1}>{symbol}</Heading>
            <Text noOfLines={1}>{price?`${currencySymbol}${price}`:"NA"}</Text>
        </VStack>
    </Link>
  )
}




export default CoinCard
