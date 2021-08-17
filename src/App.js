import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import CommentsSide from './components/CommentsSide/CommentsSide';
import Comment from './components/Comment/Comment';
import Footer from './components/Footer/Footer';
import axios from 'axios';
import './App.css';

const url = 'http://146.185.154.90:8000/messages';

const App = () => {

  const [post, setPost] = useState([]);
  const [sendPost, setSendPost] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const post = response.data;

        console.log(response);

        setPost(post);
        setError(null);
      } catch (e) {
        console.log(e.response);
        setError('Something went wrong ' + e.response.status);
      }
    }

    fetchData().catch(e => console.error(e));

    const id = setInterval(() => {
      fetchData();
    }, 2000);

    fetchData();

    return () => clearInterval(id);
  }, []);



  const createPost = async () => {
    try {
      const data = new URLSearchParams();
      data.set('author', 'John Doe');
      data.set('message', 'Hello!');
      
      const response = await axios.post(url , data);
      
      console.log(response.data)
    } catch (e) {
      console.log(e.response);
      setError('Something went wrong ' + e.response.status);
    }

  };



  return (
    <div className="App">
      <Navbar />
      <div className='main'>
        <Comment
          onClick={createPost}
        />
        <CommentsSide
          error={error}
          post={post}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
