import React from "react";
import { Nav } from "./Nav";

export const Header = () => {
  return (
    <header className="home">
      <Nav />
      <section className="home__content container">
        <div className="home__text">
          <h1 className="home__title">
            <span>Las Aventuras de </span>{" "}
            <span className="home__span">Rick y Morty</span>{" "}
          </h1>

          <p className="home__subtitle">
            Unlock the full potential of your business with our pre-vetted
            talent pool and advanced tech solutions
          </p>

          <div className="home__buttons"></div>
        </div>
        <div className="home__image">
          <img width={500} height={500} src="/images/header.png" alt="imagen de rick and morty" />
        </div>
      </section>
    </header>
  );
};
