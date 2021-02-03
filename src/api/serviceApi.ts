import axios from 'axios';
import { STAGEMAP } from '../Helps/StageMap';
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
        return axios.post(baseURL+'/signup ', {login, password, role}).then(res => res.data)
    }
}

export const articlesAPI = {
    getArticles() {
        return axios.get<API<Articles>>(`${baseURL}/articles`).then(res=>res.data)
    },
    postArticle({autor, descr, title, document,category}:SaveNewArticle) {
        const formData = new FormData();
        if(document) {
            formData.append('document', document)
        }
        if(autor) {
            formData.append("autor", autor);
        }
        formData.append("descr", descr);
        formData.append("title", title);
        formData.append("category", category);
        return axios.post(`${baseURL}/articles/new`, formData, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
    },
    getFullArticle(id='') {
        return axios.get(`${baseURL}/article/${id}`).then(res=>res.data)
    },
    deleteArticle(id:string) {
        return axios.delete(`${baseURL}/article/${id}`)
    },
    postComment(id: string|number, autor:string|null, text:string) {
        return axios.post(`${baseURL}/article/${id}/comment/new`, {id, text, autor}).then(res=>res.data)
    },
    editArticle({title, descr, id}:ArticleEdit) {
        return axios.post(`${baseURL}/article/${id}/update`, {title, descr}).then(res=>res.data)
    },
    editStage(stage:STAGEMAP, id: string | number) {
        return axios.put(`${baseURL}/article/${id}/stage/${stage}`)
    },
    getReview(id:string) {
        return axios.get(`${baseURL}/review/${id}`).then(res => res.data)
    },
    postNewReview(articleId:string, userId:string, review:string) {
        return axios.post(`${baseURL}/review/new`, {article: articleId, reviewer: userId, review})
    },
    editReview(id:string, text: string) {
        return axios.put(`${baseURL}/review/${id}/review`, {review: text})
    },
    sendArticle(idArticle:string, idReviewer:string) {
        return axios.post(`${baseURL}/review/new`,{article: idArticle, reviewer:idReviewer})
    }
}

export const usersAPI = {
    getUsers() {
        return axios.get(`${baseURL}/users`).then(res=>res.data)
    },
    deleteUser(id:string) {
        return axios.delete(`${baseURL}/user/${id}`)
    },
    changeRole(id:string, role:string) {
        return axios.put(`${baseURL}/user/${id}`, {role})
    },
    getRegister({login, password, role, name='', lastname=''}:Register) {
        return axios.post(baseURL+'/signup ', {login, password, role, name, lastname})
    }
}

export const journalAPI = {
    getJournals() {
        return axios.get(`${baseURL}/journals`).then(res => res.data)
    },
    newJournal(name:string,document:File) {
        const formData = new FormData()
        formData.append('document', document)
        formData.append('name', name)
        return axios.post(`${baseURL}/journal/new`, formData, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
    },
    deleteJournal(id: string) {
        return axios.delete(`${baseURL}/journal/${id}`)
    }
}

