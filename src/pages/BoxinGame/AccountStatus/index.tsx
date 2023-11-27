import { transferStatus } from "@/service/service";
import { Button, Form, Input, Modal, Table, message } from "antd";
import { useState } from "react";
interface AccountStatusProps {
  platType: string;
  playerId: string;
  currency: string;
}
export const AccountStatus = ({
  platType,
  playerId,
  currency,
}: AccountStatusProps) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [tableData, setTableData] = useState([]);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = (values) => {
    console.log("values", values);
    setLoading(true);
    const { orderId } = values;

    transferStatus({ playerId, currency, orderId })
      .then((data) => {
        console.log("data=", data);
        if (data.code === 10000) {
          message.success(data.msg);
          const res = data.data;
          setTableData([res]);
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
  const columns = [
    {
      title: "玩家账号",
      dataIndex: "playerId",
      key: "playerId",
      ellipsis: true,
    },
    {
      title: "订单号",
      dataIndex: "orderId",
      key: "orderId",
      ellipsis: true,
    },
    {
      title: "创建时间",
      dataIndex: "createTime",
      key: "createTime",
      ellipsis: true,
    },
    {
      title: "类型",
      dataIndex: "type",
      key: "type",
      render: (type) => {
        return type === "1" ? "转入" : "转出";
      },
      ellipsis: true,
    },
    {
      title: "转换额度",
      dataIndex: "amount",
      key: "amount",
      ellipsis: true,
    },
    {
      title: "转换后额度",
      dataIndex: "afterBalance",
      key: "afterBalance",
      ellipsis: true,
    },
  ];
  return (
    <>
      <Button type="primary" onClick={showModal}>
        转账钱包-转换状态
      </Button>

      <Modal
        open={open}
        title="转账钱包"
        width={500}
        footer={null}
        onCancel={handleCancel}
      >
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
          <Form.Item label="订单号" name="orderId">
            <Input />
          </Form.Item>
          <Form.Item>
            <div className="flex items-center justify-end">
              <Button type="primary" htmlType="submit" loading={loading}>
                查询
              </Button>
            </div>
          </Form.Item>
        </Form>
        <Table loading={loading} dataSource={tableData} columns={columns} />;
      </Modal>
    </>
  );
};
