import React from 'react';
import UseFetch from './UseFetch';

const FetchComponent = () => {
  const { data, loading, error } = UseFetch('https://jsonplaceholder.typicode.com/posts'); // Sample URL for testing

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  console.log(data);
  return (
    <div>
      <h1>Fetched Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default FetchComponent;