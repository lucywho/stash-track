const spicedPg = require("spiced-pg");

const db = spicedPg(
    process.env.DATABASE_URL ||
        "postgres:postgres:postgres@localhost:5432/stashtrack"
);

module.exports.addUser = (first_name, last_name, email, hashpass) => {
    return db.query(
        `INSERT INTO users (first_name, last_name, email, password)
        VALUES($1, $2, $3, $4) RETURNING id`,
        [first_name, last_name, email, hashpass]
    );
};

module.exports.getPassword = (logemail) => {
    return db.query(`SELECT * FROM users where email = $1`, [logemail]);
};
