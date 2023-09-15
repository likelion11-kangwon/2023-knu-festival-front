import React from 'react';

function GuestbookEntry({ entry }) {
  return (
    <div className="guestbook-entry">
      <div className="entry-info">
        <div className="entry-nickname">{entry.writer}</div>
        <div className="entry-date">{formatDate(entry.regDate)}</div>
      </div>
      <div className="entry-content">{entry.content}</div>
    </div>
  );
}

function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

export default GuestbookEntry;