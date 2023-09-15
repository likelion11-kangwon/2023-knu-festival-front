import React, { useState } from 'react';

function GuestbookForm({ entries, setEntries }) {
  const [nickname, setNickname] = useState('');
  const [content, setContent] = useState('');

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 닉네임과 내용이 비어있지 않은 경우에만 추가
    if (nickname.trim() !== '' && content.trim() !== '') {
      const newEntry = {
        id: new Date().getTime(),
        nickname,
        content,
        editable: true,
      };

      setEntries([...entries, newEntry]);
      setNickname('');
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="닉네임"
        value={nickname}
        onChange={handleNicknameChange}
      />
      <textarea
        placeholder="방명록 내용"
        value={content}
        onChange={handleContentChange}
      />
      <button type="submit">작성</button>
    </form>
  );
}

export default GuestbookForm;
