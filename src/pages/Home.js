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
    <div className="container pt-2 pb-5 py-md-5">
      <div className="row">
        <div className="col-md mb-3">
          <article>
            <h2 className="display-1 mt-5">
              {data !== null && data.content.username.toUpperCase()}
            </h2>
            <p className="display-6 mt-2 pe-5">
              {data !== null && data.content.tagline}
            </p>
          </article>
        </div>
        <div className="col-md">
          <img className="img-fluid" src={Photo} alt="homeimage" />
        </div>
      </div>
    </div>
  );
}

export default Home;
