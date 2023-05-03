const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    prods: [],
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  });
};
  

exports.getSuccess = (req, res, next) => {
  res.render('success', {
    pageTitle: 'success',
    path: '/success',
    activeShop: true,
    activeAddProduct: true,
  });
};
  
exports.getcontactus = (req, res, next) => {
  res.render('contact', {
    pageTitle: 'contact',
    path: '/contact',
    activeShop: true,
    activeAddProduct: true,
  });
};
