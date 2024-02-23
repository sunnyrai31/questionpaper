//Question - preparea list, show have check box on each list, on checkbox check delete button should be visiable.
// upo delete click, item should get deleted from the list.
import { useState } from "react";
const QuestionDeleteItem = () => {
  const listItem = [
    {
      name: "sunny",
      id: "cs123X",
    },
    {
      name: "rohit",
      id: "cs124Y",
    },
  ];
  const [listItemArr, setListItemArr] = useState(listItem);
  const [selectedItem, setSelectedItem] = useState({});
  const handleInputCheck = (e, id) => {
    setSelectedItem((prevSelectedItem) => {
      return {
        ...prevSelectedItem,
        [id]: e.target.checked,
      };
    });
  };

  const handleDeleteListItem = (e, id) => {
    console.log("delete", e.target.value, id);
    const filterItem = listItemArr.filter((item) => item.id !== id);
    setListItemArr(filterItem);
  };
  const handleResetClick = () => {
    setSelectedItem({});
    setListItemArr(listItem);
  };
  const prepareListTemplate = () => {
    return (
      <ul className="list-unstyled border w-auto m-2">
        {listItemArr.length > 0 ? (
          listItemArr.map((item, index) => {
            return (
              <>
                <li key={`${item.id}-${index}`}>
                  <input
                    id={item.id}
                    name={item.id}
                    type="checkbox"
                    checked={selectedItem[item.id] || false}
                    onChange={(e) => {
                      handleInputCheck(e, item.id);
                    }}
                  />

                  <label htmlFor={item.id} className="p-2">
                    {item.name}
                  </label>

                  {selectedItem[item.id] && (
                    <button
                      className="btn btn-danger"
                      onClick={(e) => {
                        handleDeleteListItem(e, item.id);
                      }}
                    >
                      delete
                    </button>
                  )}
                </li>
              </>
            );
          })
        ) : (
          <p className="text-danger">List is empty</p>
        )}
      </ul>
    );
  };
  return (
    <>
      <button className="btn btn-primary" onClick={handleResetClick}>
        reset
      </button>
      {prepareListTemplate()}
    </>
  );
};
export default QuestionDeleteItem;
