import React, { useState, useEffect, useRef } from 'react';

const NowPlaying = ({ audioFile }) => {
  const [audioUrl, setAudioUrl] = useState('');
  const audioPlayerRef = useRef(null);

  useEffect(() => {
    if (audioFile) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setAudioUrl(fileReader.result);
      };
      fileReader.readAsDataURL(audioFile);
    }
  }, [audioFile]);

  useEffect(() => {
    if (audioPlayerRef.current) {
      audioPlayerRef.current.load();
      audioPlayerRef.current.play();
    }
  }, [audioUrl]);

  const pause = () => {
    if (audioPlayerRef.current && !audioPlayerRef.current.paused) {
      audioPlayerRef.current.pause();
    }
  };

  return (
    <div className="now-playing-container">
      <h2 className="now-playing-header">Now Playing</h2>
      {audioUrl && (
        <audio
          controls
          autoPlay
          className="audio-player"
          ref={audioPlayerRef}
          onPause={pause}
        >
          <source src={audioUrl} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
};

export default NowPlaying;
