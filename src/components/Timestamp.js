import dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';
import * as utc from 'dayjs/plugin/utc';

dayjs.extend(relativeTime);
dayjs.extend(utc);

const NOW = new Date();
const PREFIX_DEFAULT = 'Updated ';
const DAYS_NEW = 7;

export default function Timestamp({ date, prefix = PREFIX_DEFAULT }) {
  return (
    <TimestampWrapper date={date} prefix={prefix}>
      {isNew(date) ? getRelativeDate(date) : getformattedDate(date)}
    </TimestampWrapper>
  );
}

export function TimestampRelative({ date, prefix = PREFIX_DEFAULT }) {
  return (
    <TimestampWrapper date={date} prefix={prefix}>
      {getRelativeDate(date)}
    </TimestampWrapper>
  );
}

function TimestampWrapper({ date, prefix, children }) {
  return (
    <div className="flex items-center">
      {isNew(date) && <TimestampNew />}
      <div className={isNew(date) ? 'font-semibold text-teal-600' : undefined}>
        {prefix}
        <time dateTime={date}>{children}</time>
      </div>
    </div>
  );
}

export function TimestampNew() {
  return (
    <span className="px-1 mr-1.5 text-xs font-bold text-teal-500 border-2 border-teal-500 rounded">
      New
    </span>
  );
}

export function isNew(date) {
  let isNew = false;
  let getDaysDiff = dayjs(NOW).diff(date, 'day');
  isNew = getDaysDiff <= DAYS_NEW;

  return isNew;
}

export function getformattedDate(date) {
  return dayjs(date).format('MMM D, YYYY');
}

export function getRelativeDate(date) {
  return dayjs(date).fromNow();
}
