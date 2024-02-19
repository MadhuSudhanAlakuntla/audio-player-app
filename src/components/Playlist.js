import React from 'react';

function Playlist({ audioFiles, onPlayTrack }) {
  return (
    <div>
      <h2>Playlist</h2>
      <ul>
        {audioFiles.map((file, index) => (
          <li key={index}>
            <button onClick={() => onPlayTrack(index)}>{file.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Playlist;
