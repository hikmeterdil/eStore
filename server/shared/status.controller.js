const notAcceptable = (req, res)=>{
    res.status(406).json("Not acceptable.");
};

module.exports = {
    notAcceptable
}