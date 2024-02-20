const apiToken: string = 'BQAqAqHMBCreHf1Ljl7XHPZytGFS4n2Ee-0QBS_5jUbve19gKCk4Oxjl5bpqJlFAfcmUV_kny0O8WKC2t_FpxoYsII7DzrJhBPShkv_G1lpHPuIdnqKOk0WY6DqWbT7MkpfOszP-gKTZ0I1nFBj9CItTzPbbtk2b6NAFengbieu2ZS6k89VbwiBWag_sFvufhDdalT-GGG1R1ig3cfWHPOdaJS142Q';

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
  const data = await response.json() as { items: unknown[] };

  return data.items;
};