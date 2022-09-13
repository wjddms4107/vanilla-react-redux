import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

//countModifier: data를 수정하는 유일한 곳 | action: countModifier와 소통 하는 방법
//countModifier: countModifier가 return하는 것은 application의 state가 됨 
const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countModifier);

//store에 변화가 있을 때마다 감지해서 불려짐
const onChange = () => {
  number.innerText = countStore.getState();
};

//subscribe : store안에 있는 변화를 알 수 있게 해줌 <- 변화를 store에서 감지하고 싶으면 subscribe하면 돼
countStore.subscribe(onChange);

// dispatch : store와 action으로 커뮤니케이션함, action은 무조건 객체여야 해!! 그리고 무조건 type이 있어야 해!!
const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS});
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);

