import makeTimeout from "./make-timeout.mjs";

export default function makeTimeouts(
    quantity,
    increaseBy,
    numberIncreased = 0
) {
    if (quantity !== 0) {
        return [
            ...makeTimeouts(quantity - 1, increaseBy, numberIncreased + 1),
            makeTimeout(quantity, increaseBy * numberIncreased)
        ];
    }
    return [];
};
