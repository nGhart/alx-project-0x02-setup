import { type UserProps } from "@/interfaces";
import React from "react";
interface Props {
  user: UserProps;
}

const UserCard: React.FC<Props> = ({ user }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
        <p className="text-gray-500 text-sm">@{user.username}</p>
      </div>
      <div className="mb-4 text-gray-700 space-y-1">
        <p>
          <span className="font-semibold">Email:</span>
          <span className="lowercase">{user.email}</span>
        </p>
        <p>
          <span className="font-semibold">Phone:</span> {user.phone}
        </p>
        <p>
          <span className="font-semibold">Website:</span>{" "}
          <a
            href={`https://${user.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            {user.website}
          </a>
        </p>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
        <p className="text-gray-600 text-sm">
          {user.address.suite}, {user.address.street},<br />
          {user.address.city}, {user.address.zipcode}
        </p>
      </div>
      <div className="mt-2">
        <h3 className="font-semibold text-gray-800 mb-1">Company</h3>
        <p className="text-gray-600 text-sm">{user.company.name}</p>
        <p className="text-gray-500 italic text-sm">
          "{user.company.catchPhrase}"
        </p>
      </div>
    </div>
  );
};
export default UserCard;
