import { Post } from './Components/Post';
import { Header } from './Components/Header';
import { Sidebar } from './Components/Sidebar';

import './global.css'
import styles from './App.module.css'


const posts = [
  {
      id: 1,
      author:{
          avatarUrl: 'https://github.com/Ndinga23.png',
          name: 'Ndinga Hermes',
          role: 'CTO @DevBantu '
      },
      content:[
          { type: 'paragraph', content: 'Fala galera 🤚'},
          { type: 'paragraph', content: 'Acabei de subir um projecto hoje no meu portifolio. É um projecto que fiz no NLW Return, evento da Rocktseat. o nome do projecto é DoctorCare'},
          { type: 'link', content: 'fernanda.design/doctorcare🚀!'}
      ],
      publishedAt: new Date('2024-11-01 20:00:00'),
  },
  {
      id: 2,
      author:{
          avatarUrl: 'https://github.com/Buana1.png',
          name: 'Kevin Buana',
          role: 'CTO @BrawnWave',
      },
      content:[
          { type: 'paragraph', content: 'Fala galera 🤚'},
          { type: 'paragraph', content: 'Acabei de subir um projecto hoje no meu portifolio. É um projecto que fiz no NLW Return, evento da Rocktseat. o nome do projecto é DoctorCare'},
          { type: 'link', content: '👉kevin.design/doctorcare🚀!'}
      ],
      publishedAt: new Date('2024-10-05 20:00:00'),
  },
]

export function App() {
  return (
    <div>

      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
