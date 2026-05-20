import axios from "axios";

  /* Notes:

  1) Axios provides different methods for api call and we donot use to use .json() to convert it to js objects.
  
  2) to get the data from a sucessful api call: response.data 

  3) for getting status and message: response.status and response.message

  4) for fetching: directly use the axios.get("url"), data comes in .json format than get the data using response.data()

   */

/* Professional practise , create a client with the base url and export it.  
 
1) we can pass , baseurl, timeout and headers
  
  for eg: axios.create({
  baseUrl: "",
  timeout:1000,
  headers:{ "Authorization": "Bearer "},
    });

2) we have to use .then(()=>{}) to consume the promise, catch(error) to consume the error .finally() 

3) when we declare base url in the client , it is already present in the first parameter of the method

get(""), post("",body) we can add the remainning route get("/{id}") , 
or we can also write get("/") this also means the base url .

4) this methods take 3 parameters: url, body and config object. all the headers go inside the config object part.

method(
"url",
body:{},
config:{ headers:{"Authorization":"Bearer ", "Content-type":"application/json"},
  params:{key:value}}
)

the keys of the params should not be String.
    
*/

/*===================================================================================================
AXIOS CLIENT
===================================================================================================
  */

let client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
});

/*===================================================================================================
AXIOS CLIENT
===================================================================================================
  */


/*===================================================================================================
GET API CALL
===================================================================================================
  */


export const getPosts = async () => {
  try {
    let response = await client.get("");

    // console.log("status: ",response.status);
    console.log("data: ", response.data);
  } catch (error) {
    console.log(error);
    console.log("status-code: ", error.status);
    console.log("message: ", error.message);
  }
};

export const indivisualPost = async (postId) => {
  try {
    let response = await client.get(`/${postId}`);
    console.log(response.data);
  } catch (error) {
    console.log("status: ", error.status);
    console.log("error", error.message);
  }
};

/*===================================================================================================
GET API CALL
===================================================================================================
  */

/*===================================================================================================
POST API CALL
===================================================================================================
  */

export const addPost = (post) => {
  client
    .post("https://jsonplaceholder.typicode.com/posts", post, {
      headers: { Authorization: "Bearer xyz" },
      params: { id: 2 },
    })
    .then((response) => console.log(response))
    .catch((error) => {
      console.log(`status: ${error.status}`);
      console.log(`message: ${error.message}`);
    });
};

/*===================================================================================================
POST API CALL
===================================================================================================
  */

/*===================================================================================================
PUT API CALL
===================================================================================================
  */

export const putPost = async (id, post) => {
  let response = await client
    .put(`/${id}`, post)
    .then((response) => console.log(response.data))
    .catch((error) => {
      console.log(`status: ${error.status}`);
      console.log(`message: ${error.message}`);
    });
};

/*===================================================================================================
PUT API CALL
===================================================================================================
  */

/*===================================================================================================
DELETE API CALL
===================================================================================================
  */

export const deletePost = async (id) => {
  await client
    .delete(`/${id}`)
    .then((response) => console.log(response.data))
    .catch((error) => {
      console.log(`status: ${error.status}`);
      console.log(`message: ${error.message}`);
    });
};

/*===================================================================================================
DELETE API CALL
===================================================================================================
  */
