import { React, useState, useEffect } from "react";
import Photo from "../headerImage.jpeg";
function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_URL + "/home")
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
      <div>
        <img className="photo" src={Photo} alt="homeimage" />
      </div>
      <div>
        <h1>{data !== null && data.name.toUpperCase()} PAGE</h1>
        <article>
          <h2>{data !== null && data.content.username.toUpperCase()}</h2>
          <p>{data !== null && data.content.tagline}</p>
        </article>
      </div>
    </div>
  );
}

export default Home;
