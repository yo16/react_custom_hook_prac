import { useRef, useState } from "react";
import useMyInput from "./addColorForm_hook";

// 制御されていないコンポーネント版
export function AddColorFormUncontrolled({ onNewColor = f => f }){
    // refオブジェクトを作って、inputタグのref=に設定する
    const txtTitle = useRef();
    const hexColor = useRef();

    const submit = e => {
        e.preventDefault();
        // refオブジェクトをinputタグのref=に入れてると、
        // txtTitle.current.valueへアクセス（読み書き）できる
        const title = txtTitle.current.value;
        const color = hexColor.current.value;
        onNewColor(title, color);
        // でもここで直接、valueを書き換えちゃうと、
        // 「制御されていないコンポーネント」と呼ばれてしまう
        txtTitle.current.value = "";
        hexColor.current.value = "#000000";
    };

    return (
        <form onSubmit={submit}>
            <input
                ref={ txtTitle }
                type="text"
                placeholder="color title..."
                required
            />
            <input
                ref={ hexColor }
                type="color"
                required
            />
            <button>ADD!</button>
        </form>
    );
};

// 制御されているコンポーネント版
export function AddColorForm({ onNewColor = f => f }){
    const [title, setTitle] = useState("");
    const [color, setColor] = useState("#000000");

    const submit = e => {
        e.preventDefault();
        onNewColor(title, color);
        setTitle("");
        setColor("#000000");
    };

    return (
        <form onSubmit={submit}>
            {/* 値が変わるたびに再描画される。制御されている */}
            <input
                value={ title }
                onChange={ e => setTitle(e.target.value) }
                type="text"
                placeholder="color title..."
                required
            />
            <input
                value={ color }
                onChange={ e => setColor(e.target.value) }
                type="color"
                required
            />
            <button>ADD!</button>
        </form>
    );
};

// 最新式！カスタムフックを使った版
export function AddColorFormCustomHook({ onNewColor = f => f }){
    const [titleProps, resetTitle] = useMyInput("");
    const [colorProps, resetColor] = useMyInput("#000000");

    const submit = e => {
        e.preventDefault();
        onNewColor(titleProps.value, colorProps.value);
        resetTitle();
        resetColor();
    };

    return (
        <form onSubmit={submit}>
            {/* titlePropsには、value=valueと、onChange=関数が入ってる！ */}
            <input
                {...titleProps}
                type="text"
                placeholder="color title..."
                required
            />
            <input
                {...colorProps}
                type="color"
                required
            />
            <button>ADD!</button>
        </form>
    );
};