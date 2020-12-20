import axios from 'axios';
import { ArticleEdit, Articles, SaveNewArticle } from '../types/Articles';
import { Auth, Register } from '../types/Auth';
import { CommentsType } from '../types/Comments';

const baseURL = 'http://backend.doit.kamisuel.cyou'

type API<T> = {
    articles: Array<T>
    comment: Array<CommentsType>
}

export const getUserAuth = {
    getAuth({login, password}: Auth) {
        return axios.post(`${baseURL}/logon`, {login, password}).then(res=>res.data)
    },
    getRegister({login, password, role}:Register) {
        return axios.post(baseURL+'/signup ', {login, password, role})
    }
}

export const articlesAPI = {
    getArticles() {
        return axios.get<API<Articles>>(`${baseURL}/articles`).then(res=>res.data)
    },
    postArticle({authorId, descr, title}:SaveNewArticle) {
        return axios.post(`${baseURL}/articles/new`, {autor:authorId, title, descr })
    },
    getFullArticle(id='') {
        return axios.get(`${baseURL}/article/${id}`).then(res=>res.data)
    },
    deleteArticle(id:string) {
        return axios.post(`${baseURL}/articles`, {id})
    },
    postComment(id: string|number, autor:string|null, text:string) {
        return axios.post(`${baseURL}/article/${id}/comment/new`, {id, text, autor}).then(res=>res.data)
    },
    editArticle({title, descr, id}:ArticleEdit) {
        return axios.post(`${baseURL}/article/${id}/update`, {title, descr}).then(res=>res.data)
    }
}


