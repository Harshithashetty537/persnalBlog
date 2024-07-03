import { useNavigate, useParams } from "react-router-dom";
import "./index.css";
import { useEffect, useState } from "react";
import MyLoader from "./loading";

const Blogs = () => {
  const navigate = useNavigate();
  const {index}  = useParams();
   console.log(index)
   const [allBlogs,setAllBlogs] = useState([]);
   const [Loading,setLoading]=useState(true);
   setTimeout(()=>{
    setLoading(false)
   },4000);

  const deleteBlogs=(index)=>{
    const array=JSON.parse(localStorage.getItem('blogs'));
    console.log(array)
    array.splice(index,1); // Remove the blog at the specified index
    setAllBlogs(array);
    localStorage.setItem('blogs', JSON.stringify(array));
  
    // Check if blogs is an array before trying to splice
  //   if (Array.isArray(array)) {
  //     array.splice(index, 1); // Remove the blog at the specified index
  //     localStorage.setItem('blogs', JSON.stringify(array)); // Update local storage
  //     Blogs(); // Refresh the display
  // } else {
  //     console.error('blogs is not an array or is null:', array);
  // }

  }

  // useEffect(()=>{
  //   if(Loading){
  //     return(

  //       <><MyLoader/></>
  //     )
  //   }
  // })

 

  useEffect(()=> {
    const blogs = localStorage.getItem("blogs")? localStorage.getItem("blogs"):"[]";
  const finalBlogs = JSON.parse(blogs);
  setAllBlogs(finalBlogs);
  }, [])
 
// function delayLoading(){
// return<>
//   <Loading/>
// </>
// }




  return (
    <>

      <div className="parentdiv">
        <div className="child1">
          <h2>
            <b>Blogs</b>
          </h2>
          <h3 className="child2">
            Jourenying Through Life,
            <span>
              <br />
              One Insight at a Time.
            </span>
          </h3>
        </div>
        <div className="allBlogs">
          <div>
            <button style={{border:"none",background:"none",fontSize:"15px"}}><b>All Blogs</b></button>
          </div>
          <div>
            <button
              className="CreateButton"
              onClick={() => navigate("/create/blogs")}
            >
              <b>Create A Blogs +</b>
            </button>
          </div>
        </div>
        <br />
        <div style={{display:"flex",flexWrap:"wrap",gap:"60px"}} >
        {Loading?(
          <div><MyLoader/></div>
        ):(

          allBlogs.map((item, index) => {
            return (
              <>
                <div >
                  <div className="Blogs">
                    <div className="editButton"> 
                  <button onClick={()=> navigate(`/blog/edit/${index}`)} style={{backgroundColor:"rgb(70, 227, 238)",borderRadius:"5px"}} >Edit</button>
                    <button onClick={()=> deleteBlogs(index)} style={{backgroundColor:"rgb(223, 153, 153)",borderRadius:"5px"}} >Delete</button>
                    </div>
                    <div style={{ color: "gray",fontSize:"17px",fontFamily: "SF Pro Display",marginBottom:"15px"}}><b>{item.Name}</b></div>
                    <div style={{ color: "black",fontSize:"22px",fontFamily: "SF Pro Display",marginBottom:"15px"}}><b>Title:{item.Title}</b></div>
                    <div className="discription"style={{ fontSize: "12px" }}>{item.Description}</div>
                  </div>
                </div>
              </>
            );
          })
        )}
        </div>
      </div>;
    </>
  );
};

export default Blogs;
