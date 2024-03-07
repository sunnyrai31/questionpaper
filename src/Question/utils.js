/**
 * what this function does.
 * so to avoid the multiple event hit, we are clearing the timeout using clearTimerout,
 * this is becasue to avoid the mutliple hit.
 * and  when user stop hitting the key, after 300ms this functin(debounce) will fire the callback (searchItemfn)
 * and filtered result will come on the screen.
 * @param {*} callback
 * @param {*} deplay
 * @returns
 */
const debounce = (callback, deplay = 500) => {
  let timerId;
  return (...arg) => {
    console.log("timer will cancel here");
    clearInterval(timerId);
    timerId = setTimeout(() => {
      callback.apply(this, arg);
    }, deplay);
  };
};
export default debounce;
