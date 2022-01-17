import {  useDispatch } from 'react-redux';
import {counterIncremented} from "./state/CounterAction";

function CounterIncrementButton(){
    const dispatch = useDispatch();
    return(
        <button id="increment" onClick={()=>dispatch(counterIncremented(2))}>+</button>
    )
}

export  default CounterIncrementButton;
