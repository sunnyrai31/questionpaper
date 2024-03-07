import { Fragment, useState, useRef } from "react";
import debounce from "./utils";

const Search = () => {
  const data = [
    {
      category: "Electronics",
      productName: "keychrone machenical keyboard",
      price: "94000",
      availableIn: ["Amazon", "Flikart"],
      productId: "elec-keyChrone-123",
    },
    {
      category: "Furniture",
      productName: "Green soul monster chair",
      price: "19000",
      availableIn: ["Amazon"],
      productId: "furn-greenSoul-monster-s23",
    },
    {
      category: "Electronics",
      productName: "BenQ 27 Inch Monitor",
      price: "24000",
      availableIn: ["Amazon", "Flikart"],
      productId: "elec-benQ-27-ifs",
    },
  ];
  const [productData, setProductData] = useState(data);
  const _inputRef = useRef(null);
  const SearchItemFn = (searchStr) => {
    const filterArr = data.filter((item) => {
      return item.productName.toLowerCase().includes(searchStr);
    });
    console.log("filtered result", filterArr);
    setProductData(filterArr);
  };

  const debouncedSearchItem = debounce((value) => {
    SearchItemFn(value);
  });
  const handleSearchBtnClick = () => {
    console.log(_inputRef.current?.value);
    debouncedSearchItem(_inputRef.current?.value);
  };

  const prepareItemList = (data) => {
    return data.map((item) => {
      return (
        <Fragment>
          <li key={item.productId} style={{ listStyle: "none" }}>
            <span>
              <h4> product name : {item.productName}</h4>
            </span>
            <span>
              <h5> price : {item.price}</h5>
            </span>
            <span>
              <h6> Available in : {item.availableIn.join(", ")}</h6>
            </span>
          </li>
          <hr />
        </Fragment>
      );
    });
  };
  return (
    <Fragment>
      <h1> Search Item </h1>
      <input
        type="text"
        ref={_inputRef}
        onKeyDown={(e) => {
          debouncedSearchItem(e.target.value);
        }}
        placeholder="Search your item"
        style={{
          width: "25rem",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      ></input>
      <button onClick={handleSearchBtnClick} className="btn btn-primary m-2">
        Search
      </button>
      <div className="container">
        <ul>{prepareItemList(productData)}</ul>
      </div>
    </Fragment>
  );
};
export default Search;
