const multer = require('multer');


const storage = multer.diskStorage({

    destination: ( req, file, cb ) => { // el cb es x si vamos a retornar un error -> null -> no retornamos error
        cb( null, 'uploads' ) // le indico el directorio donde quiero guardar las img
    },

    filename: ( req, file, cb ) => { // genero un nuevo nombre al archivo
        const ext = file.originalname.split('.').pop() // del nombre original solo tomo lo q hay despúes del punto
        cb( null, `${Date.now()}-${file.originalname}` ) // Date.now() es la fecha en UNIX -> varios números .extensión
        // hacemos ésto para q nuestras img no se pisen -> todas van a ser únicas
    }
})

const upload = multer({ storage }) 

exports.upload = upload.single('img')

exports.uploadFile = (req, res) => {
    res.send({ data: "Enviar Archivo" })
}