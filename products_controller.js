module.exports = {
    create: (req, res) => {
        const dbInstance = req.app.get('db')
        const { name, description, price, image_url } = req.body

        dbInstance.create_product([name, description, price, image_url])
            .then ( () => res.sendStatus(200))
            .catch( err => {
                res.status(500).send({errorMessage: 'Oops! Something went wrong. Our engineers have been informed!'})
                console.log(err)
            })
    },

    getOne: (req, res) => {
        const dbInstance = req.app.get('db')

        dbInstance.read_product(req.params.id)
            .then( dbRes => res.status(200).send(dbRes))
            .catch( err => {
                res.status(500).send({errorMessage: 'Oops! Something went wrong. Our engineers have been informed!'})
                console.log(err)
            })
    },

    getAll: (req, res) => {
        const dbInstance = req.app.get('db')

        dbInstance.read_products()
            .then( dbRes => res.status(200).send(dbRes))
            .catch( err => {
                res.status(500).send({errorMessage: 'Oops! Something went wrong. Our engineers have been informed!'})
                console.log(err)
            })
    },

    update: (req, res) => {
        const dbInstance = req.app.get('db')

        dbInstance.update_product([req.params.id, req.query.desc])
            .then( () => res.sendStatus(200))
            .catch( err => {
                res.status(500).send({errorMessage: 'Oops! Something went wrong. Our engineers have been informed!'})
                console.log(err)
            })
    },

    delete: (req, res) => {
        const dbInstance = req.app.get('db')

        dbInstance.delete_product(req.params.id)
            .then( () => res.sendStatus(200))
            .catch( err => {
                res.status(500).send({errorMessage: 'Oops! Something went wrong. Our engineers have been informed!'})
                console.log(err)
            })
    }
}