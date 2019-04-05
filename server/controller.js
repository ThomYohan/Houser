let id = 1
let house = [
    {
        house_id: id++,
        name: 'wee',
        address: 'weee',
        city: 'wee',
        state: 'weee',
        zipcode: 10
    },
    {
        house_id: id++,
        name: 'yee',
        address: 'yeee',
        city: 'yee',
        state: 'yeee',
        zipcode: 11
    }
]

module.exports = {
    create: (req, res) => {
        const dbInstance = req.app.get('db')
        const { name, address, city, state, zipcode } = req.body

        dbInstance.createHouse([ name, address, city, state, zipcode ])
            .then( () => res.sendState(200))
            .catch( err => {
                res.status(500).send({error: 'error in the list/controller.js'})
            })
    },
    list: (req, res) => {
        const dbInstance = req.app.get('db')

        dbInstance.list()
            .then( house => res.status(200).send(house))
            .catch( err => {
                res.status(500).send({error: 'error in list/controller.js'})
            })
    },
    delete: (req, res) => {
        const dbInstance = req.app.get('db')
        const { id } = req.params

        dbInstance.deleteHouse(id)
            .then( () => res.sendStatus(200))
            .catch( err => {
                res.status(500).send({error: 'error in your delete/controller.js'})
            })
    }

}