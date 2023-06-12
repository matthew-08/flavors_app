import { Express } from 'express'
import {
    getCategoriesHandler,
    getCategoryFlavorsHandler,
} from '../controllers/categories.controller'
import { getFlavorHandler } from '../controllers/flavors.controller'
import { postQuoteHandler } from '../controllers/quote.controller'
const routes = (app: Express) => {
    app.get('/api/categories', getCategoriesHandler)

    app.get('/api/categories/:id/flavors', getCategoryFlavorsHandler)

    app.get('/api/categories/:catId/flavors/:flavorId', getFlavorHandler)

    app.post('/api/quotes', postQuoteHandler)
}
