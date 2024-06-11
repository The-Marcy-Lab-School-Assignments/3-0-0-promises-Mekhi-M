const resolvedWrapper = (val) => {
  return new Promise((resolve, reject) => resolve(val));
};

// // Q1 example input/output
// console.log(resolvedWrapper(10));
// // this returns:
// // Promise { 10 }

// // and we could log it out like this:
// resolvedWrapper(10).then(console.log);
// // this logs:
// // 10

const rejectedWrapper = (str) => {
  return new Promise((resolve, reject) => reject(new Error(str)));
};

// // Q2 example input/output
// console.log(rejectedWrapper("bruh"));
// // this returns:
// // Promise { Error: bruh }

const handleResolvedPromise = (promise) => {
  return promise.then((result) => {
    console.log(result);
    return result;
  });
};

const handleResolvedOrRejectedPromise = (promise) => {
  return promise
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => {
      console.error(`Your error message was: ${error.message}`);
      return null;
    });
};

const pauseForMs = (milliseconds) => {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
};

module.exports = {
  resolvedWrapper,
  rejectedWrapper,
  handleResolvedPromise,
  handleResolvedOrRejectedPromise,
  pauseForMs,
};
