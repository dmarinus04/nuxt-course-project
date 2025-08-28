export default defineEventHandler(async (event) => {
    try {
        return $fetch<Object>(
            `${process.env.API_BASE_URL_PUBLIC}/api/posts`
        )
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to fetch posts.',
        })
    }
})