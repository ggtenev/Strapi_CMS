import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function Homepage() {
  const { loading, error, data } = useFetch("http://localhost:1337/reviews");
  console.log(data);

  if (loading) {
    return <h2>Loading</h2>;
  }
  if (error) {
    return <h2>Error:{error}</h2>;
  }
  return (
    <div>
      {data.map((review) => {
        return (
          <div className='review-card' key={review.id}>
            <div className='rating'>
              <h1>{review.title}</h1>
            </div>
            <img
              style={{ width: "30%" }}
              alt='page'
              src={`http://localhost:1337${review.image.url}`}
            />
            <p>{review.text.substring(0, 200)}...</p>
            <Link to={`details/${review.id}`}>Read mroe</Link>
          </div>
        );
      })}
    </div>
  );
}
