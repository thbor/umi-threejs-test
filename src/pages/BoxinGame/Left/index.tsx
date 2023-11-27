import styles from "@/pages/BoxinGame/index.less";
import classNames from "classnames";
const gamePlatTypes = require("@/json/gamePlatType.json");

interface LeftProps {
  activeGamePlatType: string;
  handleChangePlatType: (platType: string) => void;
  data;
}
export const Left = ({
  activeGamePlatType,
  handleChangePlatType,
  data,
}: LeftProps) => {
  return (
    <div>
      {data.map((it) => (
        <div
          key={it.platType}
          onClick={() => handleChangePlatType(it.platType)}
          className={classNames(
            "h-[40px] hover:bg-slate-100 my-[5px] flex items-center justify-center",
            activeGamePlatType === it.platType ? "bg-slate-100" : "",
            styles["plat-type"]
          )}
        >
          {it.platName}
        </div>
      ))}
    </div>
  );
};
