import React from "react";
import AnimeCard from "./AnimeCard";

const MainComponent = (props) => {
  return (
    <div className="">
      <center>
        <form
          className="contianer mt-4 rounded"
          onSubmit={props.handleSearch}
          style={{
            width: "300px",
            borderRadius: "25px",
            boxShadow:
              "1px 1px 2px #082c55, 0 0 25px #082c55, 0 0 5px darkblue",
          }}
        >
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search Anime..."
              required
              value={props.search}
              onChange={(e) => props.setSearch(e.target.value)}
            />
          </div>
        </form>
        {props.animeList.map((anime) => (
          <AnimeCard anime={anime} />
        ))}
      </center>
    </div>
  );
};

export default MainComponent;
