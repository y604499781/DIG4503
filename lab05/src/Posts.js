import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './posts.css';

const Posts = () => {
  const [posts, setPosts] = useState();

  //useEffect runs once at initial redenring
  //axios fetches data from website
  useEffect (() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
      const responsePosts = res.data;
      setPosts(responsePosts); //fetched data
    });
  }, []);
  return (
    <div>
      <h1>All the Posts</h1>
      {
        posts && posts.map((post) => { //maps posts into post array by keys
          const{id, title, body} = post;
          return ( // print post array to screen
            <div key={id}>
              <h4> Post {id}:  {title}</h4>
              <p> {body}</p>
            </div>
          )
        })
      }
    </div>
  );
};

export default Posts;