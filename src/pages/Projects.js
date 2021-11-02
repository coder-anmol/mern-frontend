import { React, useState, useEffect } from "react";
import { Card } from "react-bootstrap";

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
    <div className="container mt-5">
      <h1 className="display-1 mb-4">Projects List</h1>
      {data !== null && (
        <article className="container row gx-2">
          {data !== null &&
            data.content.projectsList.map((project) => (
              <Card
                className="col-sm-6 col-lg-4 col-xl-3 m-4 ms-0 shadow p-0 "
                key={new Date().getTime().toLocaleString()}
              >
                <Card.Img
                  variant="top"
                  className="custom-img"
                  src={process.env.REACT_APP_HOSTNAME + project.image}
                  alt="test image"
                />
                <Card.Body>
                  <Card.Title className="fs-2 mt-2 mb-2">
                    {project.name}
                  </Card.Title>
                  <Card.Text className="fs-5 mb-5">
                    {project.description}
                  </Card.Text>
                  <Card.Link
                    href={project.hosted}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-dark fs-5"
                  >
                    Live
                  </Card.Link>
                  <Card.Link
                    href={project.repoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-dark fs-5"
                  >
                    Repo
                  </Card.Link>
                </Card.Body>
              </Card>
            ))}
        </article>
      )}
    </div>
  );
}

export default Projects;
