import React from 'react';

function GuestbookEntry({ entry, images }) {
  // entry의 고유한 id를 사용하여 이미지 선택
  const selectedImage = images[entry.id % images.length];

  return (
    <div className="guestbook-entry">
      <div className="entry-info">
        <div className="left-info">
          <img src={selectedImage} alt="Random Avatar" width="26" height="26"/>
          <div className="entry-nickname">{entry.writer}</div>
        </div>
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