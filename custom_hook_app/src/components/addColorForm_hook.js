import { useState } from "react";

const useMyInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    return [
        {value, onChange: e => setValue(e.target.value)},
        () => setValue(initialValue),
    ];
};

export default useMyInput;
