import {  useDispatch } from 'react-redux';
import {counterDecremented} from "./state/CounterAction";

function CounterDecrementButton(){
    const dispatch = useDispatch();
    return(
        <button id="decrement" onClick={()=>dispatch(counterDecremented(1))}>-</button>
    )
}

export  default CounterDecrementButton;
