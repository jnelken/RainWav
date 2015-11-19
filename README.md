# FresherNote

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: https://rainwav.herokuapp.com/

## Minimum Viable Product

RainWav is a social music application inspired by SoundCloud built using Ruby on Rails
and React.js. RainWav allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [√] Create an account
- [√] Log in / Log out
- [ ] Play Tracks
- [ ] Upload Tracks
- [ ] Repost Tracks
- [ ] Follow / Unfollow Users
- [ ] Leave Comments
- [ ] Search for tracks/users
- [ ] View a feed of new tracks from Followees

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication / model, Track model, API (~2 days)

In Phase 1, I will begin by implementing user signup/login and authentication (using
BCrypt). There will be a basic landing page after signup/login that will contain the
container for the application's root React component. Then I will start developing
the Track model and API Controller to being sending json, as well as look for a
file hosting service to store the uploaded tracks.

[Details][phase-one]

### Phase 2: Flux Architecture and Track/User CRUD (~3 days)

Phase 2 is focused on setting up Flux, the React Router, and the React view
structure for the main application. After the basic Flux architecture has been
set up, a Track store will be implemented and a set of actions corresponding to
the needed CRUD functionality created. Once this is done, I will create React
views for the User's `TracksIndex`, and the `TracksIndexItem`, and `TrackForm`.
Tracks can be created, played, edited and destroyed in the browser. I'll also
get to work setting up the User model on flux as well, which includes the Stream
(root session page) and the user profile. After constructing the views, I will
start adding some rudimentary styling with CSS.

[Details][phase-two]

### Phase 3: Genres, Follows and Reposts, Sidebar (~3 days)

Phase 3 adds some social features for users. Users can click buttons to follow
a user or repost a track. Reposts will show up on their profile page mixed in
with their original tracks. the number of followers will appear on their sidebar,
as well as the number of people they are following. The Genres table will allow
for a quick search of tracks listed in that genre.

[Details][phase-three]

### Phase 4: Comments Component (~1 day)

Phase 5 adds the ability to comment on tracks using an embedded form through
a new React Component. Users can leave comments on Tracks while the audio is still
playing without interruption, and they will appear immediately underneath the
current track being played. This can be done from the TrackIndexItem view, or the
TrackShow view. The comments keep track of where they are in playback. I aim
to have the comment avatars displayed along the track timeline if all goes well.

[Details][phase-four]

### Phase 5: SearchBar, NavBar (~1 day)

Phase 5 will be implementing a React SearchBar in my Nav. This will involve
creating a component and SearchStore to hold the results of the search. It should
be able to update live as you type, and give back user and track results. I'll
also finish up any part of the comments (including styling, ordering) that I may
have overlooked.

[Details][phase-five]

### Phase 6: Styling Cleanup and Seeding (~1 day)

Only the most important styles have been written before this point, but in
Phase 6 I will add styling flourishes and make modals out of some elements (like
the TrackForm).

### Bonus Features (TBD)
- [ ] waveform visualization
- [ ] Infinite Scroll
- [ ] Likes
- [ ] Notifications
- [ ] Prettify transitions
- [ ] Facebook Authentication

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
