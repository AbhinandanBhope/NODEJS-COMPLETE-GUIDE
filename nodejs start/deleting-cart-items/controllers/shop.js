const Product = require('../models/product');
const Cart = require('../models/cart');
const { redirect } = require('statuses');

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId).then(([product]) => {
    res.render('shop/product-detail', {
      product: product[0],
      pageTitle: product.title ,
      path: '/products'
    });
  
    
  }).catch(err =>
    console.log(err));
  };
  
  
exports.getD = (req, res, next) => {
  const prodId = req.params.productId;
  Product.deleteById(prodId).then(() => {
    res.render('admin/new', {
      pageTitle: 'delete',
      
      
      path: '/products'
    });
  
    
  }).catch(err =>
    console.log(err));
  };
  
 
 
    
  
   
    
  
    
    


exports.getIndex = (req, res, next) => {
  Product.fetchAll().then(([rows ,fieldData]) => {
    res.render('shop/index', {
      prods: rows,
      pageTitle: 'Shop',
      path: '/'
    });
      
    
  }).catch(err => 
    console.log(err) ); 

  
 
  
};


exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect('/cart');
};

exports.postCartDeleteProduct = (req, res, next) => {
  
  

  
  
      
  
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};


 