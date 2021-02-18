const express = require('express');

const router = express.Router();

const {getFiles, getFile, uploadSingle, uploadMultiple, deleteFile} = require("./file.controller");
const {notAcceptable} = require("../../shared/status.controller");

router.get("/", getFiles);
router.get("/:fileID", getFile);
router.post("/", uploadSingle);
router.post("/multi", uploadMultiple);
router.delete("/:fileID", deleteFile);

router.use(notAcceptable);

module.exports = router;