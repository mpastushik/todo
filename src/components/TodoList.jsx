import { Input, Flex, Button, List } from "antd";
import Title from "antd/es/typography/Title";
import { useEffect, useState } from "react";
import ListItem from "./LIstItem/ListItem";
import FIlterSelector from "./FIlterSelector";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [filter, setFilter] = useState("active");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (filter === "all") setFilteredTodos(todos);
    if (filter === "active")
      setFilteredTodos(todos.slice().filter((item) => !item.checked));
    if (filter === "done")
      setFilteredTodos(todos.slice().filter((item) => item.checked));
  }, [filter, todos]);

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([
        ...todos,
        { id: Date.now(), text: inputValue.trim(), checked: false },
      ]);
      setInputValue("");
    }
  };

  const handleToggleItem = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleChange = (value) => {
    setFilter(value);
  };

  return (
    <Flex
      style={{ height: "100vh", width: "100vw" }}
      align="center"
      justify="center"
      vertical
      gap="large"
    >
      <Title>Todo list</Title>
      <Flex style={{ width: "70vw" }} justify="center" gap="small">
        <Input
          placeholder="Enter a new todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onPressEnter={handleAddTodo}
          style={{
            width: "15vw",
            minWidth: 170,
          }}
        />
        <Button type="primary" onClick={handleAddTodo}>
          Add
        </Button>
        <FIlterSelector onChange={handleChange} />
      </Flex>
      <List
        style={{
          maxWidth: "400px",
          height: "50vh",
          overflowY: "auto",
        }}
        dataSource={filteredTodos}
        renderItem={(item) => (
          <ListItem
            item={item}
            key={item.id}
            onToggle={handleToggleItem}
            onDelete={handleDeleteTodo}
          />
        )}
      />
    </Flex>
  );
};

export default TodoList;
