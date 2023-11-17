const Images = require('./models');

const generateUrlImages = async (req) => {
    const result = `uploads/${req.file.filename}`

    return result;
};
const createImages = async (req) => {
    const result = await Images.create({
        name: req.file
        ? `uploads/${req.file.filename}`
        : '../../../../uploads/avatar/default.jpeg',
    });

    return result;
};

module.exports = { createImages, generateUrlImages };
