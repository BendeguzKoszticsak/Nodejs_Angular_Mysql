module.exports = app => {
    const asd = require("../controllers/controller.js");
  
    var router = require("express").Router();
  

     
    router.post("/user", asd.createUser);

    router.post("/book", asd.createBook);

    router.delete("/book/:id", asd.deleteBook);

    router.delete("/user/:id", asd.deleteUser);

    router.put("/book/:id", asd.updateBook);

    router.put("/user/:id", asd.updateUser);
    
    router.get("/book/condition/:id", asd.findBookById);

    router.get("/user/condition/:id", asd.findUserById);

    

    
  

  
    app.use('/', router);
  };