import { exec } from 'child_process'
import { readFile } from 'fs/promises'
import pgClient from './db'
import { formatCsv } from './utils/formatCsv'
const seedDb = async () => {
    const catAndFlavorTuple = await readFile('./src/db/flavors.csv').then(
        (r) => {
            return formatCsv(r.toString())
        }
    )
    console.log(catAndFlavorTuple)
    /* const categories: {
        [key: string]: number
    } = {}
    await Promise.all(
        catAndFlavorTuple.map(async ([category]) => {
            if (!categories[category]) {
                categories[category] = 1
                return await pgClient.query(
                    `
                INSERT INTO flavor_category(name)
                VALUES($1)
            `,
                    [category]
                )
            }
        })
    )
    await Promise.all(
        catAndFlavorTuple.map(async ([category, flavor]) => {
            if (!category) {
                return
            }
            const catId = (
                await pgClient.query(
                    `
                SELECT id FROM flavor_category
                WHERE name=$1
                `,
                    [category]
                )
            ).rows[0].id
            await pgClient.query(
                `
                INSERT INTO flavor(name, flavor_category)
                VALUES($1, $2)
                `,
                [flavor, catId]
            )
        })
    ) */
}

seedDb()
