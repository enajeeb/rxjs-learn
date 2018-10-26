import { ReplaySubject } from "rxjs/ReplaySubject";

// ReplaySubject
// BehaviorSubject only dispatches the last emitted value, 
// and ReplaySubject allows you to dispatch any designated number of values.
let subject = new ReplaySubject(2);

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