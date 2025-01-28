import React from "react";

export function Entry({ emo, title, description }) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {emo}
        </span>
        <span>{title}</span>
      </dt>
      <dd>{description}</dd>
    </div>
  );
}
