const aws = require("aws-sdk");
const fs = require("fs");

//TODO: create aws bucket and insert name at lines 28 and 57
//TODO: create credentials and insert in secrets.json

let secrets;
if (process.env.NODE_ENV == "production") {
    secrets = process.env;
} else {
    secrets = require("./secrets");
}

const s3 = new aws.S3({
    accessKeyId: secrets.AWS_KEY,
    secretAccessKey: secrets.AWS_SECRET,
});

exports.upload = (req, res, next) => {
    if (!req.file) {
        console.log("no req.file");
        return res.sendStatus(500);
    }

    const { filename, mimetype, size, path } = req.file;

    const promise = s3
        .putObject({
            Bucket: "",
            ACL: "public-read",
            Key: filename,
            Body: fs.createReadStream(path),
            ContentType: mimetype,
            ContentLength: size,
        })
        .promise();

    promise
        .then(() => {
            console.log("s3.js putObject worked");
            next();
            fs.unlink(path, () => {});
        })
        .catch((err) => {
            console.log("s3.js: error in upload putObject", err);
            res.sendStatus(500);
        });
};

exports.delete = (picArray, next) => {
    if (!picArray) {
        console.log("no pics to delete");
        return res.sendStatus(500);
    }
    //removed from here
    const promise = s3
        .deleteObjects({
            Bucket: "",
            Delete: {
                Objects: picArray,
                Quiet: false,
            },
        })
        .promise();

    promise
        .then((data) => {
            console.log("data in s3.js", data);
            console.log("s3.js deleteObject fired");
            next();
        })
        .catch((err) => {
            console.log("s3.js: error in delete object", err);
            res.sendStatus(500);
        });
};
