import React, { useState } from 'react'
import Post from '../Post/Post'
import data from '../../data.js'
import './posts.css'

export const Posts = () => {
  const [posts, setPosts] = useState(sortPostsAsc(data))
  const [order, setOrder] = useState('asc')

  function sortPostsAsc(posts) {
    return posts.sort((a, b) => {
      return a.votes - b.votes
    })
  }
  function sortPostsDesc(posts) {
    return posts.sort((a, b) => {
      return b.votes - a.votes
    })
  }

  function renderPosts(posts) {
    return (
      <>
        <div className="sort-controller">
          <span>Orden:</span>
          <button
            className={order === 'asc' ? 'selected-button' : null}
            onClick={() => {
              setOrder('asc')
              setPosts(sortPostsAsc(posts))
            }}
          >
            Ascendente
          </button>
          <button
            className={order === 'desc' ? 'selected-button' : null}
            onClick={() => {
              setOrder('desc')
              setPosts(sortPostsDesc(posts))
            }}
          >
            Descendente
          </button>
        </div>
        {posts.map((post) => {
          return (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              imgUrl={post.post_image_url}
              description={post.description}
              votes={post.votes}
              setPosts={setPosts}
              posts={posts}
              sortPostsAsc={sortPostsAsc}
              sortPostsDesc={sortPostsDesc}
              order={order}
            />
          )
        })}
      </>
    )
  }

  return <div>{renderPosts(posts)}</div>
}
