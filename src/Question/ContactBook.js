import useFetchData from "../Hooks/UseFetchData";

const ContactBook = () => {
  const handleDeleteContactInfo = () => {
    console.log("delete button clicked");
  };
  const url = "https://jsonplaceholder.typicode.com/photos";

  const { data, isLoading } = useFetchData(url);
  return (
    <div className="card card-container d-flex">
      <ul className="list-group">
        {data.map((item, index) => {
          return (
            <>
              <li className="list-item">
                <img
                  src={item.url}
                  alt=""
                  style={{ height: "30px", width: "30px" }}
                />
                <label>
                  <h1>{item.title}</h1>
                </label>
                <button
                  onClick={handleDeleteContactInfo}
                  className="btn btn-danger"
                >
                  delete
                </button>
              </li>
            </>
          );
        })}
        {isLoading && <p>Loading ....</p>}
      </ul>
    </div>
  );
};
export default ContactBook;
