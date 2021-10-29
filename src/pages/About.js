import { React, useState, useEffect } from "react";

function About() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_URL + "/about")
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
      <p>{data !== null && data.content.data}</p>
    </div>
  );
}

export default About;
