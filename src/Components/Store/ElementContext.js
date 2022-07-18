import React, { useState } from "react";
const ElementContext = React.createContext();

const DUMMY_ITEMS = [
  {
    id: 1,
    title: "Paris",
    color: "#54f542",
    text: "Some long text",
  },
  {
    id: 2,
    title: "New York",
    color: "#f54257",
    text: "Some long text",
  },
  {
    id: 3,
    title: "Lahore",
    color: "#4275f5",
    text: "Some long text",
  },
  {
    id: 4,
    title: "Multan",
    color: "#f5ef42",
    text: "Some long text",
  },
];
const defaultObj = { id: "", title: "", color: "", text: "" };

export const ElementContextProvider = (props) => {
  const [elements, setElements] = useState(DUMMY_ITEMS);
  const [modifyElement, setModifyElement] = useState(defaultObj);
  const [counter, setCounter] = useState(5);

  const addElementHandler = (element) => {
    let editItemIndex = elements.findIndex((e) => e.id === element.id);

    if (elements[editItemIndex]) {
      elements[editItemIndex] = {
        ...elements[editItemIndex],
        title: element.title,
        color: element.color,
        text: element.text,
      };
      setElements([...elements]);
    } else {
      setCounter((prevState) => prevState + 1);
      setElements([...elements, { ...element, id: counter }]);
    }
  };
  const removeElementHandler = (id) => {
    setModifyElement(defaultObj);
    setElements([...elements.filter((element) => element.id !== id)]);
  };
  const modifyElementHandler = (element) => {
    setModifyElement(element);
  };
  return (
    <ElementContext.Provider
      value={{
        elements,
        modifyElement,
        addElementHandler,
        removeElementHandler,
        modifyElementHandler,
      }}
    >
      {props.children}
    </ElementContext.Provider>
  );
};

export default ElementContext;
