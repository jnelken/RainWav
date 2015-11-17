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
user_id     | integer   | not null, foreign key indexed

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
