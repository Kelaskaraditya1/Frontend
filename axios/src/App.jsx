import axios from "axios";
import { useEffect } from "react";
import { getPosts, indivisualPost, addPost, putPost, deletePost } from "./service/ApiService";

let App = () => {




  // simple fetching, fetching all records.

  const baseUrl = "https://jsonplaceholder.typicode.com/posts";

  // let getPosts = async () => {
  //   try {
  //     let response = await axios.get(baseUrl);
  //     console.log(response.data);
  //   } catch (exception) {
  //     console.log(error.message);
  //     console.log(error.response.status);
  //     console.log(error.response.data);
  //   }
  // };
  
  let getIndivisualPost = async ()=>{
    await indivisualPost(1);
  }

  let addNewPost = async ()=>{

    let post = {
    title: 'Ironman',
    body: 'I am Ironman',
    userId: 1,
  }

  await addPost(post);

  }

  let updatePost = async ()=>{

        let post = {
    title: 'Ironman',
    body: 'I am Ironman',
    userId: 1,
  }

  await putPost(1,post);

  }

  let removePost = async ()=>{
    await deletePost(1);
  }

  useEffect(() => removePost, []);

  return (
    <div>
      <h6>Axios</h6>
    </div>
  );
};

export default App;
