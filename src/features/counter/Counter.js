import {Provider} from "react-redux";
import CounterOutput from "./CounterOutput";
import CounterIncrementButton from "./CounterIncrementButton";
import CounterDecrementButton from "./CounterDecrementButton";
import {store} from "./state/CounterStore";

function Counter() {
    return (
        <Provider store={store}>
            <CounterOutput/>
            <CounterIncrementButton/>
            <CounterDecrementButton/>
        </Provider>
    )
}

export default Counter;
