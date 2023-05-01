const products = [];

exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.postAddProduct = (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
};

exports.getSuccess = (req, res, next) => {
  res.render('success', {
    prods: products,
    pageTitle: 'success',
    path: '/success',
    
    activeShop: true,
    activeAddProduct: true,
    productCSS: true
  });
};
  
  exports.getcontactus = (req, res, next) => {
    res.render('contact', {
      prods: products,
      pageTitle: 'contact',
      path: '/contact',
      
      activeShop: true,
      activeAddProduct: true,
      productCSS: true
    });
  };

