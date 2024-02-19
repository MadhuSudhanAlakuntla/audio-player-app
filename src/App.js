import React, { useState, useEffect } from 'react';
import FileUpload from './components/FileUpload';
import Playlist from './components/Playlist';
import NowPlaying from './components/NowPlaying';
import "./App.css"
function App() {
  const [audioFiles, setAudioFiles] = useState([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(null);

  useEffect(() => {
    // Load audio files from local storage if available
    const savedFiles = localStorage.getItem('audioFiles');
    if (savedFiles) {
      setAudioFiles(JSON.parse(savedFiles));
    }
    // Load last playing track index from local storage
    const savedTrackIndex = localStorage.getItem('currentTrackIndex');
    if (savedTrackIndex !== null) {
      setCurrentTrackIndex(parseInt(savedTrackIndex));
    }
  }, []);

  useEffect(() => {
    // Save audio files to local storage
    localStorage.setItem('audioFiles', JSON.stringify(audioFiles));
  }, [audioFiles]);

  useEffect(() => {
    // Save current track index to local storage
    localStorage.setItem('currentTrackIndex', currentTrackIndex);
  }, [currentTrackIndex]);

  const handleFileUpload = (newFiles) => {
    setAudioFiles([...audioFiles, ...newFiles]);
  };

  const playTrack = (index) => {
    setCurrentTrackIndex(index);
  };

  const nextTrack = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % audioFiles.length);
  };

  return (
    <div id='app'>
      <h1>React Audio Player</h1>
      <FileUpload onFileUpload={handleFileUpload} />
      <Playlist audioFiles={audioFiles} onPlayTrack={playTrack} />
      {currentTrackIndex !== null && (
        <NowPlaying
          audioFile={audioFiles[currentTrackIndex]}
          onNextTrack={nextTrack}
        />
      )}
    </div>
  );
}

export default App;
