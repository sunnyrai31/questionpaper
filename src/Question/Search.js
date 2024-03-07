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

  /**
   * what this function does.
   * so to avoid the multiple event hit, we are clearing the timeout using clearTimerout,
   * this is becasue to avoid the mutliple hit.
   * and  when user stop hitting the key, after 300ms this functin(debounce) will fire the callback (searchItemfn)
   * and filtered result will come on the screen.
   * @param {*} callback
   * @param {*} deplay
   * @returns
   *
   */
  const debounce = (callback, deplay = 300) => {
    let timerId;
    return (...arg) => {
      console.log("timer will cancel here");
      clearInterval(timerId);
      timerId = setTimeout(() => {
        callback.apply(this, arg);
      }, deplay);
    };
  };

  const debouncedSearchItem = debounce((value) => {
    SearchItemFn(value);
  });

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
          //   instead of doing like this we can do with the debounce here
          //   if (e.key === "Enter") {
          //     SearchItemFn(e.target.value);
          //   }
          // now lets see how to achieve seach functionality with debounce.
          debouncedSearchItem(e.target.value);
        }}
        placeholder="Search your item"
        style={{
          width: "25rem",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      ></input>
      <div className="container">
        <ul>{prepareItemList(productData)}</ul>
      </div>
    </Fragment>
  );
};
export default Search;
