import { SavedTrack, SpotifyType } from "spotify-types";

const apiToken: string = 'BQBG9xp054sCWDRMG7OzlKNshYS3xKKwiI5ZY60_M03v6Wb1kABKzaEd3WnwJvltFZT1JByNrQKUymtIBOYL6T7vP0cf97kHdoJA8LNK8i1DdjvKJ4zwumegjMkYnlc8NovIUwz9Kjqd5HIjSlq-HftNjt47DqVfPNP8UmNwQ0vwiTiK_OmG8GnuSlJtz8RS_vjILmQ5GBFcdpSEvUhABWnoSA_wyw';

export const fetchTracks = async () => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
     throw new Error(`Fetching tracks failed with status ${response.status}`)
   }
  const data = await response.json() as { items: SavedTrack[] };

  return data.items;
};