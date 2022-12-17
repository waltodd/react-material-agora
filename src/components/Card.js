import React from "react";
import { Link } from "react-router-dom";

const Card = ({ heroes }) => (
  <>
    {heroes.map((hero, idx) => (
      <Link to={`${hero.id}`} key={`card-${idx}`}>
        <div className="card">
          <img src={hero.image.url} alt={hero.name} />

          <h3>{hero.name}</h3>
          <p>Learn More</p>
        </div>
      </Link>
    ))}
  </>
);

export default Card;
