import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import { RootState } from '../../redux/reduxStore'
import { Articles, SaveNewArticle } from '../../types/Articles'
import Main from './Main'
import {getArticles,postArticle} from '../../redux/reducers/articlesReducer'

const ReaderContainer:FC<commonProps> = ({role, login, articles, isEditor, isAuthor, isReader, getArticles, postArticle, authorId}) => {

    useEffect(() => {
        getArticles()
    }, [])

    return (    
        <div>
            <Main 
                articles = {articles} 
                role={role} 
                login={login}
                isEditor={isEditor}
                isAuthor={isAuthor}
                isReader={isReader}
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
        isReader: state.auth.isReader,
        isEditor: state.auth.isEditor,
        authorId: state.auth.authorId
    }
}

export default connect<mapState, mapDispath, {}, RootState>(mapStateToProps, {getArticles,postArticle})(ReaderContainer)

type mapState = {
    role: string
    login: string|null
    articles: Array<Articles>
    isAuthor: boolean,
    isReader: boolean,
    isEditor: boolean,
    authorId: string | null
}
type mapDispath = {
    getArticles: () => void
    postArticle: (value:SaveNewArticle) => void
}

type commonProps = mapState&mapDispath