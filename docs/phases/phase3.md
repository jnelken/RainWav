# Phase 3: Follows and Reposts, Sidebar Component (2 days)

## Rails
### Models
* Follow
* Repost

### Controllers
* Api::FollowsController (create, destroy)
* Api::RepostsController (create, destroy, index)

### Views

## Flux
### Views (React Components)
SideBar

### Stores
* Followers
* Followings

### Actions
* ApiActions.receiveFollowers
* ApiActions.receiveFollowings
* ApiActions.receiveReposts
* ApiActions.toggleFollow
* ApiActions.toggleRepost

### ApiUtil
* ApiUtil.fetchFollowers
* ApiUtil.fetchFollowings
* ApiUtil.fetchReposts
* ApiUtil.editFollow
* ApiUtil.editRepost

## Gems/Libraries
