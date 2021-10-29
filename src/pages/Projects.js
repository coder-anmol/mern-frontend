import { React, useState, useEffect } from "react";

function Projects() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_URL + "/projects")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <h1>{data !== null && data.name.toUpperCase()} PAGE</h1>
      {data !== null && (
        <article>
          <h2>Projects List</h2>
          {data !== null &&
            data.content.projectsList.map((project) => (
              <div key={new Date().getTime().toLocaleString()}>
                <img
                  src={process.env.REACT_APP_HOSTNAME + project.image}
                  alt="project img"
                />
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <a
                  className="button"
                  href={project.hosted}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live
                </a>
                <a
                  className="button"
                  href={project.repoLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Repo
                </a>
              </div>
            ))}
        </article>
      )}
    </div>
  );
}

export default Projects;
