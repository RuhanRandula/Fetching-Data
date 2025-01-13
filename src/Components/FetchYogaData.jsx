import React from "react";
import UseFetch from "./UseFetch";
import "./FetchData.css";

const FetchYogaData = () => {
  const { data, loading, error } = UseFetch("https://api.npoint.io/4459a9a10e43812e1152");

  console.log(data);
  console.log(loading);
  console.log(error);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <ul className="list_data_main">
        <h1 className="usefetch_heading">Use Fetch Custom Hook</h1>
        {data.map((e, index) => (
          <li key={index} className="list_data">
            <h3>{e.name}</h3>
            <p><strong>Importance: </strong>{e.importance}</p>
            <p><strong>Benefits: </strong>{e.benefits}</p>
            <p><strong>Time to eat: </strong>{e.best_time_to_intake}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchYogaData;