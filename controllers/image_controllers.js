

exports.postImage = (req, res) => {

    console.log('image successfully uploaded')
    res.send(req.body)
    console.log(req.body)
};

exports.getAllImages = (req, res) => {
    res.send('')
}