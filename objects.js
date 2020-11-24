var playlist = {
  BTS: 'Fake Love',
  Winner: 'Really Really',
  Blackpink: 'Kill This Love'
}

function updatePlaylist(playlist, artistName, songName) {
  playlist['artistName']=songName
  return playlist
}

function removeFromPlaylist(playlist, Blackpink) {
  delete playlist['Blackpink']
  return playlist
}
