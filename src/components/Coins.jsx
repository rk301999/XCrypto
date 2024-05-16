import React, { useEffect, useState } from "react";
import axios from "axios";
// const dotenv = require('dotenv')
import { Button, Container, HStack, Radio, RadioGroup } from "@chakra-ui/react";
import Loader from "./Loader";
import Error from "./Error";
import CoinCard from "./CoinCard";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setloading] = useState(true);
  const [error,setError] = useState(false);
  const [page,setPage] = useState(1);
  const [currency,setCurrency]= useState("inr");

  const currencySymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const changePage=(page)=>{
    setPage(page);
    setloading(true);
  }

    const pageBtn = new Array(132).fill(1);
  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_SERVER_URI}/coins/markets?vs_currency=${currency}&page=${page}`
        );

        setCoins(data);
        setloading(false);

      
      } catch (error) {
        setError(true);
        setloading(false);
        console.log(error);
      }
    };
    fetchCoins();
  }, [currency,page]);

  if(error){
    return <Error message={"Error while fetching exchange Coins"}/>
  }
  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <>
          <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
            <HStack justify={"center"}>
              <Radio value={"inr"} >₹ INR</Radio>
              <Radio value={"eur"}>€ EUR</Radio>
              <Radio value={"usd"}>$ USD</Radio>
              
            </HStack>
          </RadioGroup>
          <HStack wrap={"wrap"} justify={"center"}>
            {coins.map((coin,index) => (
              <CoinCard
                key={index}
                id={coin.id}
                name={coin.name}
                price={coin.current_price}
                image={coin.image}
                symbol={coin.symbol}
                currencySymbol={currencySymbol}
              />
            ))}
          </HStack>
          <HStack w={"full"} overflowX={"auto"} p={"8"}>
            {
              pageBtn.map((_,index)=>{
                
            return <Button key={index} bgColor={"blackAlpha.900"} color={"white"} onClick={()=>changePage(index+1)}>{index+1}</Button>
              })
            }
          </HStack>
        </>
      )}
    </Container>
  );
};




export default Coins;
