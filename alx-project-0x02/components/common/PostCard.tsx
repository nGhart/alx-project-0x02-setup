import React from "react";
import { type PostProps } from "../../interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="bg-white shadow-md rounded-lg w-full max-w-md">
      <div className="bg-primary rounded-t-lg text-white p-6">
        <h3 className="text-lg font-semibold mb-2 capitalize">{title}</h3>
      </div>
      <div className="p-6">
        <p className="text-gray-700 mb-3">{content}</p>
        <p className="text-sm text-right italic text-gray-500">
          Created by: User {userId}
        </p>
      </div>
    </div>
  );
};

export default PostCard;
