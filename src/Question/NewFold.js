// New Fold is company and these are the question they have asked.
import { lazy, Suspense, useState } from "react";
const NewFold = () => {
  const [isloaded, setLoaded] = useState(false);
  const NewCompoenent = lazy(() => import("./FlexLayout"));
  const loadComponent = () => {
    const _isloaded = isloaded;
    _isloaded ? setBtnText("load Component") : setBtnText("unmound Component");
    setLoaded(!_isloaded);
  };
  const [btnText, setBtnText] = useState("load Component");
  return (
    <>
      <h1>Hi</h1>
      <label>
        this is example, i am going to show that lazy loading of component and
        unmounting of the component
      </label>
      <hr />
      <button onClick={loadComponent} className="btn btn-primary">
        {btnText}
      </button>
      {isloaded && (
        <Suspense fallback={<div>Loading.... </div>}>
          <NewCompoenent />
        </Suspense>
      )}
    </>
  );
};
export default NewFold;
// gatsby , ssr, saga , node, server sent event.
