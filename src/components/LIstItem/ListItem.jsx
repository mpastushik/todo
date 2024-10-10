import { DeleteOutlined } from "@ant-design/icons";
import { Button, Checkbox, Typography } from "antd";
import style from "./ListItem.module.css";

function ListItem({ item, onToggle, onDelete }) {
  return (
    <li className={style.itemContainer}>
      <Checkbox checked={item.checked} onChange={() => onToggle(item.id)} />
      <Typography.Text
        style={{
          width: "100%",
          textDecoration: item.checked ? "line-through" : "none",
          color: item.checked ? "gray" : "inherit",
          fontSize: 16,
        }}
      >
        {item.text}
      </Typography.Text>
      <Button type="link" onClick={() => onDelete(item.id)}>
        <DeleteOutlined style={{ color: "#25283D" }} />
      </Button>
    </li>
  );
}

export default ListItem;
