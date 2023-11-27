import { gamePlatTypes } from "@/common/util";
import { Select } from "antd";

interface GameTypeSelectorProps {
  value: any;
  onChange: (value: any) => void;
}
export const GameTypeSelector = ({
  value,
  onChange,
}: GameTypeSelectorProps) => {
  const options = gamePlatTypes.map((it) => {
    return { label: it.name, value: it.platType };
  });

  return (
    <Select
      showSearch
      optionFilterProp="children"
      filterOption={(input, option) => (option?.label ?? "").includes(input)}
      value={value}
      placeholder="请选择游戏平台"
      options={options}
      onChange={(value) => onChange?.(value)}
      style={{ minWidth: 120 }}
    />
  );
};
