"use strict";

declare let beforeEach: any;
declare let describe: any;
declare let it: any;
declare let expect: any;

declare let global: any;
declare let require: any;
declare let jasmine: any;

let _package = require("../package.json");

let version = _package.version.split(".").map((v) => {
  return parseInt(v, 10);
});

import root from "../polyfills/index";

let AnimationFrame = new (require("../lib/AnimationFrame")).constructor();

setInterval(
    () => {
      AnimationFrame.subscribe(root, () => {
      }, []);
      AnimationFrame.parallelSubscribe({
        context: root,
        callback: () => {
        },
        params: [],
      });
      AnimationFrame.serialSubscribe({
        context: root,
        callback: () => {
        },
        params: [],
      });
    },
    1
);

describe("AnimationFrame", () => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

  let resetAnimationFrame = () => {
    let stacksBefore: any;
    let stacksAfter: any;
    let stacksOld: any;

    stacksBefore = [
      root.AnimationFrame.stack,
      root.AnimationFrame.serialStack,
      root.AnimationFrame.parallelStack,
    ];

    AnimationFrame = new (require("../lib/AnimationFrame")).constructor();

    version[Math.floor(Math.random() * 3)] = Math.ceil(Math.random() * 100);

    AnimationFrame.version = null;

    root.AnimationFrame = AnimationFrame;

    AnimationFrame.version = version.join(".");

    root.AnimationFrame = AnimationFrame;

    stacksAfter = [
      root.AnimationFrame.stack,
      root.AnimationFrame.serialStack,
      root.AnimationFrame.parallelStack,
    ];

    stacksOld = [
      Object.keys(root._oldAnimationFrame.stack).length,
      Object.keys(root._oldAnimationFrame.serialStack).length,
      Object.keys(root._oldAnimationFrame.parallelStack).length,
    ];

    expect(stacksOld[0] === 0).toBeTrue();
    expect(stacksOld[1] === 0).toBeTrue();
    expect(stacksOld[2] === 0).toBeTrue();

    for (let i = 0; i < 3; i++) {
      for (let ID in stacksBefore[i]) {
        if (stacksBefore[i].hasOwnProperty(ID)) {
          expect(!!stacksAfter[i][ID]).toBeTrue();
          for (let prop in stacksAfter[i][ID]) {
            if (stacksAfter[i][ID].hasOwnProperty(prop)) {
              expect(stacksBefore[i][ID][prop] === stacksAfter[i][ID][prop]).toBeTrue();
            }
          }
        }
      }
    }
  };

  let paramsValues;
  let dataSet;

  beforeEach(() => {
    paramsValues = [undefined, null, false, true, 0, 123, "test", {}, [], () => {
    }, root];
    dataSet = [];
  });

  let test = (subscribeMethod,
              unsubscribeMethod,
              watchMethod,
              subscribeStack,
              clean) => {
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
                if (typeof x4 === "string") {
                  x4 = AnimationFrame.getID();
                }
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
        promises.push(new Promise((_resolve) => {
          let result;

          if (subscribeMethod === AnimationFrame.subscribe) {
            result = subscribeMethod.apply(AnimationFrame, []);
            unsubscribeMethod.apply(AnimationFrame, [result]);

            result = subscribeMethod.apply(AnimationFrame, [set.params[0]]);
            unsubscribeMethod.apply(AnimationFrame, [result]);

            result = subscribeMethod.apply(AnimationFrame, [set.params[0], set.params[1]]);
            unsubscribeMethod.apply(AnimationFrame, [result]);

            result = subscribeMethod.apply(AnimationFrame, [set.params[0], set.params[1], set.params[2]]);
            unsubscribeMethod.apply(AnimationFrame, [result]);

            result = subscribeMethod.apply(AnimationFrame, [set.params[0], set.params[1], set.params[2], set.params[3]]);
            unsubscribeMethod.apply(AnimationFrame, [result]);

            result = subscribeMethod.apply(AnimationFrame, set.params);
          } else {
            result = subscribeMethod.apply(AnimationFrame, []);
            unsubscribeMethod.apply(AnimationFrame, [result]);

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

            if (clean) {
              setTimeout(
                  () => {
                    expect(unsubscribeMethod.apply(AnimationFrame, [result])).toBeTrue();
                    expect(Object.keys(subscribeStack)).not.toContain(result);
                    _resolve();
                  },
                  1000
              );
            } else {
              _resolve();
            }
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
    resetAnimationFrame();
    expect(typeof(AnimationFrame)).toEqual("object");
  });

  it("AnimationFrame.subscribe", (done) => {
    resetAnimationFrame();
    test(
        AnimationFrame.subscribe,
        AnimationFrame.unsubscribe,
        AnimationFrame.watch,
        AnimationFrame.stack,
        false
    ).then(done).catch(done);
  });

  it("AnimationFrame.unsubscribe", (done) => {
    resetAnimationFrame();
    test(
        AnimationFrame.subscribe,
        AnimationFrame.unsubscribe,
        AnimationFrame.watch,
        AnimationFrame.stack,
        true
    ).then(done).catch(done);
  });

  it("AnimationFrame.serialSubscribe", (done) => {
    resetAnimationFrame();
    test(
        AnimationFrame.serialSubscribe,
        AnimationFrame.serialUnsubscribe,
        AnimationFrame.serialWatch,
        AnimationFrame.serialStack,
        false
    ).then(done).catch(done);
  });

  it("AnimationFrame.serialUnsubscribe", (done) => {
    resetAnimationFrame();
    test(
        AnimationFrame.serialSubscribe,
        AnimationFrame.serialUnsubscribe,
        AnimationFrame.serialWatch,
        AnimationFrame.serialStack,
        true
    ).then(done).catch(done);
  });

  it("AnimationFrame.parallelSubscribe", (done) => {
    resetAnimationFrame();
    test(
        AnimationFrame.parallelSubscribe,
        AnimationFrame.parallelUnsubscribe,
        AnimationFrame.parallelWatch,
        AnimationFrame.parallelStack,
        false
    ).then(done).catch(done);
  });

  it("AnimationFrame.parallelUnsubscribe", (done) => {
    resetAnimationFrame();
    test(
        AnimationFrame.parallelSubscribe,
        AnimationFrame.parallelUnsubscribe,
        AnimationFrame.parallelWatch,
        AnimationFrame.parallelStack,
        true
    ).then(done).catch(done);
  });
});
