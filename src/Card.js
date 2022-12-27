import React from "react";
import Button from "./Button.js";
import "./Card.css";

/*function Card(){
    return(  <div className="col">
            <div className="card">
              <img src="./images/foto1.png" />
              <div className="card-body">
                <h5  className="card-title">flower</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel neque excepturi adipisci porro enim. Provident ab aperiam magni illo qui ipsum, adipisci officiis reprehenderit similique sapiente est saepe cumque nihil.</p>
                <Button />
              </div>
            </div>
          </div>
    );
}*/

class Card extends React.Component{
    render(){
        return(  <div className="col">
        <div className="card">
          <img src="./images/foto1.png" />
          <div className="card-body">
            <h5  className="card-title">flower</h5>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel neque excepturi adipisci porro enim. Provident ab aperiam magni illo qui ipsum, adipisci officiis reprehenderit similique sapiente est saepe cumque nihil.</p>
            <Button />
          </div>
        </div>
      </div>
);
    }
}


    export default Card