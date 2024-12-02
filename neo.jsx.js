import React, { useState } from "react";
import "./Gallery.css"; // Add your styles here

const albums = [
  {
    title: "Section.80",
    artist: "Kendrick Lamar",
    releaseYear: 2011,
    cover: "https://i.scdn.co/image/ab67616d0000b273a2f1f2e1d28a94ec45d3a1b5",
    url: "https://youtube.com/playlist?list=OLAK5uy_lCMvFdTHA0vWhmi5_hEusSMNf9K5Dz-9Q"
  },
  {
    title: "good kid, m.A.A.d city",
    artist: "Kendrick Lamar",
    releaseYear: 2012,
    cover: "https://i.scdn.co/image/ab67616d0000b273c2f3fae12d92d3fa3bb7391f",
    url: "https://youtube.com/playlist?list=OLAK5uy_mrfpInJDCyV2FWjlLBx3g7DhCFkxWjlc4"
  },
  {
    title: "To Pimp a Butterfly",
    artist: "Kendrick Lamar",
    releaseYear: 2015,
    cover: "https://i.scdn.co/image/ab67616d0000b2733075d7ebf9cd36786794cf7b",
    url: "https://youtube.com/playlist?list=OLAK5uy_nBQJpI52j8O9XqsPhjo2jsPjObhLtfuHM"
  },
  {
    title: "DAMN.",
    artist: "Kendrick Lamar",
    releaseYear: 2017,
    cover: "https://i.scdn.co/image/ab67616d0000b27395b4520ed127a4a03e217d06",
    url: "https://youtube.com/playlist?list=OLAK5uy_ln_rwlX1izf5Ym4Hjt9lW0rF9K_Ukfg_Y"
  },
  {
    title: "Mr. Morale & The Big Steppers",
    artist: "Kendrick Lamar",
    releaseYear: 2022,
    cover: "https://i.scdn.co/image/ab67616d0000b2735f84dc7de8d97b13a4f8d5f1",
    url: "https://youtube.com/playlist?list=OLAK5uy_kchBc1-5peys8PTetKXyXLH2gOY2fhzH8"
  },
  {
    title: "GNX",
    artist: "Kendrick Lamar",
    releaseYear: 2024
    cover: "https://media.pitchfork.com/photos/6740bc83a906f31c38618d15/master/w_1280%2Cc_limit/Kendrick-Lamar-GNX.jpeg",
    url: "https://youtu.be/YwUQ_5iV9pY?si=f7kj01yDLjeNRIyq"
  },
];

const Card = ({ album }) => {
  return (
    <div className="card">
      <img src={album.cover} alt={album.title} />
      <h3>{album.title}</h3>
      <p>Artist: {album.artist}</p>
      <p>Year: {album.releaseYear}</p>
    </div>
  );
};

const Gallery = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAlbums = albums.filter((album) =>
    album.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search albums..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <div id="gallery" className="gallery">
        {filteredAlbums.map((album, index) => (
          <Card key={index} album={album} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;