export default interface Post {
    id: string
    title: string
    body: string
    created_at: string
    updated_at: string
    user_id: string
    user: {
        id: string
        name: string
    }
}