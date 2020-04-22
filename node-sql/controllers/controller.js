const db1 = require("/home/goofy/node-sql/models");
const User = db1.users;
const Book = db1.books;
const db = require("/home/goofy/node-sql/models");
const controller = require("/home/goofy/node-sql/controllers/controller");


exports.createUser = (req, res) => {
    const help = ({
      F_name: req.body.F_name,
      L_name: req.body.L_name,
      text: req.body.text,
      Age: req.body.Age,
      rented: req.body.rented
    })
    User.create(help)
    .then(data => {
      res.send(data);
    })
  };


exports.createBook = (req, res) => {
  const help = ({
    isbn: req.body.isbn,
    title: req.body.title,
    authors: req.body.authors,
    published: req.body.published,
    description: req.body.description,
    coverImage: req.body.coverImage
  })
  Book.create(help)
  .then(data => {
    res.send(data);
  })
};

exports.updateBook = (req, res) => {
  const id = req.params.id;

  Book.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: `Book updated with id=${id} .`
        });
      } else {
        res.send({
          message: `Cannot update Book with id=${id}. `
        });
      }
    })
  }

exports.updateUser = (req, res) => {
  const id = req.params.id;

  User.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: `User updated with id=${id} .`
        });
      } else {
        res.send({
          message: `Cannot update User with id=${id}. `
        });
      }
    })
  }

exports.findAllBook = (req, res) => {

  Book.findAll()
    .then(data => {
      res.send(data);
    })
}

exports.deleteBook = (req, res) => {
  const id = req.params.id;

  Book.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Book deleted"
        });
      } else {
        res.send({
          message: `Cannot delete Book with id=${id}. `
        });
      }
    })
  };

exports.deleteUser = (req, res) => {
  const id = req.params.id;

  User.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User deleted"
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. `
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with id=" + id
      });
  });
  };


exports.findUserById = (req, res) => {
  const id = req.params.id;

  User.findByPk(id)
  .then(data => {
      res.send(data);
    })
    
};


exports.findBookById = (req, res) => {
  const id = req.params.id;

  Book.findByPk(id)
  .then(data => {
      res.send(data);
    })
    
};









