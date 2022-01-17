import { useSelector } from 'react-redux';
function CounterOutput(){
    const countSelector = state => state.nilai;
    const count = useSelector(countSelector);
    return(
        <div>
            Terpijit: <span id="value">{count}</span> kali
        </div>
    )
}

export default CounterOutput;
