const categoryDetail = require("../models/category.model");
const productDetail = require("../models/product.model");

// ----- Category -- 
exports.createCategory = async (req, res) => {
    try {
        console.log(req.body)
        const { categoryName ,categoryImage } = req.body;
        if (!categoryName || !categoryImage) {
            return res.status(403).json({
                success: false,
                message: "Please Provide All Fields !!"
            })
        }

        const existingCategory = await categoryDetail.findOne({ categoryName: categoryName });
        if (existingCategory) {
            return res.status(403).json({
                success: false,
                message: "Category Name Already Exists !!"
            });
        }

        const newCategory = new categoryDetail({
            categoryName,
            categoryImage
        })
        await newCategory.save();
        res.status(200).json({
            success: true,
            data: newCategory,
            message: "Category Created Successfully !!"
        })
    } catch (error) {
        console.log("Error : ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}
exports.getAllCategory = async (req, res) => {
    try {
        const getAllCate = await categoryDetail.find();
        if (getAllCate.length === 0) {
            return res.status(403).json({
                success: false,
                msg: "Product Not Found"
            })
        }
        res.status(200).json({
            success: true,
            data: getAllCate,
            msg: "All Categories Found"
        })

    } catch (error) {
        console.log("Error : ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}
exports.deleteCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const checkCate = await categoryDetail.deleteOne({ _id: id })
        if (!checkCate) {
            return res.status(403).json({
                success: false,
                msg: "category Not Found"
            })
        }
        res.status(200).json({
            success: true,
            msg: "Category Deleted Succesfully !!"
        })
    } catch (error) {
        console.log("Error : ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}
exports.updateCategory = async (req, res) => {
    try {
        const categoryId = req.params.id;
        const updates = req.body;

        // Check if there are no fields to update
        if (Object.keys(updates).length === 0) {
            return res.status(400).json({
                success: false,
                msg: "No fields to update."
            });
        }

        const options = { new: true }; // Return the modified document
        const updatedCategory = await categoryDetail.findByIdAndUpdate(categoryId, updates, options);
        if (!updatedCategory) {
            return res.status(404).json({
                success: false,
                msg: "categoryDetail not found."
            });
        }

        res.status(200).json({
            success: true,
            msg: "Category updated successfully.",
            data: updatedCategory
        });
    } catch (error) {
        console.log("Error : ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

// --------- Product --- 
exports.createProduct = async (req,res)=>{
    try {
        // console.log(req.body)
        const {categoryName , productName , productDesc , productImage, sizes, material, application} = req.body;
        if( !categoryName || !productName || !productImage){
            return res.status(403).json({
                success:false,
                message:"Please Provide All Fields !!"
            })
        }
        const existingProduct = await productDetail.findOne({ productName: productName });
        if (existingProduct) {
            return res.status(403).json({
                success: false,
                message: "Product Name Already Exists !!"
            });
        }
    
        const newProduct = new productDetail({
            categoryName , productName , productDesc , productImage, sizes, material, application
        })
        await newProduct.save();
        res.status(200).json({
            success:true,
            data:newProduct,
            message:"Product Created Successfully !!"
        })
    } catch (error) {
        console.log("Error : ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}
exports.getAllProduct = async (req,res)=>{
    try {
        const getAllProduct = await productDetail.find();
        if(getAllProduct.length === 0){
            return res.status(403).json({
                success: false,
                msg: "Product Not Found"
            })
        }
        res.status(200).json({
            success: true,
            data: getAllProduct,
            msg: "All Product Found"
        })

    } catch (error) {
        console.log("Error : ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}
exports.deleteProduct = async (req,res)=>{
    try {
        const id = req.params.id;
        const checkProduct = await productDetail.deleteOne({_id:id})
        if(!checkProduct){
            return res.status(403).json({
                success: false,
                msg: "Product Not Found"
            })
        }
        res.status(200).json({
            success:true,
            msg:"Product Deleted Succesfully !!"
        })
    } catch (error) {
        console.log("Error : ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}
exports.updateProduct = async (req,res)=>{
    try {
        const productId = req.params.id;
        const updates = req.body;

        // Check if there are no fields to update
        if (Object.keys(updates).length === 0) {
            return res.status(400).json({
                success: false,
                msg: "No fields to update."
            });
        }

        const options = { new: true }; // Return the modified document
        const updatedProduct = await productDetail.findByIdAndUpdate(productId, updates, options);
        if (!updatedProduct) {
            return res.status(404).json({
                success: false,
                msg: "productDetail not found."
            });
        }

        res.status(200).json({
            success: true,
            msg: "Product updated successfully.",
            data: updatedProduct
        });
    } catch (error) {
        console.log("Error : ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

// --------- Contact Us --- 





