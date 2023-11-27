import { transfer } from "@/service/service";
import { Button, Form, Input, InputNumber, Modal, Radio, message } from "antd";
import { useState } from "react";
interface SearchAccountProps {
  platType: string;
  playerId: string;
  currency: string;
}
export const AccountTransfer = ({
  platType,
  playerId,
  currency,
}: SearchAccountProps) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = (values) => {
    setLoading(true);
    const { type, amount, orderId } = values;

    transfer({
      platType,
      playerId,
      currency,
      type,
      amount,
      orderId,
    })
      .then((data) => {
        if (data.code === 10000) {
          message.success(data.msg);
          // const res = data.data;
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
        转账钱包-额度转换
      </Button>

      <Modal open={open} title="转账钱包" footer={null} onCancel={handleCancel}>
        <Form
          form={form}
          name="basic"
          autoComplete="off"
          initialValues={{ type: "1" }}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          style={{ maxWidth: 600 }}
          onFinish={handleOk}
        >
          <Form.Item label="借入/借出" name="type" rules={[{ required: true }]}>
            <Radio.Group>
              <Radio value={"1"}>借入</Radio>
              <Radio value={"2"}>借出</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="金额"
            name="amount"
            rules={[{ required: true, message: "请输入金额!" }]}
          >
            <InputNumber min={1} />
          </Form.Item>

          <Form.Item label="订单号" name="orderId">
            <Input />
          </Form.Item>
          <Form.Item>
            <div className="flex items-center justify-end">
              <Button key="back" className="mr-[10px]" onClick={handleCancel}>
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
