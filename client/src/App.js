import './App.css';
import Timeline from 'react-calendar-timeline';
// make sure you include the timeline stylesheet or the timeline will not be styled
import 'react-calendar-timeline/lib/Timeline.css';
import moment from 'moment';
import db from './db.json';

const dateOfMurders = "June 7, 2021";


// for each object in db, convert start and end keys to unix time and change description to title
const items = db.map((item) => {
  return {
    id: item.id,
    group: item.source,
    title: item.description,
    start_time: new Date(`${dateOfMurders} ${item.start}`).getTime(),
    end_time: new Date(`${dateOfMurders} ${item.end}`).getTime(),
    canMove: false,
    canResize: true,
    canChangeGroup: false,
    itemProps: {
      // these optional attributes are passed to the root <div /> of each item as <div {...itemProps} />
      'data-custom-attribute': 'Random content',
      // 'aria-hidden': true,
      onDoubleClick: () => { console.log('You clicked double!'); },
      className: 'weekend',
      style: {
        background: 'fuchsia'
      }
    }
  };
});

console.log('items', items.slice(0, 10));
// create unique group with unique key and value for each source
const groups = [...new Set(db.map((item) => item.source))].map((source) => {
  return {
    id: source,
    title: source
  };
});

const startTime = new Date(`${dateOfMurders} 00:00:00`).getTime();
const endTime = new Date(`June 8, 2021 00:00:00`).getTime();


// const items = [
//   {
//     id: 1,
//     group: 1,
//     title: 'Random title',
//     start_time: moment().add(-0.5, 'hour'),
//     end_time: moment().add(0.5, 'hour'),
//     canMove: true,
//     canResize: false,
//     canChangeGroup: false,
//     itemProps: {
//       // these optional attributes are passed to the root <div /> of each item as <div {...itemProps} />
//       'data-custom-attribute': 'Random content',
//       'aria-hidden': true,
//       onDoubleClick: () => { console.log('You clicked double!'); },
//       className: 'weekend',
//       style: {
//         background: 'fuchsia'
//       }
//     }
//   },
// ];



function App() {
  return (
    <div className="">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Timeline
        groups={groups}
        items={items}
        visibleTimeStart={startTime}
        visibleTimeEnd={endTime}
      />
    </div>
  );
}

export default App;
