import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import { RootState } from '../../redux/reduxStore'
import { Articles, SaveNewArticle } from '../../types/Articles'
import Main from './Main'
import {getArticles,postArticle} from '../../redux/reducers/articlesReducer'
import { Redirect } from 'react-router-dom'

const ReaderContainer:FC<commonProps> = ({isAuth, role, login, articles, isAuthor, getArticles, postArticle, authorId}) => {

    useEffect(() => {
        getArticles()
    }, [])

    if(!isAuth) return <Redirect to='/login'/>

    return (    
        <div>
            <Main 
                articles = {articles} 
                role={role} 
                login={login}
                isAuthor={isAuthor}
                authorId={authorId}
                postArticle={postArticle}
            />
        </div>
    )
}

const mapStateToProps = (state:RootState):mapState => {
    return {
        role: state.auth.role,
        login: state.auth.login,
        articles: state.articles.articles,
        isAuthor: state.auth.isAuthor,
        authorId: state.auth.authorId,
        isAuth: state.auth.isAuth
    }
}

export default connect<mapState, mapDispath, {}, RootState>(mapStateToProps, {getArticles,postArticle})(ReaderContainer)

type mapState = {
    role: string
    login: string|null
    articles: Array<Articles>
    isAuthor: boolean,
    authorId: string | null
    isAuth: boolean
}
type mapDispath = {
    getArticles: () => void
    postArticle: (value:SaveNewArticle) => void
}

type commonProps = mapState&mapDispath