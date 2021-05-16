import React from "react";

const AnimeCard = ({ anime }) => {
  return (
    <>
      <div class="card" style={{ width: "18rem" }}>
        <img src={anime.image_url} class="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-text">{anime.title}</p>
        </div>
      </div>
    </>
  );
};

export default AnimeCard;
