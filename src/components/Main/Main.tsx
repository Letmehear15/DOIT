import React, { useState } from 'react';
import Menu from '../Menu/Menu'
import Cards from '../Cards/Cards'
import { Articles, SaveNewArticle } from '../../types/Articles';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Fab, Tooltip } from '@material-ui/core';
import { ModalWindow } from '../Modal/Modal';
import { STAGEMAP } from '../../Helps/StageMap';
import { AdminPanel } from './AdminPanel';


const useStyles = makeStyles({
  btn: {
    position: 'fixed',
    bottom: '20px',
    right: '30px',
  },
})

const Reader = ({login, role, articles, isAuthor, autor, postArticle, newReview, isReviewer, isEditor, isAdmin, review }:ownProps) => {  
  const classes = useStyles()

  const [open, setOpen] = useState(false);
  const [showAll, setShowAll] = useState(false)

  const handleModal = () => {
    setOpen(!open)
  }

  const onSave = ({title, descr, document,category}:SaveNewArticle) => {
    postArticle({title, descr, autor, document,category})
    setOpen(false)
  }

  const authorCards = articles.filter(el => el.author?.login === login)
  const reviewerCards = articles.filter(el => el.stage === (STAGEMAP['waiting reviewer'] || el.stage === STAGEMAP['waiting editor']) && (el.review?el.review[0].reviewer.login===login:null)||el.review?login===el.review[0].reviewer.login:null)
  const editorCards = articles.filter(el => el.stage === STAGEMAP['waiting editor'] )
  
  return (
    <div>
      <CssBaseline />
      <Menu setShowAll={setShowAll} login={login} role={role}/>
      <div>
        {
          isAuthor &&  <HelpComponent item={authorCards} login={login} newReview={newReview}/>
        }
        {
          isReviewer &&  <HelpComponent item={reviewerCards} login={login} newReview={newReview}/>
        }
        {
          isEditor && <HelpComponent item={editorCards} login={login} newReview={newReview}/>
        }
        {
          isAdmin && <AdminPanel/>
        }
        {
          showAll && <HelpComponent item={articles} login={login} newReview={newReview}/>
        }
      </div>
      {isAuthor &&
        <Tooltip onClick={handleModal} title="Add" aria-label="add" className={classes.btn}>
          <Fab color="primary" >
            <AddIcon />
          </Fab>
        </Tooltip>
      }
      {open &&
        <ModalWindow 
          handleModal={handleModal}
          open={open}
          onSave={onSave}
        />
      }
    </div>
  );
}

const HelpComponent = (props:any) => {
  const {item, login, newReview} = props
  return (
    <>
    {
      item.map((mag:any) => {
        return <div className='container' key={mag.id}>
          <Cards
            descr={mag.descr}
            name={mag.title}
            id={mag.id}
            author={mag.author}
            login={login}
            stage={mag.stage}
            review={mag.review}
            newReview={newReview}
            category={mag.category}
          />
        </div>
      })
    }
    </>
  )
}
export default Reader

type ownProps = {
  login: string | null
  role: string| null
  articles: Array<Articles>
  isAuthor: boolean,
  isEditor: boolean,
  isReviewer: boolean,
  isAdmin: boolean,
  autor: string | null,
  review: any,
  postArticle: (value:SaveNewArticle) => void
  newReview: (articleId:string, userId:string, review:string) => void
}