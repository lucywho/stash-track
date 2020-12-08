const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const server = require("http").Server(app);

const compression = require("compression");
const db = require("./db.js");

const cookieSession = require("cookie-session");
const csurf = require("csurf");

const { hash, compare } = require("./bc.js");

const s3 = require("./s3");
const config = require("./config"); //ToDo: add bucket name to config file after set up

//=== MIDDLEWARE ===
app.use(compression());

app.use(
    cookieSession({
        secret: "stashtastic",
        maxAge: 1000 * 60 * 60 * 24 * 14,
    })
);

app.use(express.static("public"));

app.use(express.json());

app.use(
    express.urlencoded({
        extended: false,
    })
);

app.use(csurf());

app.use(function(req, res, next) {
    res.cookie("mytoken", req.csrfToken());
    next();
});

app.use((req, res, next) => {
    res.setHeader("X-Frame-Options", "deny");
    next();
});

//==image upload boilerplate==//
// const multer = require("multer");
// const uidSafe = require("uid-safe");
// const path = require("path");

// const diskStorage = multer.diskStorage({
//     destination: function(req, file, callback) {
//         callback(null, __dirname + "/uploads");
//     },
//     filename: function(req, file, callback) {
//         uidSafe(24).then(function(uid) {
//             callback(null, uid + path.extname(file.originalname));
//         });
//     },
// });

// const uploader = multer({
//     storage: diskStorage,
//     limits: {
//         fileSize: 2097152,
//     },
// });
//==end of image upload boilerplate==

// === ROUTES ===

if (process.env.NODE_ENV != "production") {
    app.use(
        "/bundle.js",
        require("http-proxy-middleware")({
            target: "http://localhost:8081/",
        })
    );
} else {
    app.use("/bundle.js", (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

app.get("/welcome", (req, res) => {
    console.log("welcome route hit");
    if (req.session.userId && !resetPass) {
        res.redirect("/");
    } else {
        res.sendFile(__dirname + "/public/index.html");
    }
});

app.post("/register", (req, res) => {
    console.log("register route hit");

    const first_name = req.body.first;
    const last_name = req.body.last;
    const email = req.body.email;
    const password = req.body.password;
    let user_id;

    if (!first_name || !last_name || !email || !password) {
        res.json({ error: true });
        return;
    }

    hash(password).then((hashpass) => {
        db.addUser(first_name, last_name, email, hashpass)
            .then((results) => {
                req.session.userId = results.rows[0].id;
                user_id = req.session.userId;
                res.json({ error: false });
            })
            .catch((err) => {
                console.log("err in addUser: ", err);
                res.json({ error: true });
            });
        return;
    });
}); //end of register route

app.post("/login", (req, res) => {
    console.log("/login route hit");
    const logemail = req.body.email;
    const logpassword = req.body.password;
    console.log(logemail, logpassword);
    let user_id;

    if (!logemail || !logpassword) {
        res.json({ error: true });
        return;
    }

    db.getPassword(logemail)
        .then((results) => {
            let hashpass = results.rows[0].password;

            compare(logpassword, hashpass)
                .then((matchValue) => {
                    if (!matchValue) {
                        console.log("err in matchValue: ", err);
                        res.json({ error: true });
                        return;
                    } else {
                        user_id = results.rows[0].id;
                        req.session.userId = user_id;
                        res.json({ error: false });
                    }
                }) //end of matchvalue
                .catch((err) => {
                    console.log("err in compare password: ", err);
                    res.json({ error: true });
                });
            return;
        })
        .catch((err) => {
            console.log("error in getPassword: ", err);
            res.json({ error: true });
        });
}); //end of login route

server.listen(port, () =>
    console.log(`stashtrack server listening on port ${port}`)
);
