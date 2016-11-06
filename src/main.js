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
    x => console.log(`Next: ${x.value}`),
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
  .start(() => 'start', Rx.Scheduler.timeout)
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

//buffer http://reactivex.io/documentation/operators/buffer.html
Rx.Observable
  .timer(0, 100)
  .buffer(() => Rx.Observable.timer(200))
  .take(3)
  .subscribe(
    x => console.log(`Next: ${x}`),
    err => console.log(`Error: ${err}`),
    () => console.log('Completed')
  );

//flatmap http://reactivex.io/documentation/operators/flatmap.html
Rx.Observable
  .just('apple,orange,peach')
  .flatMap(x => Rx.Observable.from(x.split(',')))
  .subscribe(
    x => console.log(`Next: ${x}`),
    err => console.log(`Error: ${err}`),
    () => console.log('Completed')
  );

//groupby http://reactivex.io/documentation/operators/groupby.html
Rx.Observable
  .range(0, 10)
  .groupBy(x => x % 2 == 0)
  .flatMap(group => group.toArray()) 
  .subscribe(
    x => console.log(`Next: ${x}`),
    err => console.log(`Error: ${err}`),
    () => console.log('Completed')
  );

//map http://reactivex.io/documentation/operators/map.html
Rx.Observable
  .from(['田中', '佐藤', '山田'])
  .map(x => `${x}さん`)
  .subscribe(
    x => console.log(`Next: ${x}`),
    err => console.log(`Error: ${err}`),
    () => console.log('Completed')
  );

//scan http://reactivex.io/documentation/operators/scan.html
Rx.Observable
  .from(['Hello', 'World', '!!'])
  .scan((acc, x) => `${acc} ${x}`)
  .subscribe(
    x => console.log(`Next: ${x}`),
    err => console.log(`Error: ${err}`),
    () => console.log('Completed')
  );

// window http://reactivex.io/documentation/operators/window.html
Rx.Observable
  .timer(1, 50)
  .window(() => Rx.Observable.timer(100))
  .take(3)
  .flatMap(x => x.toArray())
  .subscribe(
    x => console.log(`Next: ${x}`),
    err => console.log(`Error: ${err}`),
    () => console.log('Completed')
  );

// debounce http://reactivex.io/documentation/operators/debounce.html
Rx.Observable
  .interval(1000)
  .timeInterval()
  .take(3)
  .debounce(1000)
  .subscribe(
    x => console.log(`Next: ${x.value}`),
    err => console.log(`Error: ${err}`),
    () => console.log('Completed')
  );

// distinct http://reactivex.io/documentation/operators/distinct.html
Rx.Observable
  .from(['apple', 'orange', 'apple', 'apple', 'りんご'])
  .distinct()
  .subscribe(
    x => console.log(`Next: ${x}`),
    err => console.log(`Error: ${err}`),
    () => console.log('Completed')
  );

 // elementat http://reactivex.io/documentation/operators/elementat.html
 Rx.Observable
  .from(['apple', 'orange', 'りんご'])
  .elementAt(1)
  .subscribe(
    x => console.log(`Next: ${x}`),
    err => console.log(`Error: ${err}`),
    () => console.log('Completed')
  );

// filter http://reactivex.io/documentation/operators/filter.html
Rx.Observable
  .range(0, 10)
  .filter(x => x % 2 == 0)
  .subscribe(
    x => console.log(`Next: ${x}`),
    err => console.log(`Error: ${err}`),
    () => console.log('Completed')
  );

// first http://reactivex.io/documentation/operators/first.html
Rx.Observable
  .range(0, 10)
  .first()
  .subscribe(
    x => console.log(`Next: ${x}`),
    err => console.log(`Error: ${err}`),
    () => console.log('Completed')
  );

//ignoreelements http://reactivex.io/documentation/operators/ignoreelements.html
Rx.Observable
  .range(0, 10)
  .ignoreElements()
  .subscribe(
    x => console.log(`Next: ${x}`),
    err => console.log(`Error: ${err}`),
    () => console.log('Completed')
  );

//last http://reactivex.io/documentation/operators/last.html
Rx.Observable
  .range(0, 10)
  .last()
  .subscribe(
    x => console.log(`Next: ${x}`),
    err => console.log(`Error: ${err}`),
    () => console.log('Completed')
  );

//sample　http://reactivex.io/documentation/operators/sample.html
Rx.Observable
  .interval(500)
  .sample(2000)
  .take(3)
  .subscribe(
    x => console.log(`Next: ${x}`),
    err => console.log(`Error: ${err}`),
    () => console.log('Completed')
  );

//skip http://reactivex.io/documentation/operators/skip.html
Rx.Observable
  .range(0, 10)
  .skip(8)
  .subscribe(
    x => console.log(`Next: ${x}`),
    err => console.log(`Error: ${err}`),
    () => console.log('Completed')
  );

//skiplast http://reactivex.io/documentation/operators/skiplast.html
Rx.Observable
  .range(0, 10)
  .skipLast(3)
  .subscribe(
    x => console.log(`Next: ${x}`),
    err => console.log(`Error: ${err}`),
    () => console.log('Completed')
  );

//takelast　http://reactivex.io/documentation/operators/takelast.html
Rx.Observable
  .range(0, 10)
  .takeLast(2)
  .subscribe(
    x => console.log(`Next: ${x}`),
    err => console.log(`Error: ${err}`),
    () => console.log('Completed')
  );