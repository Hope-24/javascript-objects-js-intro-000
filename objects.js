var playlist() {
  BTS: 'Fake Love',
  Winner: 'Really Really',
  Blackpink: 'Kill This Love'
}

function updatePlaylist(playlist, 'MonstaX', 'Trespass') {
  playlist['MonstaX']=Trespass 
  return playlist
}

function removeFromPlaylist(playlist, Blackpink) {
  delete playlist.Blackpink
  return playlist
}