# Redux, ReduxToolkit

Learning Vanilla-Redux and React-Redux, React-ReduxToolkit

- useSelect (= mapStateToProps) </br>
getState처럼 store에서 정보를 가져온다. </br>

- useDispatch (= mapDispatchToProps) </br>
action을 바꿔 state를 바꾼다. </br>

< ReduxToolkit >

1. createAction </br>
자동적으로 어떠한 type의 action을 생성할 것이고 내가 주는 값을 payload 한다. </br>

2. createReducer </br>
switch 등 이러한 것들을 사용하는 대신 createReducer를 사용한다. </br>
선택지 두 개 </br>
1.state를 mutate하기  </br>
2.새로운 state "return"하기(그래서 deleteToDo는 return해줌)</br>
**현재의 state를 mutate 시키기** ⇒ 툴킷에서는 이게 가능! 왜냐 immer.js와 함께 뒤에서 작동하고 있다. </br>

3. configureStore </br>
Redux Developer Tools 사용 가능! </br>

4. createSlice </br>
모든 것을 캡슐화해줘서 정말 좋다. </br>
name, initialState, reducers, state, action 등등이 있다. </br>
선택지 두 개 </br>
1.state를 mutate하기  </br>
2.새로운 state "return"하기(그래서 deleteToDo는 return해줌)</br>
**현재의 state를 mutate 시키기** ⇒ 툴킷에서는 이게 가능! 왜냐 immer.js와 함께 뒤에서 작동하고 있다. </br>

