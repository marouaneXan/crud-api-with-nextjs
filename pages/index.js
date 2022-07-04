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
    <div className="container">
      <h1>There are {posts.length} in the database</h1>
      <div className="btn btn-primary">+ Add Post</div>
      <table className="table">
        <thead>
          <th>Title</th>
          <th>Update</th>
          <th>Delete</th>
        </thead>
        <tbody>
          {
            posts.map(post=>
                <tr key={post.id}>
                  <td>{post.title}</td>
                  <td><button className="btn btn-warning btn-sm">Update</button></td>
                  <td><button className="btn btn-danger btn-sm">Delete</button></td>
                </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
};

export default Home;
