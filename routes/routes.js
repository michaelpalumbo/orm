const router = require('express').Router();
const { Category, Product, ProductTag, Tag } = require('../models');

// GET /api/categories
router.get('/api/categories', (req, res) => {
    // Access our User model and run .findAll() method)
    Category.findAll()
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
    });
});

// POST /api/product
router.post('/api/category', (req, res) => {
    Category.create({
      category_name: req.body.category_name
    })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// PUT /api/category/update
router.put('/api/category/update/:id', (req, res) => {
    // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
    Category.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(dbUserData => {
        if (!dbUserData[0]) {
          res.status(404).json({ message: 'No category found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// DELETE /api/category/delete/:id
router.delete('/api/category/delete/:id', (req, res) => {
    Category.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No category found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
// //////////
// 
  
// //////////
// 
// 

// PRODUCTS
// GET /api/products
router.get('/api/products', (req, res) => {
    // Access our User model and run .findAll() method)
    Product.findAll()
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
    });
});

// POST /api/product
router.post('/api/product', (req, res) => {
    Product.create({
      product_name: req.body.product_name,
      price: req.body.price,
      stock: req.body.stock
    })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// PUT /api/product/update
router.put('/api/product/update/:id', (req, res) => {
    // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
    Product.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(dbUserData => {
        if (!dbUserData[0]) {
          res.status(404).json({ message: 'No product found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// DELETE /api/product/delete/:id
router.delete('/api/product/delete/:id', (req, res) => {
    Product.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No product found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
// //////////
// 
// 
// 
// GET /api/tags
router.get('/api/tags', (req, res) => {
    // Access our User model and run .findAll() method)
    ProductTag.findAll()
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
    });
});

// POST /api/tag
router.post('/api/tag', (req, res) => {
    ProductTag.create({
      tag_name: req.body.tag_name
    })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// PUT /api/category/update
router.put('/api/tag/update/:id', (req, res) => {
    // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
    ProductTag.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(dbUserData => {
        if (!dbUserData[0]) {
          res.status(404).json({ message: 'No tag found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// DELETE /api/category/delete/:id
router.delete('/api/tag/delete/:id', (req, res) => {
    ProductTag.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No tag found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  


// // GET /api/users/1
// router.get('/:id', (req, res) => {});

// // POST /api/users
// router.post('/', (req, res) => {});

// // PUT /api/users/1
// router.put('/:id', (req, res) => {});

// // DELETE /api/users/1
// router.delete('/:id', (req, res) => {});

module.exports = router;