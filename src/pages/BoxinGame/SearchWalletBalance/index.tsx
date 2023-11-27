import { walletBalance } from "@/service/service";
import { Button, message } from "antd";
import { useEffect, useState } from "react";
interface SearchBalanceProps {
  playerId: string;
  currency: string;
}
export const SearchWalletBalance = ({
  playerId,
  currency,
}: SearchBalanceProps) => {
  const [loading, setLoading] = useState(false);
  const [balance, setBalance] = useState(0);
  console.log(1234, playerId);
  const handleSearch = () => {
    console.log("playerId", playerId);
    console.log("currency", currency);
    setLoading(true);
    walletBalance({ playerId, currency })
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
    if (playerId && currency) {
      setBalance(0);
      handleSearch();
    }
  }, [playerId, currency]);
  return (
    <>
      <Button
        className="mr-[10px]"
        type="primary"
        onClick={handleSearch}
        loading={loading}
        disabled={playerId && currency}
      >
        walletBalance
      </Button>
      钱包:{balance}
    </>
  );
};
