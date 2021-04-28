import React from "react";
import { Link } from "react-router-dom";

const Band = ({ band, bandAlbums }) => {

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card band-info">
              <div className="card-header">
                <h3>{band.name}</h3>
              </div>
              <div className="card-body">
                <p className="text-info">Genre: {band.genreCode}</p>

                <p className="text-info">Year: {band.year}</p>
                <p className="text-info">Country: {band.country}</p>

                <h3>Members</h3>
                <p className="text-info">
                  <ul>
                    {band.members.map((member) => (
                      <li
                        className="list-no-style text-info"
                        key={member.name.replaceAll(" ", "")}
                      >
                        {member.name}
                      </li>
                    ))}
                  </ul>
                </p>

                <h3>Albums</h3>
                <p className="text-info">
                  <ul>
                    {bandAlbums.map((bandAlbum) => (
                      <li className="list-no-style" key={bandAlbum.id}>
                        {bandAlbum.name}
                      </li>
                    ))}
                  </ul>
                </p>

                <button className="back-button">
                  {" "}
                  <Link className="link" to="/home">
                    Back to home
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Band;
