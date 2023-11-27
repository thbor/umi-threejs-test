import { AccountStatus } from "@/pages/BoxinGame/AccountStatus";
import { AccountTransfer } from "@/pages/BoxinGame/AccountTransfer";
import { CreateUser } from "@/pages/BoxinGame/CreateUser";
import { CurrencySelector } from "@/pages/BoxinGame/CurrencySelector";
import { Games } from "@/pages/BoxinGame/Games";
import { Lang } from "@/pages/BoxinGame/Lang";
import { Left } from "@/pages/BoxinGame/Left";
import { SearchBalance } from "@/pages/BoxinGame/SearchBalance";
import { SearchQuota } from "@/pages/BoxinGame/SearchQuota";
import { SearchWalletBalance } from "@/pages/BoxinGame/SearchWalletBalance";
import { SearchBalanceAll } from "@/pages/BoxinGame/searchBalanceAll";
import { Form, Input, Radio } from "antd";
import { useState } from "react";
const gameJson = require("@/json/gameInfo.json");
export default function BoxinGame() {
  console.log("gameJson", gameJson);
  const defaultConfig = {
    // 语言
    lang: "zh_hans",
    // 游戏平台
    playType: gameJson[0].platType,
  };
  const [form] = Form.useForm();
  const formPlayerId = Form.useWatch("playerId", form);
  const formCurrency = Form.useWatch("currency", form);
  const formLang = Form.useWatch("lang", form);
  const formWalletType = Form.useWatch("walletType", form);
  const [activeGamePlatType, setActiveGamePlatType] = useState(
    defaultConfig.playType
  );

  return (
    <div className="h-[100vh] p-[5px]">
      <div className="flex items-center">
        <div className="flex items-center mr-[8px]">
          <div className="mr-[5px]">
            <CreateUser gameJson={gameJson} />
          </div>
        </div>
        <div className="flex items-center mr-[8px]">
          <Form
            form={form}
            name="basic"
            layout="inline"
            // labelCol={{ span: 4 }}
            // wrapperCol={{ span: 20 }}
            // style={{ maxWidth: 600 }}
            // onFinish={handleOk}
            autoComplete="off"
            initialValues={{
              playerId: "test0716",
              walletType: "1",
            }}
          >
            <Form.Item
              label="玩家账号"
              name="playerId"
              rules={[{ required: true, message: "请输入账号!" }]}
            >
              <Input placeholder="请输入玩家账号" />
            </Form.Item>

            <Form.Item
              label="货币"
              name="currency"
              rules={[{ required: true, message: "请输入货币!" }]}
            >
              <CurrencySelector platType={activeGamePlatType} data={gameJson} />
            </Form.Item>
            <Form.Item
              label="语言"
              name="lang"
              rules={[{ required: true, message: "请输入货币!" }]}
            >
              <Lang platType={activeGamePlatType} data={gameJson} />
            </Form.Item>
            <Form.Item
              label="钱包模式"
              name="walletType"
              rules={[{ required: true }]}
            >
              <Radio.Group>
                <Radio value={"1"}>转账钱包</Radio>
                <Radio value={"2"}>免转钱包</Radio>
              </Radio.Group>
            </Form.Item>
          </Form>
        </div>
      </div>
      <div className="my-[10px] flex items-center">
        <div className="mr-[10px]">
          <SearchBalance
            platType={activeGamePlatType}
            playerId={formPlayerId}
          />
        </div>

        <div className="mr-[10px]">
          <SearchWalletBalance
            playerId={formPlayerId}
            currency={formCurrency}
          />
        </div>
        <div className="mr-[10px]">
          <SearchQuota />
        </div>

        <div className="mr-[10px]">
          <SearchBalanceAll
            platType={activeGamePlatType}
            playerId={formPlayerId}
            currency={formCurrency}
          />
        </div>
        <div className="mr-[10px]">
          <AccountTransfer
            platType={activeGamePlatType}
            playerId={formPlayerId}
            currency={formCurrency}
          />
        </div>
        <div className="mr-[10px]">
          <AccountStatus
            platType={activeGamePlatType}
            playerId={formPlayerId}
            currency={formCurrency}
          />
        </div>
      </div>
      <div className="flex h-[100%]">
        <div className="w-1/6">
          <Left
            data={gameJson}
            activeGamePlatType={activeGamePlatType}
            handleChangePlatType={setActiveGamePlatType}
          />
        </div>
        <div className="flex-1">
          <div className="mt-[10px] px-[10px]">
            <div>
              {/*<Checkbox.Group*/}
              {/*  options={gameTypeOptions}*/}
              {/*  onChange={handleChangeGameType}*/}
              {/*  value={gameTypeCheckedList}*/}
              {/*/>*/}
            </div>
            <Games
              lang={formLang}
              playerId={formPlayerId}
              platType={activeGamePlatType}
              currency={formCurrency}
              gameJson={gameJson}
              walletType={formWalletType}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
