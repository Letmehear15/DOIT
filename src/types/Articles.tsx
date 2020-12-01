import { Autor } from "./Autor";
import { CommentsType } from "./Comments";

export type Articles = {
    id: number
    title: string
    descr: string
    comments: Array<CommentsType>
    author: Autor
}

export type SaveNewArticle = {
    authorId?: string | null
    title: string
    descr: string
}