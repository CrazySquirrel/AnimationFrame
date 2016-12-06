"use strict";

declare var beforeEach: any;
declare var afterEach: any;
declare var describe: any;
declare var it: any;
declare var expect: any;

import AnimationFrame from "../lib/AnimationFrame";

describe("AnimationFrame", () => {

    let paramsValues;
    let dataSet;

    beforeEach(() => {
        paramsValues = [undefined, null, false, true, 0, 123, "test", {}, [], () => {
        }, window];
        dataSet = [];
    });

    let test = () => {
        for (let x1 of paramsValues) {
            for (let x2 of paramsValues) {
                for (let x3 of paramsValues) {
                    for (let x4 of paramsValues) {
                        if (
                            [x2, x3, x4].indexOf(x1) === -1 &&
                            [x1, x3, x4].indexOf(x2) === -1 &&
                            [x1, x2, x4].indexOf(x3) === -1 &&
                            [x1, x2, x3].indexOf(x4) === -1
                        ) {
                            let cond = (
                                (typeof x1 === "object" || x1 === undefined) &&
                                (typeof x2 === "function" || x2 === undefined) &&
                                ((typeof x3 === "object" && Array.isArray(x3)) || x3 === undefined) &&
                                (typeof x4 === "string" || x4 === undefined)
                            );
                            dataSet.push({
                                params: [x1, x2, x3, x4],
                                result: cond
                            });
                        }
                    }
                }
            }
        }
        for (let set of dataSet) {
            let result = AnimationFrame.subscribe.apply(AnimationFrame, set.params);

            if (set.result) {
                expect(typeof(result)).toEqual("string");
                expect(Object.keys(AnimationFrame.stack)).toContain(result);
            } else {
                expect(typeof(result)).toEqual("boolean");
                expect(result).toEqual(false);
            }

            AnimationFrame.unsubscribe.apply(AnimationFrame, [result]);

            if (set.result) {
                expect(Object.keys(AnimationFrame.stack)).not.toContain(result);
            }
        }
    };

    it("AnimationFrame", () => {
        expect(typeof(AnimationFrame)).toEqual("object");
    });

    it("AnimationFrame.subscribe", () => {
        test();
    });

    it("AnimationFrame.unsubscribe", () => {
        test();
    });
});
