import { useState } from "react";
import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { type CardProps } from "@/interfaces";

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
    <div className="min-h-screen gap-6 bg-gray-50 p-4">
      <h1 className="text-3xl font-bold mb-6">Home Page</h1>
      <div className="flex justify-end py-4">
        <Button
          styleClass="px-4 py-2 bg-primary text-white rounded hover:bg-primary/80"
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
  );
};

export default home;
