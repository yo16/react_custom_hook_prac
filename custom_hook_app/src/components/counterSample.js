import useCounter from "./counter_hook";

const CounterSample = () => {
    const { count } = useCounter();
    return (
        <div>
            カウンターサンプルです。<br />
            でも、この例は更新されない。reactのツールを見れば更新されてる。<br />
            count: { count }
        </div>
    );
};

export default CounterSample;
