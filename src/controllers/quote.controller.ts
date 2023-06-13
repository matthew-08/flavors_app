import { Request, Response } from 'express'
import { PostQuoteInput } from '../schema/quote.schema'

const postQuoteHandler = (
    req: Request<{}, {}, PostQuoteInput>,
    res: Response
) => {
    const postQuoteInput = req.body
}

export { postQuoteHandler }
