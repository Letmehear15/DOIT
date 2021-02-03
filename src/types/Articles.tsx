import { STAGEMAP } from "../Helps/StageMap";
import { Autor } from "./Autor";
import { CommentsType } from "./Comments";

export type Articles = {
    id: number|string
    title: string
    descr: string
    comments: Array<CommentsType>
    author: Autor
    stage:  STAGEMAP,
    category?: string,
    review?: any
}

export type SaveNewArticle = {
    autor?: string | null
    title: string
    descr: string
    document?: File
    category: string
}

export type ArticleEdit = {
    title: string
    descr: string
    id: string|number
}