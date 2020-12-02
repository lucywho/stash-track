const spicedPg = require("spiced-pg");

//ToDo: add db url after setting up db

const db = spicedPg(
    process.env.DATABASE_URL || "postgres:postgres:postgres@localhost:<...>"
);

module.exports.addUser = (first_name, last_name, email, hashpass) => {
    return db.query(
        `INSERT INTO users (first_name, last_name, email, password)
        VALUES($1, $2, $3, $4) RETURNING id`,
        [first_name, last_name, email, hashpass]
    );
};
