import { Select } from "antd";
import { useEffect, useState } from "react";
const currency = require("@/json/currency.json");

interface CurrencyProps {
  platType: string;
  value: any;
  onChange: (value: any) => void;
  data: any;
}
export const CurrencySelector = ({
  platType,
  value,
  onChange,
  data,
}: CurrencyProps) => {
  const options = (
    data.find((it) => it.platType === platType)?.currency || []
  ).map((curr) => {
    return { label: `${curr.name}-${curr.code}`, value: curr.code };
  });
  const [currentCurrency, setCurrentCurrency] = useState(
    value || options[0]?.value
  );

  useEffect(() => {
    if (value) {
      onChange?.(value);
      return;
    }
    onChange?.(options[0]?.value);
    setCurrentCurrency(options[0]?.value);
  }, [platType, value]);

  return (
    <Select
      showSearch
      optionFilterProp="children"
      filterOption={(input, option) => (option?.label ?? "").includes(input)}
      value={currentCurrency}
      placeholder="请选择货币类型"
      options={options}
      onChange={(val) => {
        onChange?.(val);
        setCurrentCurrency(val);
      }}
      style={{ minWidth: 120 }}
    />
  );
};
