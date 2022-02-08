//const express = require('express');
const { Router } = require('express');
const { Products } = require('../db');
//const uploads = require('./uploads/libs/uploads.js');
//const multer = require('multer');
//const sharp = require('sharp');
const controller = require('../controller/upload')


const router = Router();  



router.post('/create', controller.upload, controller.uploadFile, async (req, res) => { // img es como lo tenemos en la db


    try {
        const { name, description, img, time, category, size_S, size_M, size_L } = req.body;   


        const createProduct = await Products.create({
            name,
            description,
            img,
            time,
            category,
            size_S,
            size_M,
            size_L
        }); 


        res.status(200).json(createProduct);

    } catch (error) {
        console.log(error);
        res.json('Error en el Catch.')
    }
});


module.exports = router;