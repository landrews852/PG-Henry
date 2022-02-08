const { Router } = require('express');
const { Products } = require('../db');


const router = Router();


router.get('/products', async (req, res ) => {
    try {
        const findAll = await Products.findAll({
            attributes: {
                exclude: ["createdAt", "updatedAt"],
              },
        });
        findAll.length > 0 ? res.status(200).json(findAll) : res.send('No se encontro ningun producto.');
    } catch (error) {
        console.log(error)
        res.json('Error en el Catch.')
    }
});




router.get('/products/:id', async (req, res) => {
    try {
        const {id} = req.params
        const searchId = await Products.findByPk(id,{
            attributes:{
                exclude:['createdAt', 'updatedAt']
            }
        });
        searchId ? res.status(200).json(searchId) : res.send('¡No se encontro el Producto por ID!');
    } catch (error) {
        console.log('Error: ',error);
        res.json('Error en el Catch.');
    }
});



module.exports = router;