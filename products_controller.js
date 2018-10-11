module.exports = {
    create: (req, res)=>{
        const dbInstance = req.app.get('db');
        const {name, description, price, image_url} = req.body;

        dbInstance.create_product([name, description, price, image_url])
        .then( ()=> res.sendStatus(200))
        .catch( error =>{
            res.status(500).send({errorMessage: "Oops something went wrong!!!"})
            console.log('Error creating product', error);
        })
    },
    getOne: ( req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.read_product(req.params.id).then( (product) => res.sendStatus(200).send(product))
        .catch( error =>{
            res.status(500).send({errorMessage: "Oops something went wrong!!!"})
            console.log('Error getting one product', error);
        })
      },
    getAll: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        dbInstance.read_products().then( (products) => res.sendStatus(200).send(products))
        .catch( error =>{
            res.status(500).send({errorMessage: "Oops something went wrong!!!"})
            console.log('Error getting one product', error);
        })
      },
    update: ( req, res, next ) => {
        const dbInstance = req.app.get('db');

        dbInstance.update_product([req.params.id, req.query.description]).then( () => res.sendStatus(200))
        .catch( error =>{
            res.status(500).send({errorMessage: "Oops something went wrong!!!"})
            console.log('Error getting one product', error);
        })
      },
    delete:( req, res, next ) => {
        const dbInstance = req.app.get('db');
        dbInstance.delete_product(req.params.id).then( () => res.sendStatus(200))
        .catch( error =>{
            res.status(500).send({errorMessage: "Oops something went wrong!!!"})
            console.log('Error getting one product', error);
        })
      }
}