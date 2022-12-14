const router = require('express').Router();
const multer = require('multer')
const upload = multer({dest: 'uploads'}) 
const fs     = require('fs')
const path   = require('path')

// html from another local file
router.get('/', (req ,res)=>{
    res.sendFile('./html/home.html',{
        root: __dirname
    })
})

router.get('/jumpscare', (req ,res)=>{
    res.sendFile('./html/kucing.html',{
        root: __dirname
    })
})

router.get('/product', (req ,res)=>{
    res.sendFile('./html/product.html',{
        root: __dirname
    })
})
// query json
router.get('/about', (req ,res)=>{
    const {minat} = req.query    
    res.send(    
    {
       nama:'Abdurrahman',
        minat,
        halamanlain : '/about atau /' 
    })
})
 

// param json
router.get('/product/:id/:jenis', (req ,res)=>{
    const {id,jenis} = req.params
    res.send({
        id,
        jenis
    })
})

router.post('/product/',upload.single('image'), (req ,res)=>{    
    const {name,price,stock,status} = req.body
    const image = req.file 
    if (image) {
        const target = path.join(__dirname, 'uploads', image.originalname)
        fs.renameSync(image.path, target)

        // res.json({
        //     name,
        //     price,
        //     stock,
        //     status,
        //     image
        // })
        res.sendFile(target)
    }
})

module.exports = router;