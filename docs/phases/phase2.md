# Phase 2: Phase 2: Flux Architecture and Track CRUD (~3 days)

## Rails
### Models

### Controllers
Api::UsersController (show)

### Views
* tracks/index.json.jbuilder
* tracks/show.json.jbuilder
* users/show.json.jbuilder

## Flux
### Views (React Components)
* UserShow
  - TracksIndex
    - TracksIndexItem
* TrackShow
* TrackForm

### Stores
* Track
* User

### Actions
* ApiActions.receiveTracks
* ApiActions.receiveOneTrack
* ApiActions.deleteTrack

### ApiUtil
* ApiUtil.fetchTracks
* ApiUtil.fetchOneTrack
* ApiUtil.createTrack
* ApiUtil.editTrack
* ApiUtil.destroyTrack

## Gems/Libraries
* React
* Flux
* Flux Dispatcher / Eventemitter
* JSX Transformer
