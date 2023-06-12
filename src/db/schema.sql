-- schema.sql
CREATE DATABASE flavors_app;

CREATE TABLE IF NOT EXISTS flavor_category (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS flavor (
    id SERIAL PRIMARY KEY,
    flavor_category_id REFERENCES flavor_category,
    name VARCHAR(255)
);