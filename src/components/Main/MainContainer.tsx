import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import { RootState } from '../../redux/reduxStore'
import { Articles, SaveNewArticle } from '../../types/Articles'
import Main from './Main'
import { getArticles, postArticle, newReview } from '../../redux/reducers/articlesReducer'
import { Redirect } from 'react-router-dom'

const ReaderContainer:FC<commonProps> = ({isAuth, role, login, articles, isAuthor, getArticles, postArticle, autor, review, isEditor, isReviewer, isAdmin }) => {

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
                autor={autor}
                postArticle={postArticle}
                review={review}
                newReview={newReview}
                isEditor={isEditor}
                isReviewer={isReviewer}
                isAdmin ={isAdmin}
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
        isEditor: state.auth.isEditor,
        isReviewer: state.auth.isReviewer,
        autor: state.auth.autor,
        isAuth: state.auth.isAuth,
        isAdmin: state.auth.isAdmin,
        review: state.articles.review
    }
}

export default connect<mapState, mapDispath, {}, RootState>(mapStateToProps, {getArticles,postArticle,newReview, })(ReaderContainer)

type mapState = {
    role: string
    login: string|null
    articles: Array<Articles>
    isAuthor: boolean,
    autor: string | null
    isAuth: boolean,
    isEditor: boolean,
    isAdmin: boolean,
    isReviewer: boolean,
    review: any
}
type mapDispath = {
    getArticles: () => void
    postArticle: (value:SaveNewArticle) => void
    newReview: (articleId:string, userId:string, review:string) => void
}

type commonProps = mapState&mapDispath