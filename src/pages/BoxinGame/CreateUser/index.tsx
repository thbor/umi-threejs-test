import { CurrencySelector } from "@/pages/BoxinGame/CurrencySelector";
import { GameTypeSelector } from "@/pages/BoxinGame/GameTypeSelector";
import { createUser } from "@/service/service";
import { Button, Form, Input, message, Modal } from "antd";
import { useState } from "react";

interface CreateUserProps {
  gameJson: any[];
}

export const CreateUser = ({ gameJson }: CreateUserProps) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const platTypeFormValue = Form.useWatch("platType", form);
  const showModal = () => {
    setOpen(true);
  };

  const handleOk = (values) => {
    setLoading(true);
    createUser(values)
      .then((data) => {
        if (data.code === 10000) {
          message.success(data.msg);
          setOpen(false);
        } else {
          message.error(data.msg);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        创建玩家
      </Button>

      <Modal open={open} title="创建玩家" footer={null} onCancel={handleCancel}>
        <Form
          form={form}
          name="basic"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          style={{ maxWidth: 600 }}
          onFinish={handleOk}
          // onFinishFailed={handleCancel}
          autoComplete="off"
        >
          <Form.Item
            label="账号"
            name="playerId"
            rules={[{ required: true, message: "请输入账号!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="游戏平台"
            name="platType"
            rules={[{ required: true, message: "请输入游戏平台!" }]}
          >
            <GameTypeSelector />
          </Form.Item>
          <Form.Item
            label="货币"
            name="currency"
            rules={[{ required: true, message: "请输入货币!" }]}
          >
            <CurrencySelector platType={platTypeFormValue} data={gameJson} />
          </Form.Item>

          <Form.Item>
            <div className="flex items-center justify-end">
              <Button key="back" className="mr-[10px]">
                取消
              </Button>
              <Button type="primary" htmlType="submit" loading={loading}>
                确定
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
