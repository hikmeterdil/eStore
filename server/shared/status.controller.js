const notAcceptable = (req, res)=>{
    res.status(406).json({message: "Not acceptable."});
};

const notFound = (req, res)=>{
    res.status(404).json({message: "Not found."});
};

module.exports = {
    notAcceptable,
    notFound
}