const getFiles = (req, res)=>{
    res.send("GetFiles");
};
const getFile = (req, res)=>{
    res.send("GetFile");
};
const uploadSingle = (req, res)=>{
    res.json({files: [req.file.filename]});
};
const uploadMultiple = (req, res)=>{
    res.json({files:req.files.map(file=>file.filename)});
};
const deleteFile = (req, res)=>{
    res.send("Delete File");
};

module.exports = {
    getFiles, getFile, uploadSingle, uploadMultiple, deleteFile
}