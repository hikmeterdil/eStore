const getFiles = (req, res)=>{
    res.send("GetFiles");
};
const getFile = (req, res)=>{
    res.send("GetFile");
};
const uploadSingle = (req, res)=>{
    res.send("UploadSingleFile");
};
const uploadMultiple = (req, res)=>{
    res.send("Upload Mltiple Files");
};
const deleteFile = (req, res)=>{
    res.send("Delete File");
};

module.exports = {
    getFiles, getFile, uploadSingle, uploadMultiple, deleteFile
}