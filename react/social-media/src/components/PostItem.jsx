import { useContext } from "react";
import PostsContext from "../store/PostsStore";

let PostItem = ({post}) => {

  let {deletePost} = useContext(PostsContext)

  return (
    <>
    <div >
            <div className="card postItem" style={{ width: "18rem" }}>

        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>

          <p className="card-text">
            {post.content}
          </p>

          <button type="button" class="btn btn-danger deleteButton" onClick={()=>deletePost(post.id)}>Delete</button>

        </div>
      </div>
    </div>
    </>
  );
};

export default PostItem;