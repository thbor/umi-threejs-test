import { getQuota } from "@/service/service";
import { Button, message } from "antd";
import { useState } from "react";

export const SearchQuota = () => {
  const [loading, setLoading] = useState(false);
  const [balance, setBalance] = useState(0);
  const handleSearch = () => {
    setLoading(true);
    getQuota()
      .then((data) => {
        console.log("data=", data);
        if (data.code === 10000) {
          message.success(data.msg);
          setBalance(data.data.balance);
        } else {
          message.error(data.msg);
          setBalance(0);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Button
        className="mr-[10px]"
        type="primary"
        onClick={handleSearch}
        loading={loading}
      >
        quota
      </Button>
      quota:{balance}
    </>
  );
};
