import { Fragment } from "react";

const GridLayout = () => {
  return (
    <Fragment>
      <h1> this is going to be grid Layout</h1>
      <hr />
      <div className="grid-container">
        <div className="item item-1">item1</div>
        <div className="item item-2">item2</div>
        <div className="item item-3">item3</div>
        <div className="item item-4">item4</div>
        <div className="item item-5">item5</div>
      </div>
    </Fragment>
  );
};
export default GridLayout;
