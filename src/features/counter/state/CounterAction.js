function counterIncremented(counter) {
    return {
        type: "counter/incremented",
        counter: counter
    }
}

function counterDecremented(counter) {
    return {
        type: "counter/decremented",
        counter: counter
    }
}

export {counterIncremented, counterDecremented}
