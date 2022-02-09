const {Products, Login, User} = require('../db');

const { Router } = require("express");
const router = Router();

router.get('/products', async (req, res ) => {
    try {
        const findAll = await Products.findAll({
            attributes: {
                exclude: ["createdAt", "updatedAt"],
              },
        });
        findAll.length > 0 ? res.status(200).json(findAll) : res.send('No se encontro ninguna receta.');
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

router.post('/create', async(req,res) => {
    try {
        const {name, description, img, time, category, size_S, size_M, size_L } = req.body;
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

router.post('/Login', async(req,res) => {
    try {
        const {name, lastName, email, password } = req.body;
        const createLogin = await Login.create({
            name,
            lastName,
            email,
            password,
        });
        res.status(200).json(createLogin);
    } catch (error) {
        console.log(error);
        res.json('Error en el Catch.')
    }
});

router.post('/User', async(req,res) => {
    try {
        const {name, last_name, email, birthday, password } = req.body;
        const createUser = await User.create({
            name,
            last_name,
            email,
            birthday,
            password,
        });
        res.status(200).json(createUser);
    } catch (error) {
        console.log(error);
        res.json('Error en el Catch.')
    }
});

module.exports = router;