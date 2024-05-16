import React, { useEffect, useState } from "react";
import axios from "axios";
// const dotenv = require('dotenv')
import { Container, HStack } from "@chakra-ui/react";
import Loader from "./Loader";
import ExchangeCard from "./ExchangeCard";
import Error from "./Error";

const Exchanges = () => {
  const [exchanges, getExchanges] = useState([]);
  const [loading, setloading] = useState(true);
  const [error,setError] = useState(false);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_SERVER_URI}/exchanges?page`
        );
        getExchanges(data);
        setloading(false);

      
      } catch (error) {
        setError(true);
        setloading(false);
        console.log(error);
      }
    };
    fetchExchanges();
  }, []);

  if(error){
    return <Error message={"Error while fetching exchange information"}/>
  }
  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <>
          <HStack wrap={"wrap"} justify={"center"}>
            {exchanges.map((exchange,index) => (
              <ExchangeCard
              key={index}
                name={exchange.name}
                image={exchange.image}
                rank={exchange.trust_score_rank}
                url={exchange.url}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Exchanges;
