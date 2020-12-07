CREATE TABLE color (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    color_code TEXT NOT NULL, 
    color_url TEXT NOT NULL
)

CREATE TABLE medium (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    medium_type TEXT NOT NULL, 
    difficulty INTEGER NOT NULL
)

CREATE TABLE canvas (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    canvas_size TEXT NOT NULL,
    canvas_quantity INTEGER NOT NULL
)

CREATE TABLE painting (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    painting_year INTEGER NOT NULL,
    painting_classification TEXT NOT NULL
)

CREATE TABLE artist (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    artist_name TEXT NOT NULL,
    artist_contact TEXT NOT NULL
)