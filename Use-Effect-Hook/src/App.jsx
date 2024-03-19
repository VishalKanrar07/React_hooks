import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchdata = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) {
        throw new Error("Response not OK");
      }
      const fetchedData = await response.json();
      setData(fetchedData);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <div>Welcome to useeffect tutorial</div>
      <ul>
        {data.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </>
  );
};

export default App;
