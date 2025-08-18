import React from "react";

function Projects() {
  return (
    <>
      <div className="m-5 bg-primary-subtle  rounded-2" id="project">
        <div className=" mx-5 ">
          <div className=" pro text-center mt-5 mb-3">
            {" "}
            <h1>Project by Arpit Gupta</h1>{" "}
          </div>
          <div className="  ms-5 d-flex">
            <div className="card w-50 m-1 p-2 m-2 shadow bg-info-subtle">
              <h3>Portfolio Website</h3>
              <h5>A bootstrap based project made by Arpit Gupta</h5>
              <button className="btn btn-primary fw-bold w-50">
                View Project{" "}
              </button>
            </div>
            <div className="card w-50 m-1 p-2 m-2 shadow bg-info-subtle">
              <h3>Weather App</h3>
              <h5>A bootstrap based project made by Arpit Gupta</h5>
              <button className="btn btn-primary fw-bold w-50">
                View Project{" "}
              </button>
            </div>
            <div className="card w-50 m-1 p-2 m-2 shadow bg-info-subtle">
              <h3>Todo List</h3>
              <h5>A bootstrap based project made by Arpit Gupta</h5>
              <button className="btn btn-primary fw-bold w-50">
                View Project{" "}
              </button>
            </div>
          </div>

          <div className="  ms-5 d-flex">
            <div className="card w-50 m-1 p-2 m-2 shadow bg-info-subtle">
              <h3>Blog Plateform</h3>
              <h5>A bootstrap based project made by Arpit Gupta</h5>
              <button className="btn btn-primary fw-bold w-50">
                View Project{" "}
              </button>
            </div>
            <div className="card w-50 m-1 p-2 m-2 shadow bg-info-subtle">
              <h3>Photo Gallery</h3>
              <h5>A bootstrap based project made by Arpit Gupta</h5>
              <button className="btn btn-primary fw-bold w-50">
                View Project{" "}
              </button>
            </div>
            <div className="card w-50 m-1 p-2 m-2 shadow bg-info-subtle">
              <h3>E-commerce Store</h3>
              <h5>A bootstrap based project made by Arpit Gupta</h5>
              <button className="btn btn-primary fw-bold w-50">
                View Project{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
