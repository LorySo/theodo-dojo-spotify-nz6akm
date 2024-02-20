import logo from './assets/logo.svg';
import './App.css';
import { useState } from 'react';
import { fetchTracks } from './lib/fetchTracks';
import { useQuery } from '@tanstack/react-query';
import { SavedTrack } from 'spotify-types';
import swal from 'sweetalert';

// let trackIndex = 0;

const App = () => {
  const trackUrls = [
    'https://p.scdn.co/mp3-preview/742294f35af9390e799dd96c633788410a332e52',
    'https://p.scdn.co/mp3-preview/5a12483aa3b51331aba663131dbac967ccb33d99',
    'https://p.scdn.co/mp3-preview/31f65b6a613010f22316c7be335b62226cf2f263',
    'https://p.scdn.co/mp3-preview/0f6b8a3524ec410020457da4cdd7717f9addce2f',
    'https://p.scdn.co/mp3-preview/ac28d1b0be285ed3bfd8e9fa5fad133776d7cf36',
  ];

  const CurrentTrack1 = 'https://p.scdn.co/mp3-preview/c5fa01be60a985706241755c7ace13255e863c43?cid=e19a5d3d29db4379a984ff877f80e2f6';

  const [trackIndex, setTrackIndex] = useState(0)
  const goToNextTrack = () => {
    setTrackIndex(trackIndex + 1);
  }

  const { data: tracks } = useQuery({
		queryKey: ['tracks'],
		queryFn: fetchTracks
  });



  const checkAnswer = (id : number) => {
    if (id == trackIndex){
      swal('Bravo');
    } else {
      swal('wrong answer');
    }
  }

  console.log(tracks)

  //le return est pour l'affichage, on définit les choses de l'app dans la fct directement

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Bienvenue sur le blind test</h1>
        <h2 className="App-subtitle">Amusez-vous bien !</h2>
      </header>
      <div className="App-images">
        <p>Voici le blindtest tant attendu hihi</p>
        <audio src={CurrentTrack1} autoPlay controls />
        <button onClick={goToNextTrack}>
            Next track
        </button>
        <p>Nombre de musiques : {tracks?.length}</p>
        <p>{tracks ? tracks[0]?.track.name : 'loading'}</p>
        <AlbumCover track={tracks ? tracks[trackIndex] : undefined} />
      </div>
      <div className="App-buttons">
      <button onClick={() => checkAnswer(0)}>{tracks ? tracks[0]?.track.name : 'loading'}</button>
      <button onClick={() => checkAnswer(1)}>{tracks ? tracks[1]?.track.name : 'loading'}</button>
      <button onClick={() => checkAnswer(2)}>{tracks ? tracks[2]?.track.name : 'loading'}</button>
      </div>
    </div>
  );
};

const AlbumCover = ({ track } : {track : SavedTrack | undefined}) =>  {
  const src = "https://i.scdn.co/image/ab67616d0000b273df88cd3a09cde73076eca817";
  return (
      <img src={src} style={{ width: 400, height: 400 }} />
  );
}

export default App;
