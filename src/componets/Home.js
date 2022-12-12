import React from 'react'

const Home = () => {
  return (
    <div className="container">
        <section className="home-cards">
          <div className="card">
            <img src="https://www.superherodb.com//pictures2//portraits//10//100//639.jpg" alt="" />
            <h3>Heroe 1</h3>
            <p>
              Description
            </p>
            <a href="#">
              Learn More <i className="fas fa-chevron-right"></i>
            </a>
          </div>
          <div className="card">
            <img src="https://www.superherodb.com//pictures2//portraits//10//100//27.jpg" alt="" />
            <h3>Heroe 2</h3>
            <p>
            Description
            </p>
            <a href="#">
              Learn More <i className="fas fa-chevron-right"></i>
            </a>
          </div>
          <div className="card">
            <img src="https://www.superherodb.com//pictures2//portraits//10//100//639.jpg" alt="" />
            <h3>Heroe 3</h3>
            <p>
            Description
            </p>
            <a href="#">
              Learn More <i className="fas fa-chevron-right"></i>
            </a>
          </div>
          <div className="card">
            <img src="https://www.superherodb.com//pictures2//portraits//10//100//27.jpg" alt="" />
            <h3>Heroe 4</h3>
            <p>
            Description
            </p>
            <a href="#">
              Learn More <i className="fas fa-chevron-right"></i>
            </a>
          </div>
        </section> 
    </div>
  )
}

export default Home