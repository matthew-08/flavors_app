import pgClient from '../db/db'

const insertCategoryService = async (categoryName: string) => {
    return await pgClient.query(
        `
        INSERT INTO flavor_category(name)
        VALUES($1)
        `,
        [categoryName]
    )
}

const getCategoryIdService = async (categoryName: string) => {
    return (
        await pgClient.query(
            `
        SELECT id FROM flavor_category
        WHERE name=$1
        `,
            [categoryName]
        )
    ).rows[0].id as string
}

const getAllCategoriesService = async () => {
    return (
        await pgClient.query(
            `
        SELECT * from flavor_category
        `
        )
    ).rows
}

export { getAllCategoriesService }

export { insertCategoryService, getCategoryIdService }
