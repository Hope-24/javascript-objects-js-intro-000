var playlist = {
  artistTitle = 'songTitle'
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist['artistName']=songTitle;
  return playlist
}

function removeFromPlaylist(playlist, artistTitle) {
  delete playlist[artistTitle]
  return playlist
}
