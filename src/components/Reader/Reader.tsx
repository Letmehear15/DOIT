import React from 'react';
import Menu from '../Menu/Menu'
import Cards from './Cards'

const magazines = [
  {
      id: 1,
      name: 'magaz1',
      descr:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam laboriosam magni perferendis pariatur. Consequatur, dicta quisquam placeat explicabo soluta illo qui id, aliquam dolorem sint reiciendis asperiores. Expedita, magnam sint!',
      comments: [
          {id:1, text: 'shit'},
          {id:2, text: 'not shit'},
          {id:3, text: 'ahahhaha'},
          {id:4, text: 'hiiii'},
          {id:5, text: 'goooood'},
      ]
  },
  {
      id: 2,
      name: 'magaz2',
      descr:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam laboriosam magni perferendis pariatur. Consequatur, dicta quisquam placeat explicabo soluta illo qui id, aliquam dolorem sint reiciendis asperiores. Expedita, magnam sint!',
      comments: [
          {id:1, text: 'shit'},
          {id:2, text: 'not shit'},
          {id:3, text: 'ahahhaha'},
          {id:4, text: 'hiiii'},
          {id:5, text: 'goooood'},
      ]
  },
  {
      id: 3,
      name: 'magaz3',
      descr:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam laboriosam magni perferendis pariatur. Consequatur, dicta quisquam placeat explicabo soluta illo qui id, aliquam dolorem sint reiciendis asperiores. Expedita, magnam sint!',
      comments: [
          {id:1, text: 'shit'},
          {id:2, text: 'not shit'},
          {id:3, text: 'ahahhaha'},
          {id:4, text: 'hiiii'},
          {id:5, text: 'goooood'},
      ]
  },
  {
      id: 4,
      name: 'magaz3',
      descr:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam laboriosam magni perferendis pariatur. Consequatur, dicta quisquam placeat explicabo soluta illo qui id, aliquam dolorem sint reiciendis asperiores. Expedita, magnam sint!',
      comments: [
          {id:1, text: 'shit'},
          {id:2, text: 'not shit'},
          {id:3, text: 'ahahhaha'},
          {id:4, text: 'hiiii'},
          {id:5, text: 'goooood'},
      ]
  }
]

export default function Reader(props:ownProps) {  
  return (
    <>
      <Menu login={props.login} role={props.role}/>
      <div>
        {magazines.map(mag => {
          return <div className='container' key={mag.id}>
            <Cards
              descr={mag.descr}
              comments={mag.comments}
              name={mag.name}
            />
          </div>
        })}
      </div>
    </>
  );
}

type ownProps = {
  login: string | null
  role: string| null
}