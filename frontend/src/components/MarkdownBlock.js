import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

function MarkdownBlock({ file }) {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then(setContent)
      .catch((err) => console.error("Error loading markdown:", err));
  }, [file]);

  return (
    <div className="shadow-container markdown-content">
      <ReactMarkdown
        components={{
          h1: ({ node, children, ...props }) => (
            <h1 className="markdown-title" {...props}>
              {children}
            </h1>
          ),
          h2: ({ node, children, ...props }) => (
            <h2 className="markdown-heading" {...props}>
              {children}
            </h2>
          ),
          h3: ({ node, children, ...props }) => (
            <h3 className="markdown-heading" {...props}>
              {children}
            </h3>
          ),
          p: ({ node, children, ...props }) => (
            <p className="markdown-text" {...props}>
              {children}
            </p>
          ),
          ul: ({ node, children, ...props }) => (
            <ul className="markdown-list" {...props}>
              {children}
            </ul>
          ),
          li: ({ node, children, ...props }) => (
            <li className="markdown-list-item" {...props}>
              {children}
            </li>
          ),
          img: ({ node, alt, ...props }) => (
            <img
              className="markdown-img no-select"
              alt={alt || ""}
              draggable={false}
              {...props}
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

export default MarkdownBlock;