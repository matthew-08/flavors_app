import { Pool } from 'pg'
import appEnv from '../utils/env'
import env from '../utils/env'

const pgClient = new Pool({
    database: appEnv.pgDatabase,
    user: appEnv.pgUser,
    password: appEnv.pgPassword,
    host: appEnv.pgHost,
})

export default pgClient
