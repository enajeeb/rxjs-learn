import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { from } from 'rxjs/observable/from';
import { fromEvent } from 'rxjs/observable/fromEvent';


// 1. using create()
let observable = Observable.create((observer:any) => {
  setInterval(() => {
    observer.next(new Date())
  }, 1000);
  // observer.next('Hey guys!')
  // observer.next('How are you?')
  // observer.complete()
  // observer.next('This will not send')
});

const subscription = observable.subscribe(
  (x:any) => addItem(x),
  (error:any) => addItem(error),
  () => addItem('Completed')
);

setTimeout(() => {
  // Cancel a subscription
  subscription.unsubscribe();
  addItem('Completed');
}, 6001);

// 2. using of
// https://rxjs-dev.firebaseapp.com/api/index/function/of
of(1,2,3).subscribe(
  (x:any) => addItem(x),
  (error:any) => addItem(error),
  () => addItem('Completed')
);

// 3. using from
// https://rxjs-dev.firebaseapp.com/api/index/function/from
from([4,5,6]).subscribe(x => addItem(x));

// 4. fromEvent
// https://rxjs-dev.firebaseapp.com/api/index/function/fromEvent
const clicks = fromEvent(document, 'click');
clicks.subscribe(x => addItem(x));



function addItem(val:any) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}