import Card from "@/components/common/Card";
import React from "react";

const home = () => {
  return (
    <div className="min-h-screen gap-6 bg-gray-50 p-4">
      <h1 className="text-3xl font-bold mb-6">Home Page</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card
          title="Community Members"
          content="Explore the profiles of our registered developers and connect with them."
        />
        <Card
          title="Latest Articles"
          content="Dive into 25 new posts covering tutorials published today."
        />
        <Card
          title="Trending Now"
          content="See the posts that are getting the most views and discussion right now in the community."
        />
      </div>
    </div>
  );
};

export default home;
