const express = require('express');

const router = express.Router();

const {getFiles, getFile, uploadSingle, uploadMultiple, deleteFile} = require("./file.controller");
const {notAcceptable} = require("../../shared/status.controller");
const fileUpload = require('../../middlewares/file-upload');

router.get("/", getFiles);
router.get("/:fileID", getFile);
router.post("/", fileUpload.single('file'), uploadSingle);
router.post("/multi", fileUpload.array('file', 10), uploadMultiple);
router.delete("/:fileID", deleteFile);

router.use(notAcceptable);

module.exports = router;