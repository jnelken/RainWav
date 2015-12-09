# RainWav

RainWav is a social music application inspired by SoundCloud built primarily with
Ruby on Rails and React.js with Flux architecture.

[RainWav][live]

[live]: http://rainwav.co/

### Main Functionality

* Listen to tracks of an artist
* Follow / Unfollow artists
* View a feed of tracks from people you've followed
* Repost tracks
* Upload tracks + cover art to your profile or delete them
* View the number of plays on each track
* User play count statistics
* Waveform Visualization

### Details

* Single-page app using React and the Flux framework
* AWS S3 integration with Paperclip
* React.js communicating with a RESTful json API
* React + Rails custom authentication using BCrypt
* Custom URLs for users via React Routes (e.g. "rainwav.co/username")
* Waveforms generated with `wavesurfer-rails` gem

### Future Features
- [ ] Search bar
- [ ] Track Comments
- [ ] Infinite Scroll
- [ ] Likes
- [ ] Notifications
- [ ] CSS transitions
- [ ] OAuth
