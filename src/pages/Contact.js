import { React, useState, useEffect } from "react";
import { Badge } from "react-bootstrap";

function Contact() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_URL + "/contact")
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
      <h1 className="display-1">
        {data !== null && data.name.toUpperCase()} PAGE
      </h1>
      {data !== null && (
        <article>
          <h2 className="me-5 mt-5">
            <Badge pill bg="dark">
              Email
            </Badge>
          </h2>
          <p className="fs-4">{data && data.content.email}</p>
        </article>
      )}
    </div>
  );
}

export default Contact;
