import { getBalanceAll } from "@/service/service";
import { Button, Modal, Table, message } from "antd";
import { useEffect, useState } from "react";
interface SearchBalanceAllProps {
  platType: string;
  playerId: string;
  currency: string;
}
export const SearchBalanceAll = ({
  platType,
  playerId,
  currency,
}: SearchBalanceAllProps) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [tableData, setTableData] = useState([]);
  const showModal = () => {
    setOpen(true);
    handleSearch();
  };
  const handleSearch = () => {
    setLoading(true);
    getBalanceAll({ platType, playerId, currency })
      .then((data) => {
        console.log("data=", data);
        if (data.code === 10000) {
          message.success(data.msg);
          const res = data.data;
          const tableSource = Object.entries(res).map(([platType, balance]) => {
            return {
              key: platType,
              platType,
              balance,
            };
          });
          setTableData(tableSource);
        } else {
          message.error(data.msg);
          setTableData([]);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    setTableData([]);
  }, [playerId, currency]);
  useEffect(() => {
    if (playerId) {
      // handleSearch();
    }
  }, [platType]);

  const handleCancel = () => {
    setOpen(false);
  };
  const columns = [
    {
      title: "平台",
      dataIndex: "platType",
      key: "platType",
    },
    {
      title: "余额",
      dataIndex: "balance",
      key: "balance",
    },
  ];
  return (
    <>
      <Button type="primary" onClick={showModal}>
        一键查询余额
      </Button>

      <Modal
        open={open}
        title={`${playerId}的余额(${currency})`}
        footer={null}
        onCancel={handleCancel}
      >
        <Table loading={loading} dataSource={tableData} columns={columns} />;
      </Modal>
    </>
  );
};
