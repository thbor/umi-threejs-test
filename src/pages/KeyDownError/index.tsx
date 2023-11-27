import { Button, Dropdown, Input, MenuProps, Modal } from "antd";
import { useState } from "react";

const KeyDownError = () => {
  const [visible, setVisible] = useState(false);
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <div onClick={() => setVisible(true)}>点击打开弹窗</div>,
    },
    {
      key: "2",
      label: <div onClick={() => setVisible(true)}>点击打开弹窗2</div>,
    },
  ];
  return (
    <>
      <Dropdown menu={{ items }} placement="bottomRight" arrow>
        <Button>查看更多</Button>
      </Dropdown>
      <Modal
        title="Basic Modal"
        open={visible}
        onCancel={() => setVisible(false)}
      >
        <Input placeholder={"这是一个input"} />
      </Modal>
    </>
  );
};
export default KeyDownError;
