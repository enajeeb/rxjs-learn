import { BehaviorSubject } from "rxjs/BehaviorSubject";

// BehaviorSubject
// Type of Subject whose only different is that it will emit the last value upon a new observer's subscription.
let subject = new BehaviorSubject('Init');

let subscription = subject.subscribe(
  data => addItem('Observer 1 -> ' + data),
  error => addItem(error),
  () => addItem('Observer 1 -> Completed')
);

subject.next('First msg');
// subscription.unsubscribe();
subject.next('2nd msg');

// this will start from 2nd msg
let subscription2 = subject.subscribe(
  data => addItem('Observer 2 -> ' + data),
  error => addItem(error),
  () => addItem('Observer 2 -> Completed')
);

subject.next('3rd msg');
subject.next('4th msg');

subject.complete();

function addItem(val:any) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}