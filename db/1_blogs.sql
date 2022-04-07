DROP TABLE IF EXISTS blogstable;

CREATE TABLE blogsTable (
    id serial PRIMARY KEY
    title VARCHAR(100) NOT NULL,
    name VARCHAR(50) NOT NULL,
    content VARCHAR(2000) NOT NULL
    year INT CHECK (year<=2022),
    month INT CHECK (month>0 AND month<=12),
    day INT CHECK (day>0 AND day<=31)
)