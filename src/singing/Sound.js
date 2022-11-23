import React from 'react';


import { NOOP, ASSET_PATH } from './index';


export function Sound({ audioUrl, onComplete = NOOP, onPlay = NOOP, onStop = NOOP }) {

  const audioRef = React.useRef(null);

  React.useEffect(() => {
    if (!audioRef)
      return;

    audioRef.current.onended = () => {
      onComplete();
    };

    audioRef.current.ontimeupdate = () => {
      if (audioRef.current.currentTime >= (audioRef.current.duration - 3)) {
        onComplete();
      }
    };

    audioRef.current.onplay = () => {
      onPlay();
    };

    audioRef.current.onpause = () => {
      onStop();
    };

  }, [audioRef, onComplete, onStop, onPlay]);

  return (
    <audio ref={audioRef} src={`${ASSET_PATH}/${audioUrl}`} controls style={{ "width": "100%" }} />
  );
}
