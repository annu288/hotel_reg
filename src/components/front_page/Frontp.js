import React, { useDebugValue } from "react";
import Login from "./Login";
import Signup from "./Signup";
import front from "./front.css";
// import images from './images'

export default function Front() {
  return (
    <>
      <div>
        <header className="header" id="header">
          <div className="head-top">
            <div className="site-name">
              <span>
                <h1>OUR HOTELS</h1>
              </span>
            </div>
            <div className="site-nav"></div>
          </div>

          <div className="head-bottom flex">
            <h2>NICE AND COMFORTABLE PLACE TO STAY</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est
              quos veniam impedit numquam itaque voluptatum, dicta asperiores
              accusamus, eligendi neque ut incidunt, modi harum molestiae atque
              natus officia minima.
            </p>
            <a href="HotlesInfo.html " target="_blank">
              <button type="button" className="head-btn">
                See Hotels
              </button>
            </a>
          </div>
        </header>

        <div className="sidenav" id="sidenav">
          <span className="cancel-btn" id="cancel-btn">
            <i className="fas fa-times"></i>
          </span>

          <a href={Signup} target="_blank">
            <button className="btn sign-up">sign up</button>
          </a>
          <a href={Login} target="_blank">
            <button className="btn log-in">log in</button>
          </a>
        </div>

        <div className="book">
          <form className="book-form">
            <div className="form-item">
              <label for="checkin-date">Check In Date: </label>
              <input type="date" id="chekin-date" />
            </div>
            <div className="form-item">
              <label for="checkout-date">Check Out Date: </label>
              <input type="date" id="chekout-date" />
            </div>
            <div className="form-item">
              <label for="adult">Adults: </label>
              <input type="number" min="1" value="1" id="adult" />
            </div>
            <div className="form-item">
              <label for="children">Children: </label>
              <input type="number" min="1" value="1" id="children" />
            </div>
            <div className="form-item">
              <label for="rooms">Rooms: </label>
              <input type="number" min="1" value="1" id="rooms" />
            </div>
            <div className="form-item">
              <input type="submit" className="btn" value="Book Now" />
            </div>
          </form>
        </div>

        <section className="customers" id="customers">
          <div className="sec-width">
            <div className="title">
              <h2>customers</h2>
            </div>
            <div className="customers-container">
              {/* <!-- single customer --> */}
              <div className="customer">
                <div className="rating">
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="far fa-star"></i>
                  </span>
                </div>
                <h3>We Loved it</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat beatae veritatis provident eveniet praesentium veniam
                  cum iusto distinctio esse, vero est autem, eius optio
                  cupiditate?
                </p>
                <span>Customer Name, Country</span>
              </div>
              {/* <!-- end of single customer --> */}
              {/* <!-- single customer --> */}
              <div className="customer">
                <div className="rating">
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="far fa-star"></i>
                  </span>
                </div>
                <h3>Comfortable Living</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat beatae veritatis provident eveniet praesentium veniam
                  cum iusto distinctio esse, vero est autem, eius optio
                  cupiditate?
                </p>
                <span>Customer Name, Country</span>
              </div>
              {/* <!-- end of single customer --> */}
              {/* <!-- single customer --> */}
              <div className="customer">
                <div className="rating">
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="far fa-star"></i>
                  </span>
                </div>
                <h3>Nice Place</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat beatae veritatis provident eveniet praesentium veniam
                  cum iusto distinctio esse, vero est autem, eius optio
                  cupiditate?
                </p>

                <span>Customer Name, Country</span>
              </div>
              {/* <!-- end of single customer --> */}
            </div>
          </div>
        </section>
        {/* <!-- end of body content --> */}

        {/* <!-- footer --> */}
        <footer className="footer">
          <div className="footer-container">
            <div>
              <h2>About Us </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                sapiente mollitia doloribus provident? Eos quisquam aliquid vel
                dolorum, impedit culpa.
              </p>
              <ul className="social-icons">
                <li className="flex">
                  <i className="fa fa-twitter fa-2x"></i>
                </li>
                <li className="flex">
                  <i className="fa fa-facebook fa-2x"></i>
                </li>
                <li className="flex">
                  <i className="fa fa-instagram fa-2x"></i>
                </li>
              </ul>
            </div>

            <div>
              <h2>Useful Links</h2>
              <a href="#">Blog</a>
              <a href="#">Rooms</a>
              <a href="#">Subscription</a>
              <a href="#">Gift Card</a>
            </div>

            <div>
              <h2>Privacy</h2>
              <a href="#">Career</a>
              <a href="#">About Us</a>
              <a href="#">Contact Us</a>
              <a href="#">Services</a>
            </div>

            <div>
              <h2>Have A Question</h2>
              <div className="contact-item">
                <span>
                  <i className="fas fa-map-marker-alt"></i>
                </span>
              </div>
              <div className="contact-item">
                <span>
                  <i className="fas fa-phone-alt"></i>
                </span>
                <span>123456</span>
              </div>
              <div className="contact-item">
                <span>
                  <i className="fas fa-envelope"></i>
                </span>
                <span>OURHOTELS@gmail.com</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
