import "./Songs.css";
import React, { ReactElement, useState, FC } from "react";

interface SongsProps {
  songs: string[];
}
const Songs: FC<SongsProps> = ({ songs }: SongsProps): ReactElement => {
  const [showSongs, setShowSongs] = useState(false);

  const clickHandler = () => {
    setShowSongs(!showSongs);
  };

  const listSongs = songs.map((song, i) => {
    return <li key={i}>{song}</li>;
  });

  return (
    <div className="songs-list">
      <button onClick={clickHandler}>View Songs</button>
      {showSongs && <ol>{listSongs}</ol>}
      {showSongs && listSongs.length === 0 && <p>No songs to show</p>}
    </div>
  );
};

export default Songs;
