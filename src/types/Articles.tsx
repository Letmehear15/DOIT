import { Autor } from "./Autor";
import { CommentsType } from "./Comments";

export type Articles = {
    id: number
    name: string
    descr: string
    comments: Array<CommentsType>
    autor: Autor
}