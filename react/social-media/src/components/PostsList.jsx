import { useContext, useState } from "react"
import PostItem from "./PostItem"
import PostsContext from "../store/PostsStore"

let PostList = ()=>{

  // States & Functions:

  let contextObject = useContext(PostsContext)

  let posts = contextObject.getPosts
  // let posts = []

  let [spinnerState,setSpinnerState] = useState(false)

  let onPostsClick = ()=>{

  }

  // Components:

  let listComponent =   <center className="postList">

  let spinner = <div className="spinner-border" role="status">
  <span className="visually-hidden">Loading...</span>
</div>

  {
    posts.map(post=><PostItem post={post}></PostItem>)
  }  
  </center>

  let emptyListComponent = <center className="emptyListStyle">
    <h2> No Posts yet.</h2>
    <button type="button" class="btn btn-warning" onClick={onPostsClick}>Fetch Posts</button>

  </center>

  return <>

  {
    posts.length ===0 ? emptyListComponent: listComponent
  }

  </>

}

export default PostList