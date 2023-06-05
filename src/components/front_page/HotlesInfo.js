import React from "react";
import hotel1 from "./images/bedchamber.avif";
import hotel2 from "./images/countryin.avif"
import hotel3 from "./images/dayal.avif"
import hotel4 from "./images/fabhot.avif"
import hotel5 from "./images/lime_tree.avif"
import hotel6 from "./images/octave.avif"
import hotle7 from "./images/dayal.avif"
import hotel8 from "./images/radison.avif"
import hotel9 from "./images/salttaz.avif"

import "./HotlesInfo.css";

export default function HotlesInfo() {
  return (
    <div>
      <>
        <meta charSet="utf-8" />
        <title>HOTEL Reservation</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="front.css" />
        <link rel="icon" href="./" type="image/png" />
        {/* header */}
        <header className="header" id="header">
          <div className="head-top">
            <div className="site-name">
              <span>
                <h1>OUR HOTELS</h1>
              </span>
            </div>
            <div className="site-nav" />
          </div>
          <div className="head-bottom flex">
            <h2>NICE AND COMFORTABLE PLACE TO STAY</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est
              quos veniam impedit numquam itaque voluptatum, dicta asperiores
              accusamus, eligendi neque ut incidunt, modi harum molestiae atque
              natus officia minima.
            </p>
            <button type="button" className="head-btn">
              GET STARTED
            </button>
          </div>
        </header>
        {/* Room section */}
        <section className="rooms sec-width" id="rooms">
          <div className="title">
            <h2>Rooms</h2>
          </div>
          <div className="rooms-container">
            {/* Hotel 1 */}
            <div className="room">
              <img src={hotel1} alt="Hotle 1" />
              <h3>Hotel 1</h3>
              <p>
                Lgnissimos veniam pariatur unde ea eos qui veritatis molestias
                inventore dolores? Ipsa..
              </p>
              <button className="btn book-btn">Book Now</button>
            </div>
            {/* Hotel 2 */}
            <div className="room">
              <img src={hotel2} alt="Hotel 2" />
              <h3>Hotel 2</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Praesentium rem illum ducimus{" "}
              </p>
              <button className="btn book-btn">Book Now</button>
            </div>
            {/* Hotel 3 */}
            <div className="room">
              <img src={hotel3} alt="Hotel 3" />
              <h3>Hotel 3</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusamus sunt deserunt eaque, reiciendis quos magni.
              </p>
              <p>
                <button className="btn book-btn">Book Now</button>
              </p>
            </div>
            {/* Hotel 4 */}
            <div className="room">
              <img src={hotel4} alt="Hotel 3" />
              <h3>Hotel 4</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusamus sunt deserunt eaque, reiciendis quos magni.
              </p>
              <p>
                <button className="btn book-btn">Book Now</button>
              </p>
            </div>
            {/* Hotel 5 */}
            <div className="room">
              <img src={hotel5} alt="Hotel 3" />
              <h3>Hotel 5</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusamus sunt deserunt eaque, reiciendis quos magni.
              </p>
              <p>
                <button className="btn book-btn">Book Now</button>
              </p>
            </div>
            {/* Hotel 6 */}
            <div className="room">
              <img src={hotel6}alt="Hotel 3" />
              <h3>Hotel 6</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusamus sunt deserunt eaque, reiciendis quos magni.
              </p>
              <p>
                <button className="btn book-btn">Book Now</button>
              </p>
            </div>
            {/* Hotel 7*/}
            <div className="room">
              <img src={hotle7} alt="Hotel 3" />
              <h3>Hotel 7</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusamus sunt deserunt eaque, reiciendis quos magni.
              </p>
              <p>
                <button className="btn book-btn">Book Now</button>
              </p>
            </div>
            {/* Hotel 8 */}
            <div className="room">
              <img src={hotel8} alt="Hotel 3" />
              <h3>Hotel 8</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusamus sunt deserunt eaque, reiciendis quos magni.
              </p>
              <p>
                <button className="btn book-btn">Book Now</button>
              </p>
            </div>
            {/* Hotel 9 */}
            <div className="room">
              <img src={hotel9} alt="Hotel 3" />
              <h3>Hotel 9</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusamus sunt deserunt eaque, reiciendis quos magni.
              </p>
              <p>
                <button className="btn book-btn">Book Now</button>
              </p>
            </div>
          </div>
        </section>
        {/* Rest of the HTML code */}
      </>
    </div>
  );
}
