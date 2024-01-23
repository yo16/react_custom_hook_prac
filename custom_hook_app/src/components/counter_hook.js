
// [【React】カスタムフックと本気で向き合ってみた #React - Qiita](https://qiita.com/cheez921/items/af5878b0c6db376dbaf0)

import { useState, useEffect } from "react";

const useCounter = () => {
    const [count, setCount] = useState(0);

    // useEffectの起動時の処理を使って、１秒ずつ増える
    useEffect(() => {
        // 初期化時のみの処理で、setIntervalでタイマー起動
        const timer = setInterval(() => {
            setCount((count) => count + 1);
        }, 1000);

        // returnでアンマウント処理
        // setIntervalを無効化
        return () => {
            clearInterval(timer);
        };
    }, []);

    return count;
};

export default useCounter;
