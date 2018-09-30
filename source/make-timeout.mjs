/*jslint
    node
*/

export default function makeTimeout(count, timeToSucceed, timeToFail) {
    return function timeout(callback, value) {
        const report = {
            count,
            timeToSucceed,
            timeToFail
        };
        const finalReport = JSON.stringify(report);

        const successTimeoutID = setTimeout(function () {
            if (value) {
                callback([...value, finalReport]);
            }
            if (!value) {
                callback([finalReport]);
            }
        }, timeToSucceed);

        let failTimeoutID;
        if (timeToFail) {
            failTimeoutID = setTimeout(function () {
                if (value) {
                    callback(undefined, [...value, "failure", finalReport]);
                }
                if (!value) {
                    callback(undefined, ["failure", finalReport]);
                }
            }, timeToFail);
        }
        return function timeoutCancel() {
            console.log("cancelled");
            clearTimeout(successTimeoutID);
            if (failTimeoutID !== "undefined") {
                clearTimeout(failTimeoutID);
            }
        };
    };
};

