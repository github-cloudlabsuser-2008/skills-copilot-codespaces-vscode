import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

function MarkdownEditor() {
  const [markdown, setMarkdown] = useState("type markdown here");

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div>
      <textarea
        value={markdown}
        onChange={handleChange}
        rows="10"
        cols="50"
      />
      <div>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}

export default MarkdownEditor;

function reverseSentence(sentence) {
  return sentence
    .split(' ')
    .reverse()
    .join(' ')
    .replace(/^\w/, (c) => c.toUpperCase());
}