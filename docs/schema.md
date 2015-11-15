# Schema Information

## Reposts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
track_id    | integer   | not null, foreign key (references tracks), indexed
reposter_id | integer   | not null, foreign key (references users), indexed

## Likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
track_id    | integer   | not null, foreign key (references tracks), indexed
liker_id    | integer   | not null, foreign key (references users), indexed

## Comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
track_id    | integer   | not null, indexed
author_id   | integer   | not null, indexed

## Tracks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
audio       | string    | not null
genre       | string    | not null
image_url   | string    | 
description | text      |
plays       | integer   | default is 0
artist_id   | integer   | not null, foreign key (references users), indexed

## Follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
follower_id | integer   | not null, foreign key (references users), indexed
following_id| integer   | not null, foreign key (references users), indexed

## Users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
image_url       | string    |
cover_image_url | string    |
bio             | text      |
