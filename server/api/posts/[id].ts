export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')

    try {
        return $fetch<Object>(
            `${process.env.API_BASE_URL_PUBLIC}/api/posts/${id}`
        )
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to fetch post.',
        })
    }
})