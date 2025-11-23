import { useState } from "react";
import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { type CardProps } from "@/interfaces";
import PageLayout from "@/components/layout/PageLayout";
import Header from "@/components/layout/Header";

const home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<CardProps[]>([
    {
      title: "Community Members",
      content:
        "Explore the profiles of our registered developers and connect with them.",
    },
    {
      title: "Latest Articles",
      content: "Dive into 25 new posts covering tutorials published today.",
    },
    {
      title: "Trending Now",
      content:
        "See the posts that are getting the most views and discussion right now in the community.",
    },
  ]);

  const handleAddPost = (title: string, content: string) => {
    setPosts([{ title, content }, ...posts]);
  };
  return (
    <div className="p-4 space-y-4">
      <Header />
      <div className="mt-16 space-y-4">
        <h1 className="text-3xl font-bold">Home Page</h1>
        <div className="flex justify-end py-4">
          <Button
            styleClass="px-4 py-2 bg-secondary text-white rounded hover:bg-secondary/80"
            onClick={() => setIsModalOpen(true)}
          >
            Add Post
          </Button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>
        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddPost}
        />
      </div>
    </div>
  );
};

export default home;
