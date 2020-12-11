import React, { useState } from 'react';
import Menu from '../Menu/Menu'
import Cards from '../Cards/Cards'
import { Articles, SaveNewArticle } from '../../types/Articles';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import { Fab, Tooltip } from '@material-ui/core';
import { ModalWindow } from '../Modal/Modal';


const useStyles = makeStyles({
  btn: {
    position: 'fixed',
    bottom: '20px',
    right: '30px',
  },
})

export const data = [
  {
    id:'1',
    descr: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos laboriosam rerum enim vel aperiam maxime, voluptate dicta ipsam, voluptates facere, modi quaerat debitis incidunt delectus inventore a quo laborum eius! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos laboriosam rerum enim vel aperiam maxime, voluptate dicta ipsam, voluptates facere, modi quaerat debitis incidunt delectus inventore a quo laborum eius! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos laboriosam rerum enim vel aperiam maxime, voluptate dicta ipsam, voluptates facere, modi quaerat debitis incidunt delectus inventore a quo laborum eius! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos laboriosam rerum enim vel aperiam maxime, voluptate dicta ipsam, voluptates facere, modi quaerat debitis incidunt delectus inventore a quo laborum eius!',
    comments: [],
    name: 'Article'
  },
  {
    id:'2',
    descr: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos laboriosam rerum enim vel aperiam maxime, voluptate dicta ipsam, voluptates facere, modi quaerat debitis incidunt delectus inventore a quo laborum eius! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos laboriosam rerum enim vel aperiam maxime, voluptate dicta ipsam, voluptates facere, modi quaerat debitis incidunt delectus inventore a quo laborum eius! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos laboriosam rerum enim vel aperiam maxime, voluptate dicta ipsam, voluptates facere, modi quaerat debitis incidunt delectus inventore a quo laborum eius! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos laboriosam rerum enim vel aperiam maxime, voluptate dicta ipsam, voluptates facere, modi quaerat debitis incidunt delectus inventore a quo laborum eius!',
    comments: [],
    name: 'Article'
  }
]

const Reader = ({login, role, articles, isEditor, isAuthor, isReader, authorId, postArticle}:ownProps) => {  
  const classes = useStyles()

  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen(!open)
  }

  const onSave = ({title, descr}:SaveNewArticle) => {
    postArticle({title, descr, authorId})
    setOpen(false)
  }
  
  return (
    <div>
      <Menu login={login} role={role}/>
      <div>
        {articles.map(mag => {

          return <div className='container' key={mag.id}>
            <Cards
              descr={mag.descr}
              name={mag.title}
              id={mag.id}
              // @ts-ignore
              author={mag.autor}
              login={login}
            />
          </div>
        })}
      </div>
      {isAuthor&&
        <Tooltip onClick={handleModal} title="Add" aria-label="add" className={classes.btn}>
          <Fab color="primary" >
            <AddIcon />
          </Fab>
        </Tooltip>
      }
      {open&&
        <ModalWindow 
          handleModal={handleModal}
          open={open}
          onSave={onSave}
        />
      }
    </div>
  );
}


export default Reader

type ownProps = {
  login: string | null
  role: string| null
  articles: Array<Articles>
  isAuthor: boolean,
  isReader: boolean,
  isEditor: boolean,
  authorId: string | null
  postArticle: (value:SaveNewArticle) => void
}