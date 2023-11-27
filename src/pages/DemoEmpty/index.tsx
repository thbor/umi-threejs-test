import { CaretDownOutlined } from "@ant-design/icons";
import { Select } from "antd";

export default function DemoEmpty() {
  const dataSource = [
    {
      key: "1",
      name: "",
      age: 0,
      address: "",
    },
    {
      key: "2",
      name: "胡彦祖",
      age: 42,
      address: "西湖区湖底公园1号",
    },
    {
      key: "3",
      name: "",
      age: 0,
      address: "",
    },
  ];

  const columns = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "住址",
      dataIndex: "address",
      key: "address",
      render: (address) => <div>{address}</div>,
    },
  ];

  return (
    <>
      <Select
        placeholder="请选择"
        className="w-[200px]"
        suffixIcon={<CaretDownOutlined className="ant-select-suffix" />}
        // suffixIcon={<CaretDownOutlined  />}
      >
        <Option>1</Option>
        <Option>2</Option>
        <Option>3</Option>
      </Select>
      {/*<Table dataSource={dataSource} columns={columns} />*/}
    </>
  );
}
