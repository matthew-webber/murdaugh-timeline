import './App.css';
import Timeline, {
  TimelineMarkers,
  CustomMarker,
  TodayMarker,
  CursorMarker
} from 'react-calendar-timeline';
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
    tip: "Click to see more",
    canResize: true,
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

function App() {
  return (
    <div className="">
      <Timeline
        groups={groups}
        items={items}
        minZoom={60 * 1000}
        defaultTimeStart={startTime}
        defaultTimeEnd={endTime}
      >
        <TimelineMarkers>
          <TodayMarker />
          <CustomMarker date={startTime} />
          <CustomMarker date={endTime}>
            {/* custom renderer for this marker */}
            {({ styles, date }) => {
              const customStyles = {
                ...styles,
                backgroundColor: 'deeppink',
                width: '4px'
              };
              return <div style={customStyles} onClick={() => window.alert('Hello world!')} />;
            }}
          </CustomMarker>
          <CursorMarker />
        </TimelineMarkers>
      </Timeline>
    </div>
  );
}

export default App;
