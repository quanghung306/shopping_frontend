import React from "react";
import "./Container.css"
import img from "../assets/n426a4ok.png"
import { Link } from "react-router-dom";



const Container = () => {
  return (
    <div className="Container">
      
      <div className="card">
        <img src={img}/>
        <div >
          <h5 >Card title</h5>
          <p >
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          
          <Link to="/sp/sp1">
            <button>Go somewhere</button>
          </Link>
        </div>
      </div>
      <div className="card">
        <img src={img}/>
        <div >
          <h5 >Card title</h5>
          <p >
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          
          <Link to="/sp/sp1">
            <button>Go somewhere</button>
          </Link>
        </div>
      </div>
      <div className="card">
        <img src={img}/>
        <div >
          <h5 >Card title</h5>
          <p >
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          
          <Link to="/sp/sp1">
            <button>Go somewhere</button>
          </Link>
        </div>
      </div>
      <div className="card">
        <img src={img}/>
        <div >
          <h5 >Card title</h5>
          <p >
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          
          <Link to="/sp/sp1">
            <button>Go somewhere</button>
          </Link>
        </div>
      </div>
      <div className="card">
        <img src={img}/>
        <div >
          <h5 >Card title</h5>
          <p >
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          
          <Link to="/sp/sp1">
            <button>Go somewhere</button>
          </Link>
        </div>
      </div>
      <div className="card">
        <img src={img}/>
        <div >
          <h5 >Card title</h5>
          <p >
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          
          <Link to="/sp/sp1">
            <button>Go somewhere</button>
          </Link>
        </div>
      </div>
      
      
    </div>
  );
};

export default Container;
