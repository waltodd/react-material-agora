import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Loader } from "../components";
const Home = () => {
  const [heroes, setHeroes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //  const baseURL = "https://superheroapi.com/api/5796005173816035";
  //   const API_KEY = process.env.ACCESS_TOKEN;
  const getAllHeroes = async () => {
    try {
      let data = [];
      let ID = 1;
      while (ID <= 4) {
        const response = await axios.get(`/api/5796005173816035/${ID}`);
        const json = response.data;
        data = [...data, json];
        ID++;
      }
      setHeroes(data);
      setIsLoading(false)
      //console.log(heroes)
    } catch (error) {}
  };
  useEffect(() => {
    getAllHeroes();
    
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container">
        <section className="home-cards">
              <Card heroes={heroes} />
        </section>
        </div>
      )}
    </>
  );
};

export default Home;
