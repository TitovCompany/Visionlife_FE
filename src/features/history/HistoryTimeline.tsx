import React from 'react';
import Year from './Year';
import Dot from './Dot';
import Card from './Card';

interface HistoryTimelineItemProps {
  id: string;
  year: string;
  title: string;
  event: string[] | string;
  description?: string;
}

const HistoryTimelineItem: React.FC<HistoryTimelineItemProps> = ({ id, year, title, event, description }) => (
  <li
    key={id}
    className="history-timeline-item relative mb-20 flex flex-col md:flex-row w-full justify-between items-start text-left"
  >
    <Dot />
    <div className="max-w-md  p-6 mt-1 text-left">
      <Year year={year} />
    </div>
    <Card title={title} event={event} description={description} />
  </li>
);

export default HistoryTimelineItem; 