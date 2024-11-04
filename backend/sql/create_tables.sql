CREATE TABLE sabang_community_chapter (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    alexis_name VARCHAR(50) NOT NULL,
    batch_name VARCHAR(50) NOT NULL,
    chapter VARCHAR(50) NOT NULL,
    date_of_survival DATE NOT NULL,
    gt VARCHAR(50) NOT NULL,
    mi VARCHAR(50) NOT NULL
);

CREATE TABLE songco_community_chapter (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    alexis_name VARCHAR(50) NOT NULL,
    batch_name VARCHAR(50) NOT NULL,
    chapter VARCHAR(50) NOT NULL,
    date_of_survival DATE NOT NULL,
    gt VARCHAR(50) NOT NULL,
    mi VARCHAR(50) NOT NULL
);

CREATE TABLE metro_community_chapter (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    alexis_name VARCHAR(50) NOT NULL,
    batch_name VARCHAR(50) NOT NULL,
    chapter VARCHAR(50) NOT NULL,
    date_of_survival DATE NOT NULL,
    gt VARCHAR(50) NOT NULL,
    mi VARCHAR(50) NOT NULL
);

CREATE TABLE phlmc_community_chapter (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    alexis_name VARCHAR(50) NOT NULL,
    batch_name VARCHAR(50) NOT NULL,
    chapter VARCHAR(50) NOT NULL,
    date_of_survival DATE NOT NULL,
    gt VARCHAR(50) NOT NULL,
    mi VARCHAR(50) NOT NULL
);

CREATE TABLE balikasu_community_chapter (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    alexis_name VARCHAR(50) NOT NULL,
    batch_name VARCHAR(50) NOT NULL,
    chapter VARCHAR(50) NOT NULL,
    date_of_survival DATE NOT NULL,
    gt VARCHAR(50) NOT NULL,
    mi VARCHAR(50) NOT NULL
);

CREATE TABLE tubcc (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    alexis_name VARCHAR(50) NOT NULL,
    batch_name VARCHAR(50) NOT NULL,
    chapter VARCHAR(50) NOT NULL,
    date_of_survival DATE NOT NULL,
    gt VARCHAR(50) NOT NULL,
    mi VARCHAR(50) NOT NULL
);

CREATE TABLE lpcc (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    alexis_name VARCHAR(50) NOT NULL,
    batch_name VARCHAR(50) NOT NULL,
    chapter VARCHAR(50) NOT NULL,
    date_of_survival DATE NOT NULL,
    gt VARCHAR(50) NOT NULL,
    mi VARCHAR(50) NOT NULL
);
