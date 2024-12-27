const {imageUploadUtil}  = require('../../helper/cloudinary');
const Product = require('../../models/Product');

const handleImageUpload = async(req,res) =>{
    try {
        const b64 = Buffer.from(req.file.buffer).toString("base64");
        const url = "data:" + req.file.mimetype + ";base64," + b64;
        const result = await imageUploadUtil(url);

        res.json({
            success: true,
            result
        })
    } catch (error) {
        console.log(error);
        res.json({
          success: false,
          message: "Error occurred",
        });
    }
}


const addProduct = async(req,res) =>{
    try {
        const {
            image,
            title,
            description,
            category,
            brand,
            price,
            salePrice,
            totalStock,
            averageReview,
        } = req.body;

        const newProduct = new Product({
            image,
            title,
            description,
            category,
            brand,
            price,
            salePrice,
            totalStock,
            averageReview,
        });

        await newProduct.save();

        res.status(200).json({
            success: true,
            data : newProduct
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error occurred",
          });
    }
}

const fetchAll = async(req,res) =>{
    try { 
        const listOfProduct = await Product.find({});

        res.status(200).json({
            success: true,
            listOfProduct
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error occurred",
          });
    }
}

const editProduct = async(req,res) =>{
    try {
        const id = req.params.id;
        const {
            image,
            title,
            description,
            category,
            brand,
            price,
            salePrice,
            totalStock,
            averageReview,
          } = req.body;


        const productToEdit = await Product.findById(id);
        if (!productToEdit)
            return res.status(404).json({
              success: false,
              message: "Product not found",
            });

            productToEdit.title = title || productToEdit.title ;
            productToEdit.description = description || productToEdit.description;
            productToEdit.category = category || productToEdit.category;
            productToEdit.price = price || productToEdit.price;
            productToEdit.image = image || productToEdit.image;
            productToEdit.brand = brand || productToEdit.brand;
            productToEdit.salePrice = salePrice || productToEdit.salePrice;
            productToEdit.totalStock = totalStock || productToEdit.totalStock;
            productToEdit.averageReview = averageReview || productToEdit.averageReview;

            await productToEdit.save();

            res.status(200).json({
                success: true,
                data: productToEdit,
              });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error occurred",
          });
    }
}

const deleteProduct = async(req,res) =>{
    try {
        const id = req.params.id;

        const ProductToDelete = await Product.findByIdAndDelete(id);
        if(!ProductToDelete){
            return res.status(404).json({
                success: false,
                message: "Product not found",
        });
    }
        res.status(200).json({
            success: true,
      message: "Product delete successfully",
        })
        
    } catch (e) {
        console.log(e);
        res.status(500).json({
          success: false,
          message: "Error occurred",
        });
    }
}

module.exports = {handleImageUpload, addProduct ,fetchAll , editProduct ,deleteProduct};