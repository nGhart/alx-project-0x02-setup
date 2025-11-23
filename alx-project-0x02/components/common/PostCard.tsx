import React from "react";
import { type PostProps } from "../../interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg w-full max-w-md overflow-hidden">
      <div className="bg-shimmer p-6">
        <h3 className="text-xl font-semibold text-white mb-1 capitalize">
          {title}
        </h3>
      </div>
      <div className="p-6 flex flex-col gap-4">
        <p className="text-gray-700 leading-relaxed">{content}</p>
        <p className="text-xs text-right italic text-gray-400">
          Created by: User {userId}
        </p>
      </div>
    </div>
  );
};

export default PostCard;
