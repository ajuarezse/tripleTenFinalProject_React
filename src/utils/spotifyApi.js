import { clientId, clientSecret } from "./constants";

const tokenEndpoint = "https://accounts.spotify.com/api/token";
const searchEndpoint = "https://api.spotify.com/v1/search";

export default async function fetchAccessToken() {
  const response = await fetch(tokenEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
    },
    body: new URLSearchParams({
      grant_type: "client_credentials",
    }),
  });

  const data = await response.json();
  return data.access_token;
}

async function searchTracks(query) {
  const accessToken = await fetchAccessToken();
  const response = await fetch(`${searchEndpoint}?q=${query}&type=track`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const data = await response.json();
  console.log("Spotify API Response:", data);
  return data.tracks ? data.tracks.items : [];
}

export { searchTracks };
