import "./Profile.css";

function Profile({ likedSongs, lyricsData }) {
  console.log("Liked Songs:", likedSongs);

  // Group lyrics by song
  const groupedSongs = Object.keys(likedSongs).reduce((acc, key) => {
    if (likedSongs[key]) {
      const [songId, lyricId] = key.split("-");
      if (!acc[songId]) acc[songId] = [];
      acc[songId].push(lyricId);
    }
    return acc;
  }, {});

  // Render bookmarked songs
  return (
    <div className="profile">
      <section className="profile__verse_section">
        {Object.keys(groupedSongs).length === 0 ? (
          <p className="profile__verse_section-text">
            No bookmarked lyrics yet. Start saving your favorites!
          </p>
        ) : (
          Object.entries(groupedSongs).map(([songId, lyricIds]) => (
            <div key={songId} className="profile__song-card">
              <h2 className="profile__song-title">Song {songId}</h2>
              <ul className="profile__lyrics-list">
                {lyricIds.map((lyricId) => (
                  <li key={lyricId} className="profile__lyric">
                    {lyricsData[songId]?.[lyricId] || `Lyric ${lyricId}`}
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </section>
    </div>
  );
}

export default Profile;
