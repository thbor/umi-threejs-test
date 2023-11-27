import { getDemoUrl, getGameCode, getGameUrl } from "@/service/service";
import "animate.css";
import { Checkbox, Empty, Input, message } from "antd";
import classNames from "classnames";
import { useEffect, useState } from "react";
import styles from "./index.less";

interface GamesProps {
  lang: string;
  platType: string;
  currency: string;
  playerId: string;
  gameJson: any;
  walletType: string;
}
export const Games = ({
  playerId,
  lang = "zh_hans",
  platType = "CNY",
  currency,
  gameJson,
  walletType,
}: GamesProps) => {
  const gameTypeOptions = gameJson
    .find((f) => f.platType === platType)
    .gameType.map((type) => {
      return { label: type.name, value: type.code };
    });
  const [gameTypeCheckedList, setGameTypeCheckedList] =
    useState(gameTypeOptions);
  const handleChangeGameType = (list) => {
    setGameTypeCheckedList(list);
  };
  useEffect(() => {
    handleChangeGameType([]);
  }, [platType]);

  const [gameCodes, setGameCodes] = useState([]);
  const [gameName, setGameName] = useState("");
  const handleGoGame = (game) => {
    const data = {
      playerId,
      currency,
      platType: game.platType || platType,
      gameType: game.gameType,
      gameCode: game.gameCode,
      ingress: game.ingress,
      lang,
      walletType,
    };
    getGameUrl(data).then((data) => {
      if (data.code === 10000) {
        message.success(data.msg);
        const res = data.data;
        if (res.url) {
          window.open(res.url, "_blank");
        } else {
          message.error("没有url");
        }
      } else {
        message.error(data.msg);
      }
    });
  };
  const handleGoDemoGame = (game) => {
    const data = {
      currency,
      platType: game.platType || platType,
      gameType: game.gameType,
      gameCode: game.gameCode,
      ingress: game.ingress,
      lang,
      walletType,
    };
    getDemoUrl(data).then((data) => {
      if (data.code === 10000) {
        message.success(data.msg);
        const res = data.data;
        if (res.url) {
          window.open(res.url, "_blank");
        } else {
          message.error("没有url");
        }
      } else {
        message.error(data.msg);
      }
    });
  };
  const filterGameType = (gameType: string) => {
    return gameType && gameTypeCheckedList?.length
      ? gameTypeCheckedList.map((it) => it + "")?.includes(gameType + "")
      : true;
  };
  const filterSearchName = (data) => {
    const list = data.filter(
      (it) =>
        filterGameType(it.gameType) &&
        (it.gameName["zh_hans"]?.indexOf(gameName) > -1 ||
          it.gameName["en"]?.indexOf(gameName) > -1)
    );
    return list;
  };
  const getUniqGameTypes = (gameCodesRes) => {
    return Array.from(new Set(gameCodesRes.map((it) => it.gameType + "")));
  };

  const filterGameTypeOptionsByGameCodes = (gameCodesRes) => {
    const gameTypes = getUniqGameTypes(gameCodesRes);
    const playTypesGameTypeOptions = gameTypeOptions.filter((op) =>
      gameTypes.includes(op.value + "")
    );
    return playTypesGameTypeOptions;
  };
  useEffect(() => {
    //TODO:gamecodes错误提示
    getGameCode({ platType }).then((data) => {
      if (data.code === 10000) {
        message.success(data.msg);
        const res = data.data;
        setGameCodes(res);
      } else {
        message.error(data.msg);
      }

      // const nextOptions = filterGameTypeOptionsByGameCodes(res);
      // setGameTypeCheckedList(nextOptions);
    });
  }, [platType]);
  const GameContainer = ({ it }: any) => {
    return (
      <div key={it.gameCode} className="mr-[10px] mb-[10px]">
        <div
          className={classNames(
            "relative hover:bg-slate-200 cursor-pointer rounded-t-lg",
            styles.box
          )}
        >
          <div className="group w-[170px] h-[180px]">
            <div className="p-[10px] pb-[0] group-hover:scale-102">
              {it.imageUrl?.["zh_hans"]?.square ? (
                <img
                  src={it.imageUrl?.["zh_hans"]?.square}
                  className="rounded-[3px] group-hover:opacity-25 duration-300 transition"
                />
              ) : (
                <Empty
                  description={it.imgDes || "暂无图片"}
                  image={it.imgDes ? it.descUrl : Empty.PRESENTED_IMAGE_DEFAULT}
                />
              )}

              <div
                onClick={() => handleGoGame(it)}
                className="rounded opacity-0 absolute top-[70%] w-[calc(100%-20px)] flex items-center justify-center transition-opacity duration-500 group-hover:opacity-100 animate__animated"
              >
                <div className="w-[90px] py-[5px] px-[10px] rounded-[15px] text-center text-stone-600 bg-white hover:text-white hover:bg-blue-500">
                  进入游戏
                </div>
              </div>
              <div
                onClick={() => handleGoDemoGame(it)}
                className="rounded opacity-0 absolute top-[30%] w-[calc(100%-20px)] flex items-center justify-center transition-opacity duration-500 group-hover:opacity-100 animate__animated"
              >
                <div className="w-[90px] py-[5px] px-[10px] rounded-[15px] text-center text-stone-600 bg-white hover:text-white hover:bg-blue-500">
                  试玩游戏
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[5px]">
          <div>{it.gameName?.["zh_hans"]}</div>
          <div title={it.gameName?.["en"]} className="truncate max-w-[150px]">
            {it.gameName?.["en"]}
          </div>
        </div>
      </div>
    );
  };

  const gameTypes =
    gameJson.find((it) => it.platType === platType)?.gameType || [];
  return (
    <div className="relative">
      <Checkbox.Group
        options={
          gameCodes
            ? filterGameTypeOptionsByGameCodes(gameCodes)
            : gameTypeOptions
        }
        onChange={handleChangeGameType}
        value={gameTypeCheckedList}
      />
      <Input
        // className="absolute right-[0] top-[-30px]"
        style={{ width: 400 }}
        placeholder="请输入游戏名称"
        width={200}
        value={gameName}
        onChange={(e) => setGameName(e.target.value)}
      />
      {/*视讯:1，体育:4，电竞:5*/}
      <div className="flex flex-wrap mt-[10px]">
        {gameTypes.map((it) => (
          <GameContainer
            it={{
              platType: platType,
              gameType: it.code + "",
              //FIXME:默认写了个3，不确定
              ingress: "3",
              imgDes: it.name,
              descUrl: require(`../../../assets/${it.name}.png`),
            }}
          />
        ))}
      </div>
      <div className="flex flex-wrap mt-[10px]">
        {filterSearchName(gameCodes || []).map((it) => {
          return <GameContainer it={it} key={it.gameCode} />;
        })}
      </div>
    </div>
  );
};
