import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

//  function Saving(){
//   const initialValue={
//     Name:"",
//     Title:"",
//     Description:""
//   };
//   const [BlogsDetails,setDetails]=useState(initialValue);
//   const handleChange = (e) => {
//     setDetails({ ...BlogsDetails, [e.target.Name]: e.target.value });
//   };
// }

const WritenBlog = () => {
  const initialValue = {
    Name: "Harshitha",
    Title: "Javascript",
    Description: "Javascript is a scripting language",
  };
  const [blogsDetails, setDetails] = useState(initialValue);
  const saveInLocal = () => {
   
    const existBlog=localStorage.getItem("blogs")? localStorage.getItem("blogs"):"[]";

    const parsedBlog=JSON.parse(existBlog);
     parsedBlog.push(blogsDetails);

    localStorage.setItem("blogs", JSON.stringify(parsedBlog));



  };
  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setDetails({ ...blogsDetails, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
         <div style={{textAlign:"center"}}>
            <h1>Create A Blogs</h1>
          </div>

          <div style={{ display:"flex" ,gap:"10px", justifyContent:"end"}}>
            <button
              style={{
                borderRadius: "20px",
                backgroundColor: "blue",
                height: "30px",
                fontSize:"15px",
                color:"white",
                border:"1px solid gray"
              }}
              onClick={saveInLocal}
            >
              Save as draft
            </button>
            <button
             onClick={() => navigate("/")}
              style={{
                borderRadius: "20px",
                backgroundColor: "red",
                height: "30px",
              }}
            >
              Publish
            </button>
          </div>
       

        <div className="InputBox">
          <div className="nameInput">
            <label style={{fontSize:"15px"}}><b>Name</b></label>
            <br/>
            <input
              name="Name"
              type="name"
              value={blogsDetails.Name}
              style={{ width: "100%", lineHeight: "30px" }}
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="TitleInput">
            <label style={{fontSize:"15px"}}><b>Title </b></label>
            <br />
            <input
              name="Title"
              type="name"
              value={blogsDetails.Title}
              style={{ width: "100%", lineHeight: "30px" }}
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="descriInput">
            <label style={{fontSize:"15px"}}><b>Description</b></label>
            <br />
            <textarea
              name="Description"
              rows="4"
              cols="50"
              value={blogsDetails.Description}
              placeholder=" write Awseome blog"
              style={{ width: "100%", lineHeight: "50px" }}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
};

export default WritenBlog;
