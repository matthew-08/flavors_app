import { Request, Response } from 'express'
import { getAllCategoriesService } from '../service/category.service'

const getCategoriesHandler = async (req: Request, res: Response) => {
    const categories = await getAllCategoriesService()
    return res.status(200).send(categories)
}

const getCategoryFlavorsHandler = (req: Request, res: Response) => {}

export { getCategoriesHandler, getCategoryFlavorsHandler }
