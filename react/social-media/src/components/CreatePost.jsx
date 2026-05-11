import { useContext, useState } from 'react';
import '../Style.css'
import PostsContext from '../store/PostsStore';

let CreatePost = () => {

  let contextObject = useContext(PostsContext)
  let [getName,setName] = useState('')
  let [getContent,setContent] = useState('')

  let onNameChange = (event) => {
    console.log(event.target.value)
    setName(event.target.value)
  }
  let onContentChange = (event) => setContent(event.target.value)
  
  let addPost = ()=>{
    contextObject.addPost(getName,getContent)
    setName('')
    setContent('')
  }
  

  return (
    <>
    <div className='createPost'>
        <div classNam="mb-3 nameInput">
        <label for="formGroupExampleInput" className="form-label">
          Create Post
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="Enter Name"
          onChange={onNameChange}
        />
      </div>
      <div className="mb-3 contentInput">
        <label for="formGroupExampleInput2" className="form-label">
          Content
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput2"
          placeholder="Enter Content"
          onChange={onContentChange}
        />
      </div>

      <center>
        <button type="button" class="btn btn-success" onClick={addPost}>Add</button>

      </center>


    </div>

    </>
  );
};

export default CreatePost;
