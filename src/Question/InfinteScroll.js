import { Fragment, useEffect, useState } from "react";
const InfinteScroll = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 15;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${recordsPerPage}`
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const newData = await response.json();
      setData((prevData) => [...prevData, ...newData]);
      setCurrentPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      fetchData();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [data, isLoading]);

  return (
    <Fragment>
      <h1> Infinite scroll</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          margin: "10px",
        }}
      >
        {data.map((item, index) => {
          return (
            <div
              className="card"
              key={`${item} - ${index}`}
              style={{
                height: "400px",
                width: "calc(25% - 20px)",
                margin: "10px",
              }}
            >
              <div className="card-header">
                <h1>{item.name}</h1>
              </div>
              <div className="card-body">
                <span>{item.email}</span>
                <span>{item.body}</span>
              </div>
              <div className="card-footer">
                <span>{item.postId}</span>
              </div>
            </div>
          );
        })}
      </div>
      {isLoading && <p>Loading....</p>}
    </Fragment>
  );
};
export default InfinteScroll;
