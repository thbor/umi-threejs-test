import { Select } from "antd";
import { useEffect, useState } from "react";
const lang = require("@/json/lang.json");

interface LangProps {
  platType: string;
  data: any;
  onChange: (value: any) => void;
  value: any;
}
export const Lang = ({ platType, data, onChange, value }: LangProps) => {
  // const options = Object.entries(lang?.[platType] || {}).map(
  //   ([label, value]) => {
  //     return {
  //       label: `${label}-${value}`,
  //       value,
  //     };
  //   }
  // );
  const options = (data.find((it) => it.platType === platType)?.lang || []).map(
    (curr) => {
      return { label: `${curr.name}-${curr.code}`, value: curr.code };
    }
  );
  const [currentLang, setCurrentLang] = useState(options[0]?.value);

  useEffect(() => {
    setCurrentLang(options[0]?.value);
    onChange?.(options[0]?.value);
  }, [platType]);
  return (
    <Select
      showSearch
      optionFilterProp="children"
      filterOption={(input, option) => (option?.label ?? "").includes(input)}
      value={value || currentLang}
      placeholder="请选择语言"
      options={options}
      onChange={(val) => {
        setCurrentLang(val);
        onChange?.(val);
      }}
      style={{ minWidth: 120 }}
    />
  );
};
