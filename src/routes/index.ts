import { Express } from 'express'
const routes = (app: Express) => {
    app.get('/api/categories')

    app.get('/api/categories/:id')

    app.get('/api/categories/:id/flavors')

    app.get('/api/categories/:catId/flavors/:flavorId')
}
