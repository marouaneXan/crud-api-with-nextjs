import { useState, useEffect } from "react";
import axios from "axios";
const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const {data:res}=await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(res)
    };
    getPosts();
  },[]);
  return (
    <div>
      <h1>All Posts</h1>
    </div>
  );
};

export default Home;
