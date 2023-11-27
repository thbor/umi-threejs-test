import { getBalance } from "@/service/service";
import { Button, message } from "antd";
import { useEffect, useState } from "react";
interface SearchBalanceProps {
  platType: string;
  playerId: string;
  currency: string;
}
export const SearchBalance = ({
  platType,
  playerId,
  currency,
}: SearchBalanceProps) => {
  const [loading, setLoading] = useState(false);
  const [balance, setBalance] = useState(0);

  const handleSearch = () => {
    setLoading(true);
    getBalance({ platType, playerId, currency })
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
  useEffect(() => {
    setBalance(0);
  }, [playerId, currency]);
  useEffect(() => {
    if (playerId) {
      handleSearch();
    }
  }, [platType]);
  return (
    <>
      <Button
        className="mr-[10px]"
        type="primary"
        onClick={handleSearch}
        loading={loading}
        disabled={playerId && currency && platType}
      >
        查询余额
      </Button>
      余额:{balance}
    </>
  );
};
