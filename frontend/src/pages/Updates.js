import React from "react";
import "./Updates.css";
import "../global.css";
import MarkdownBlock from "../components/MarkdownBlock";

function Updates() {
  return (
    <div className="updates-container">
      <h1 className="page-title">Latest News & Updates</h1>
      <MarkdownBlock file="/markdown/latest-news.md" />
    </div>
  );
}

export default Updates;
