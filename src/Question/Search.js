import { Fragment, useState } from "react";

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
  const SearchItemFn = (searchStr) => {
    const filterArr = data.filter((item) => {
      return item.productName.toLowerCase().includes(searchStr);
    });
    console.log("filtered result", filterArr);
    setProductData(filterArr);
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
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            SearchItemFn(e.target.value);
          }
        }}
        placeholder="Search your item"
      ></input>
      <div className="data-contaienr">
        <ul>{prepareItemList(productData)}</ul>
      </div>
    </Fragment>
  );
};
export default Search;
