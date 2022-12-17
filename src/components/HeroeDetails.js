import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../components";

const HeroeDetails = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const [hero, setHero] = useState([]);
  useEffect(() => {
    const getHero = async () => {
      const response = await axios.get(`/api/5796005173816035/${id}`);
      if (response.status === 200) {
        const data = await response.data;
        setHero(data);
        setIsLoading(false);
      }
      //console.log(data);
    };
    getHero();
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container">
          <div className="detail-container">
            <div className="detail-left-side">
              <div className="detail-left-side-image">
                {!hero ? <p></p> : <img src={hero.image.url} />}
              </div>
              <div className="detail-left-side-text">
                <h3>Name: {hero.name}</h3>
                <div>
                  <h4>Work</h4>
                  <p>Base: {hero.work.base}</p>
                  <p>Occupation: {hero.work.occupation}</p>
                </div>
                <div>
                  <h4>Connections</h4>
                  <p>
                    Group affiliation: {hero.connections["group-affiliation"]}
                  </p>
                  <p>Relatives: {hero.connections.relatives}</p>
                </div>
                <div className="btn-container">
                  <div className="btn-add">Add to list</div>
                </div>
              </div>
            </div>
            <div className="detail-right-side">
              <div className="powerstats">
                <h3>Powerstats</h3>
                <div className="powerstats-content">
                  <p>Combat: {hero.powerstats.combat}</p>
                  <p>Durability: {hero.powerstats.durability}</p>
                  <p>Intelligence: {hero.powerstats.intelligence}</p>
                  <p>Power: {hero.powerstats.power}</p>
                  <p>Speed: {hero.powerstats.speed}</p>
                  <p>Strength: {hero.powerstats.strength}</p>
                </div>
              </div>
              <div className="appearance">
                <h3>Appearance</h3>
                <div className="appearance-content">
                  <p>Eye color: {hero.appearance["eye-color"]}</p>
                  <p>Gender: {hero.appearance.gender}</p>
                  <p>Hair color: {hero.appearance["hair-color"]}</p>
                  <p>Height: {hero.appearance.height[0]}</p>
                  <p>Race: {hero.appearance.race}</p>
                </div>
              </div>
              <div className="biography">
                <h3>Biography</h3>
                <div className="biography-content">
                  <p>Alignment: {hero.biography.alignment}</p>
                  <p>Hair color: {hero.biography["alter-egos"]}</p>
                  <p>First appearance: {hero.biography["first-appearance"]}</p>
                  <p>Full name: {hero.biography["full-name"]}</p>
                  <p>Publisher: {hero.biography.publisher}</p>
                  <h4>Aliases</h4>
                  <p>Speed: {hero.biography.aliases[0]}</p>
                  <p>Strength: {hero.biography.aliases[1]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default HeroeDetails;
// const interval = setInterval(() => {
//   if (response.status === 200) {
//     setHero(response.data);

//     console.log(hero);
//     setIsLoading(false)
//   }

//   return clearInterval(interval);
// }, 5000);
