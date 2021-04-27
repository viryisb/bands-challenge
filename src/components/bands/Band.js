import React from "react";
import { Link } from "react-router-dom";

const Band = ({ band, bandAlbums }) => {
  console.log(bandAlbums);
  return (
    <>
      <p>{band.name}</p>
      <p>{band.genreCode}</p>
      <p>{band.year}</p>
      <p>{band.country}</p>

      <h3>Members</h3>
      <p>
        <ul>
          {band.members.map((member) => (
            <li key={member.name.replace(/ /g, "")}>{member.name}</li>
          ))}
        </ul>
      </p>

      <h3>Albums</h3>
      <p>
        <ul>
          {bandAlbums.map((bandAlbum) => (
            <li key={bandAlbum.id}>{bandAlbum.name}</li>
          ))}
        </ul>
      </p>

      <Link to="/home">Volver a la lista</Link>
    </>
  );
};

export default Band;
