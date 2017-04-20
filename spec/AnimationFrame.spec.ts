"use strict";

declare let beforeEach: any;
declare let describe: any;
declare let it: any;
declare let expect: any;

declare let global: any;
declare let require: any;
declare let jasmine: any;

import root from "../polyfills/index";

let AnimationFrame;

describe("AnimationFrame", () => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

  let paramsValues;
  let dataSet;

  beforeEach(() => {
    AnimationFrame = require("../lib/AnimationFrame");

    paramsValues = [undefined, null, false, true, 0, 123, "test", {}, [], () => {
    }, window];
    dataSet = [];
  });

  let test = (subscribeMethod,
              unsubscribeMethod,
              watchMethod,
              subscribeStack) => {
    return new Promise((resolve, reject) => {

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
                    (typeof x1 === "object" || !x1) &&
                    (typeof x2 === "function" || !x2) &&
                    (Array.isArray(x3) || !x3) &&
                    (typeof x4 === "string" || !x4)
                );
                dataSet.push({
                  params: [x1, x2, x3, x4],
                  result: cond,
                });
              }
            }
          }
        }
      }

      let promises = [];

      for (let set of dataSet) {
        promises.push(new Promise((_resolve, _reject) => {
          let result;

          if (subscribeMethod === AnimationFrame.subscribe) {
            result = subscribeMethod.apply(AnimationFrame, set.params);
          } else {
            result = subscribeMethod.apply(AnimationFrame, [{
              context: set.params[0],
              callback: set.params[1],
              params: set.params[2],
              ID: set.params[3],
            }]);
          }

          if (set.result) {
            expect(typeof(result)).toEqual("string");
            expect(Object.keys(subscribeStack)).toContain(result);

            watchMethod.apply(AnimationFrame, []);

            setTimeout(
                () => {
                  unsubscribeMethod.apply(AnimationFrame, [result]);
                  expect(Object.keys(subscribeStack)).not.toContain(result);
                  _resolve();
                },
                1000
            );
          } else {
            expect(typeof(result)).toEqual("boolean");
            expect(result).toEqual(false);
            _resolve();
          }
        }));
      }

      Promise.all(promises).then(resolve).catch(reject);
    });
  };

  it("AnimationFrame", () => {
    expect(typeof(AnimationFrame)).toEqual("object");
  });

  it("AnimationFrame.subscribe", (done) => {
    test(
        AnimationFrame.subscribe,
        AnimationFrame.unsubscribe,
        AnimationFrame.watch,
        AnimationFrame.stack
    ).then(done).catch(done);
  });

  it("AnimationFrame.unsubscribe", (done) => {
    test(
        AnimationFrame.subscribe,
        AnimationFrame.unsubscribe,
        AnimationFrame.watch,
        AnimationFrame.stack
    ).then(done).catch(done);
  });

  it("AnimationFrame.serialSubscribe", (done) => {
    test(
        AnimationFrame.serialSubscribe,
        AnimationFrame.serialUnsubscribe,
        AnimationFrame.serialWatch,
        AnimationFrame.serialStack
    ).then(done).catch(done);
  });

  it("AnimationFrame.serialUnsubscribe", (done) => {
    test(
        AnimationFrame.serialSubscribe,
        AnimationFrame.serialUnsubscribe,
        AnimationFrame.serialWatch,
        AnimationFrame.serialStack
    ).then(done).catch(done);
  });

  it("AnimationFrame.parallelSubscribe", (done) => {
    test(
        AnimationFrame.parallelSubscribe,
        AnimationFrame.parallelUnsubscribe,
        AnimationFrame.parallelWatch,
        AnimationFrame.parallelStack
    ).then(done).catch(done);
  });

  it("AnimationFrame.parallelUnsubscribe", (done) => {
    test(
        AnimationFrame.parallelSubscribe,
        AnimationFrame.parallelUnsubscribe,
        AnimationFrame.parallelWatch,
        AnimationFrame.parallelStack
    ).then(done).catch(done);
  });
});
