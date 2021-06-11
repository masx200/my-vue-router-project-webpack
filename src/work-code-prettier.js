// @ts-ignore
import Worker from "./prettiercode.worker.js";
let worker;
function launchworker() {
    if (!worker) {
        worker = new Worker();
    }
}
export function 关闭所有worker3() {
    worker?.terminate();
    worker = undefined;
}
export default function (sourcecode) {
    launchworker();
    return new Promise((resolve, rj) => {
        worker.onmessage = (e) => {
            resolve(e.data);
        };
        worker.postMessage(sourcecode);
        worker.onerror = (e) => {
            rj(new Error(e.message + " " + e.filename));
        };
    });
}
