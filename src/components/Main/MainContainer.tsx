import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import { RootState } from '../../redux/reduxStore'
import { Articles } from '../../types/Articles'
import Main from './Main'
import {getArticles} from '../../redux/reducers/articlesReducer'

const ReaderContainer:FC<commonProps> = ({role, login, articles, isEditor, isAuthor, isReader, getArticles, authorId = ''}) => {

    useEffect(() => {
        getArticles()
    }, [articles])

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

export default connect<mapState, mapDispath, {}, RootState>(mapStateToProps, {getArticles})(ReaderContainer)

type mapState = {
    role: string
    login: string|null
    articles: Array<Articles>
    isAuthor: boolean,
    isReader: boolean,
    isEditor: boolean,
    authorId: string
}
type mapDispath = {
    getArticles: () => void
}

type commonProps = mapState&mapDispath