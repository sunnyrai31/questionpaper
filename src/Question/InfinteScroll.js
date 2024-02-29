import { Fragment, useEffect, useState } from "react";
const InfinteScroll = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLaoding] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const recordLimit = 15;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLaoding(true);
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${recordLimit}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error("sonmthing went wrong");
      } else {
        return response.json();
      }
    });
    setCurrentPage((prev) => prev + 1);
    setData(data);
    setLaoding(false);
    return data;
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
  }, [data]);

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
        {isLoading && <p>Loading....</p>}
      </div>
    </Fragment>
  );
};
export default InfinteScroll;
