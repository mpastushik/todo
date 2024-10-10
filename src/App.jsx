import { ConfigProvider } from "antd";
import TodoList from "./components/TodoList";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#B6465F",
          colorText: "#25283D",
        },
      }}
    >
      <TodoList />
    </ConfigProvider>
  );
}

export default App;
