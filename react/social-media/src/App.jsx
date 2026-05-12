import { useEffect, useRef, useState } from "react";
import CreatePost from "./components/CreatePost";
import Footer from "./components/Footer"
import Header from "./components/Header"
import PostItem from "./components/PostItem";
import Sidebar from "./components/SideBar"
import './Style.css'
import PostList from "./components/PostsList";
import POST_CONTEXT from "./store/PostsStore";
import PostsContext from "./store/PostsStore";
import { Outlet, useNavigate } from "react-router-dom";

let App = () => {

  // States & Functions

  

const dummyPosts = [
    {
      postId: 1,
      postTitle: "Getting Started with React",
      postContent: "React makes building interactive UIs simple and component-based."
    },

  {
    postId: 2,
    postTitle: "Understanding useState Hook",
    postContent: "The useState hook helps components store and update dynamic data."
  },

  {
    postId: 3,
    postTitle: "Why Context API Matters",
    postContent: "Context API helps avoid prop drilling by sharing data globally."
  },

  {
    postId: 4,
    postTitle: "Flexbox vs Grid",
    postContent: "Flexbox is one-dimensional while CSS Grid is two-dimensional."
  },

  {
    postId: 5,
    postTitle: "Learning JSX",
    postContent: "JSX allows HTML-like syntax directly inside JavaScript code."
  },

  {
    postId: 6,
    postTitle: "Frontend Development Journey",
    postContent: "Consistency and building projects are the fastest ways to improve."
  },

  {
    postId: 7,
    postTitle: "Bootstrap with React",
    postContent: "Bootstrap components can be easily integrated into React projects."
  },

  {
    postId: 8,
    postTitle: "State Management Basics",
    postContent: "Managing state properly is crucial for scalable React applications."
  },

  {
    postId: 9,
    postTitle: "Importance of Unique Keys",
    postContent: "React uses keys to efficiently update and render list items."
  },

  {
    postId: 10,
    postTitle: "Building Real Projects",
    postContent: "The best way to master React is by building increasingly complex apps."
  }
];  

// useEffect(
//   ()=>{

//     // Api call

//     let response = fetch(
//       'https://dummyjson.com/posts/add',
//       {
//         method:"POST",
//         headers:{
//           'Content-type':'application-json'
//         },
//         body:JSON.stringify(
//           {
//                 title: 'I am Batman',
//                 userId: 5,
//           }
//         )
//       }
//     ).then(
//       (rawResponse)=>rawResponse.json()
//     ).then(
//       console.log
//     )

//   },
//   []
// )



  let [getSelectedTab, setSelectedTab] = useState('Post')

  let [getPosts,setPosts] = useState([])

      useEffect(  
        ()=>{
                fetch("https://dummyjson.com/posts")
    .then(
      (rawResponse)=>rawResponse.json()
    )
    .then(
      (response)=>{
        setPosts(response.posts)
            // console.log("posts fetched")
            // console.log(posts)
      }
    )
        },
[]
  )

  let postId = useRef(1)
  let navigation = useNavigate()

  let addPost = (title,content) =>{

    postId.current+=1

    let newPost = {
      id: postId.current,
      title,
      content
    }

    setPosts(
      [
        newPost,...getPosts
      ]
    )

    navigation("/")


  }

  let deletePost = (postId)=>{
    let newPosts = getPosts.filter(
      (post)=>post.id!==postId
    )

    setPosts(newPosts)
  }

  // Components


  return (
    <>

    <PostsContext.Provider value={
      {
        getPosts,
        addPost,
        deletePost
      }
    }>
      <div className="appContainer">

        <Sidebar selectedTab={getSelectedTab} setClickedTab={setSelectedTab}/>

        <div className="mainContent">
          <Header />

          <div className="content">

            {/* {
              getSelectedTab === 'Home' ? <PostList/> : <CreatePost/>
            } */}

            <Outlet/>
          </div>

          <Footer />
        </div>

      </div>

      </PostsContext.Provider>
    </>
  );
};




export default App