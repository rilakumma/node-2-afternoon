module.exports = {
    create: (req, res)=>{
        const dbInstance = req.app.get('db');
        const {name, description, price, image_url} = req.body;

        dbInstance.create_product({name, description, price, image_url})
        .then( (product)=> res.status(200).json(product))
        .catch( error =>{
            res.status(500).send({errorMessage: "Oops something went wrong!!!"})
            console.log('Error creating product', error);
        })
    },
    getOne: ( req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.read_product({product_id: req.params.id}).then( (product) => res.status(200).json(product))
        .catch( error =>{
            res.status(500).send({errorMessage: "Oops something went wrong!!!"})
            console.log('Error getting one product', error);
        })
      },
    getAll: ( req, res) => {
        const dbInstance = req.app.get('db');
        
        dbInstance.read_products().then( (products) => res.status(200).json(products))
        .catch( error =>{
            res.status(500).send({errorMessage: "Oops something went wrong!!!"})
            console.log('Error getting one product', error);
        })
      },
    update: ( req, res) => {
        const dbInstance = req.app.get('db');
        
        dbInstance.update_product({product_id: req.params.id, description:req.query.desc}).then( () => res.status(200))
        .catch( error =>{
            res.status(500).send({errorMessage: "Oops something went wrong!!!"})
            console.log('Error getting one product', error);
        })
      },
    delete:( req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.delete_product({product_id: req.params.id}).then( () => res.status(200))
        .catch( error =>{
            res.status(500).send({errorMessage: "Oops something went wrong!!!"})
            console.log('Error getting one product', error);
        })
      }
}