import { Select } from "antd";

const filters = [
  {
    value: "all",
    label: "All",
  },
  {
    value: "active",
    label: "Active",
  },
  {
    value: "done",
    label: "Done",
  },
];

function FIlterSelector({ onChange }) {
  return (
    <Select
      defaultValue="active"
      style={{ width: 80, flex: "none" }}
      onChange={onChange}
      options={filters}
    />
  );
}

export default FIlterSelector;
