import {useState} from "react";

const useInputState = initialVal => {
    const [value, setValue] = useState(initialVal);
    const handleChange = event => {
        setValue(event.target.value);
    };
    const reset = () => {
        setValue("");
    };
    return [value, handleChange, reset];
};

export default useInputState;