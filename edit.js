import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditBlogs = () => {
    const navigate=useNavigate();
  const { index } = useParams();
  const array = JSON.parse(localStorage.getItem("blogs"));
  //   console.log(array[index]);
  const [detail, setDetail] = useState(array[index]);
  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setDetail({...detail, [e.target.name]: e.target.value });
  };
  const displayDetails = () => {
    const existBlog = localStorage.getItem("blogs")
      ? localStorage.getItem("blogs")
      : "[]";

    const parsedBlog = JSON.parse(existBlog);
     parsedBlog[index] = detail;
  //  parsedBlog.splice(index, 0, detail);
    console.log(parsedBlog);

    localStorage.setItem("blogs", JSON.stringify(parsedBlog));
    navigate("/")
  };

  return (
    <>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <h2>Edit the Blog</h2>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              style={{
                borderRadius: "20px",
                backgroundColor: "red",
                height: "30px",
              }}
              onClick={() => displayDetails()}
            >
              Save the Details
            </button>
          </div>
        </div>

        <div className="InputBox">
          <div className="nameInput">
            <label>Name</label>
            <br />
            <input
              name="Name"
              type="name"
              value={detail.Name}
              style={{ width: "100%", lineHeight: "30px" }}
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="TitleInput">
            <label>Title </label>
            <br />
            <input
              name="Title"
              type="name"
              value={detail.Title}
              style={{ width: "100%", lineHeight: "30px" }}
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="descriInput">
            <label>Description</label>
            <br />
            <textarea
              name="Description"
              rows="4"
              cols="50"
              value={detail.Description}
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
export default EditBlogs;
