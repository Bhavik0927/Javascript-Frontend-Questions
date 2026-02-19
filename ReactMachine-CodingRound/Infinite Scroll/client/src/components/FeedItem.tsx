import type { Post } from "../types";
import React from "react";

interface Props {
  post: Post;
}

const FeedItem: React.FC<Props> = ({ post }) => {
  return (
    <div
      style={{
        padding: "16px",
        borderBottom: "1px solid #ddd",
      }}
    >
      {post.content}
    </div>
  );
};

export default React.memo(FeedItem);
