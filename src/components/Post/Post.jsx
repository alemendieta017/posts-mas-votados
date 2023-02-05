import React from 'react'
import './post.css'

const Post = (props) => {
  function incrementVotes() {
    const newPosts = props.posts.map((i) => {
      if (i.id === props.id) {
        return {
          ...i,
          votes: i.votes + 1,
        }
      } else {
        return i
      }
    })
    if (props.order === 'asc') {
      props.setPosts(props.sortPostsAsc(newPosts))
    } else if (props.order === 'desc') {
      props.setPosts(props.sortPostsDesc(newPosts))
    }
  }

  function decreaseVotes() {
    const newPosts = props.posts.map((i) => {
      if (i.id === props.id) {
        return {
          ...i,
          votes: i.votes - 1,
        }
      } else {
        return i
      }
    })
    if (props.order === 'asc') {
      props.setPosts(props.sortPostsAsc(newPosts))
    } else if (props.order === 'desc') {
      props.setPosts(props.sortPostsDesc(newPosts))
    }
  }

  return (
    <div className="post">
      <div className="post_image">
        <img src={props.imgUrl} alt="postimage" />
      </div>
      <div className="counter">
        <span className="material-symbols-outlined" onClick={incrementVotes}>
          arrow_drop_up
        </span>
        {props.votes}
        <span className="material-symbols-outlined" onClick={decreaseVotes}>
          arrow_drop_down
        </span>
      </div>
      <div className="post_content">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default Post
