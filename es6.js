var promise = new Promise(function(resolve, reject) {
  // do a thing, possibly async, then…

  if (true) {
    resolve("Stuff worked!");
    console.log('ok');
  }
  else {
    reject(Error("It broke"));
    console.log('ko');
  }
});