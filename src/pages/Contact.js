import { React, useState, useEffect } from "react";

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
    <div className="container">
      <h1>{data !== null && data.name.toUpperCase()} PAGE</h1>
      {data !== null && (
        <article>
          <h2>Email</h2>
          <p>{data && data.content.email}</p>
        </article>
      )}
    </div>
  );
}

export default Contact;
