import React from "react";
const Sidebar = ({ topAnime }) => {
  return (
    <div>
      <div className="sidenav">
        <h4 style={{ color: "white", marginTop: "30px", marginLeft: "25px" }}>
          Top Anime
        </h4>
        <div
          className="mylist"
          style={{ marginTop: "90px", marginLeft: "2px" }}
        >
          {topAnime.map((anime) => (
            <a
              href={anime.url}
              target="_blank"
              key={anime.mal_id}
              rel="noreferrer"
            >
              <p style={{ fontSize: "20px" }}>{anime.title}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
