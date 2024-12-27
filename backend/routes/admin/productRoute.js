const express = require('express');

const {addProduct, handleImageUpload, fetchAll, editProduct, deleteProduct} = require('../../controller/admin/product-controller');
const {upload} = require( '../../helper/cloudinary');

const router = express.Router();

// In your router:
router.post('/upload-image', upload.single('my-file'), handleImageUpload);
router.post('/add' , addProduct);
router.put('/edit/:id' , editProduct);
router.delete('/delete/:id', deleteProduct); // Note the ":id" part
router.get('/get', fetchAll)

module.exports = router;