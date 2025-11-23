import Header from "@/components/layout/Header";
import PageLayout from "@/components/layout/PageLayout";
import React from "react";

const posts = () => {
  return (
    <div className="p-4 space-y-4">
      <Header />
      <div className="mt-16">
        <h1 className="text-3xl font-bold">Posts</h1>
      </div>
    </div>
  );
};

export default posts;
