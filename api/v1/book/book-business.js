const repository = require("./book-repository");

const create = async (book) => {
    return repository.save(book);
};

const list = async (filter) => {
    return repository.findAll(filter);
};

const deleteById = async (id) => {
    return repository.deleteById(id);
};

const findById = async (id) => {
    return repository.findById(id);
};

module.exports = {
    create,
    list,
    deleteById,
    findById,
}