import axios from 'axios';
import { Articles, SaveNewArticle } from '../types/Articles';
import { Auth, Register } from '../types/Auth';

const baseURL = 'http://195.113.207.163/~reshetov/DOIT'

type API<T> = {
    articles: Array<T>
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
        return axios.delete(`${baseURL}/articles`,{headers: {id}})
    }
}


