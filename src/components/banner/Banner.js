import React, { useEffect, useState } from "react";
import { API_KEY, imageUrl } from "../../Constants/Constants";
import axios from "../../axios";
import "./banner.css";

function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data.results);
        // console.log(response.data.results.length+)

        // show random movies on banner
        const indexvalue = Math.floor(
          Math.random() * response.data.results.length
        );
        setMovie(response.data.results[indexvalue]);
      });
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`,
      }}
      className="banner"
    >
      <div className="content">
        <h1 className="title">{movie ? movie.title || movie.name : ""}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h2 className="description">{movie ? movie.overview : ""}.</h2>
      </div>
    </div>
  );
}

export default Banner;
