import './App.css';
import Timeline from 'react-calendar-timeline';
// make sure you include the timeline stylesheet or the timeline will not be styled
import 'react-calendar-timeline/lib/Timeline.css';
import moment from 'moment';

const groups = [{ id: 1, title: 'group 1' }, { id: 2, title: 'group 2' }];

const dateOfMurders = "June 7, 2021"
const startTime = new Date(`${dateOfMurders} 00:00:00`).getTime();
const endTime = new Date(`June 8, 2021 00:00:00`).getTime();


const items = [
  {
    id: 1,
    group: 1,
    title: 'Random title',
    start_time: moment().add(-0.5, 'hour'),
    end_time: moment().add(0.5, 'hour'),
    canMove: true,
    canResize: false,
    canChangeGroup: false,
    itemProps: {
      // these optional attributes are passed to the root <div /> of each item as <div {...itemProps} />
      'data-custom-attribute': 'Random content',
      'aria-hidden': true,
      onDoubleClick: () => { console.log('You clicked double!'); },
      className: 'weekend',
      style: {
        background: 'fuchsia'
      }
    }
  },
];



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
