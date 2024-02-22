const TestComponent = () => {
  const userName = "Sunny Rai";
  const writeLogic = () => {
    for (let i = 0; i <= 5; i++) {
      // some logic
    }
    if (userName) {
      //some logic
    }
  };
  // basically we can acess the variable in the JSX via {}
  return (
    <>
      <h1> testing jsx here</h1>
      {/* // valid  */}
      {userName}
      {/* // invalid */}
      {/* for(let i =0 ; i<= 5; i++){
        // some logic 
      }
      if (userName){
        //some logic 
      } */}
      {/* but we can use it in this way - itsd valid*/}
      {writeLogic()}
    </>
  );
};
export default TestComponent;
