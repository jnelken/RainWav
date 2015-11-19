# Schema Information

## Reposts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
track_id    | integer   | not null, foreign key, indexed
user_id     | integer   | not null, foreign key indexed

## Comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
comment_at  | integer   | not null, default: 0
track_id    | integer   | not null, foreign key indexed
user_id     | integer   | not null, foreign key indexed

## Follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
follower_id | integer   | not null, foreign key (references users), indexed
following_id| integer   | not null, foreign key (references users), indexed

## Genres
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
genre       | string    | not null, indexed (unique)
track_id    | integer   | not null

## Tracks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
audio       | string    | not null
genre_id    | integer   | not null, foreign key (references genres)
image       | paperclip |
description | text      |
plays       | integer   | default is 0
user_id     | integer   | not null, foreign key indexed

## Users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
username        | string    |
avatar          | paperclip |
cover_image     | paperclip |
bio             | text      |
