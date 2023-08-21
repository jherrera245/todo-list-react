import { Provider } from "react-redux";
import FormTodo from "./components/FormTodo";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { store } from "./reduxtlk/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <Header />
        <div className="row">
          <FormTodo />
          <TodoList />
        </div>
      </div>
    </Provider>
  );
};

export default App;
