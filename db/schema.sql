CREATE TABLE flavor_category (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
)

CREATE TABLE flavor (
    id SERIAL PRIMARY KEY,
    flavor_category REFERENCES flavor_category(id),
    name VARCHAR(255)
)