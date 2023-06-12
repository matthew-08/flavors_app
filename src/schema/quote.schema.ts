import { z } from 'zod'

const QuoteSchema = z.object({
    name: z.string(),
    email: z.string(),
    capability: z.string(),
    comments: z.string(),
    newsletter: z.boolean(),
})

export default QuoteSchema
