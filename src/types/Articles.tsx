import { Autor } from "./Autor";
import { CommentsType } from "./Comments";

export type Articles = {
    id: number|string
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

export type ArticleEdit = {
    title: string
    descr: string
    id: string|number
}