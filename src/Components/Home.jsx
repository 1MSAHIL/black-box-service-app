import React from "react";
import vg from "../Assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="Home" id="Home">
        <main>
          <h1>Bl4ck-Box</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="Home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            We're your one and only solution to the tech problems you face every
            day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="Home3" id="about">
        <div>
          <h1>Who are we ?</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
            explicabo laborum aspernatur. Ullam dicta ratione, eos nisi
            excepturi molestias maiores consequuntur nam ducimus expedita
            voluptatibus. Mollitia vel nisi eos a. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quod quibusdam iusto similique earum
            nostrum dolores et voluptatem minima. Repudiandae voluptatum et
            nostrum modi neque aperiam pariatur! Quis reiciendis totam quo!
          </p>
        </div>
      </div>

      <div className="Home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Insagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
