var Rx = require('rx');

// create http://reactivex.io/documentation/operators/create.html
Rx.Observable
  .create(observer => {
      observer.onNext(9);
      observer.onCompleted();
      return () => console.log('disposed'); 
  })
  .subscribe(
    x => console.log(`Next: ${x}`),
    err => console.log(`Error: ${err}`),
    () => console.log('Completed')
  );

// empty http://reactivex.io/documentation/operators/empty-never-throw.html
Rx.Observable.empty()
  .subscribe(
    x => console.log(`Next: ${x}`),
    err => console.log(`Error: ${err}`),
    () => console.log('Completed')
  );

// never http://reactivex.io/documentation/operators/empty-never-throw.html
Rx.Observable.never()
  .subscribe(
    x => console.log(`Next: ${x}`),
    err => console.log(`Error: ${err}`),
    () => console.log('Completed')
  );

// throw http://reactivex.io/documentation/operators/empty-never-throw.html
Rx.Observable.return(9)
  .selectMany(Rx.Observable.throw(new Error('error!')))
  .subscribe(
    x => console.log(`Next: ${x}`),
    err => console.log(`Error: ${err}`),
    () => console.log('Completed')
  );

// from http://reactivex.io/documentation/operators/from.html
Rx.Observable
  .from(['apple', 'orange', 'peach'])
  .subscribe(
    x => console.log(`Next: ${x}`),
    err => console.log(`Error: ${err}`),
    () => console.log('Completed')
  );

// interval http://reactivex.io/documentation/operators/interval.html
Rx.Observable
  .interval(1000)
  .timeInterval()
  .take(3)
  .subscribe(
    x => console.log(`Next: ${x}`),
    err => console.log(`Error: ${err}`),
    () => console.log('Completed')
  );

// just http://reactivex.io/documentation/operators/just.html
Rx.Observable
  .just(88)
  .subscribe(
    x => console.log(`Next: ${x}`),
    err => console.log(`Error: ${err}`),
    () => console.log('Completed')
  );


// range http://reactivex.io/documentation/operators/range.html
Rx.Observable
  .range(0, 6)
  .subscribe(
    x => console.log(`Next: ${x}`),
    err => console.log(`Error: ${err}`),
    () => console.log('Completed')
  );


// repeat http://reactivex.io/documentation/operators/repeat.html
Rx.Observable
  .repeat('Hello world', 3)
  .subscribe(
    x => console.log(`Next: ${x}`),
    err => console.log(`Error: ${err}`),
    () => console.log('Completed')
  );


// start http://reactivex.io/documentation/operators/start.html
Rx.Observable
  .start(s => 'start', Rx.Scheduler.timeout)
  .subscribe(
    x => console.log(`Next: ${x}`),
    err => console.log(`Error: ${err}`),
    () => console.log('Completed')
  );


//timer http://reactivex.io/documentation/operators/timer.html
Rx.Observable
  .timer(100, 1000)
  .timeInterval()
  .pluck('interval')
  .take(3)
  .subscribe(
    x => console.log(`Next: ${x}`),
    err => console.log(`Error: ${err}`),
    () => console.log('Completed')
  );