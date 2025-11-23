import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { useState } from "react";

const posts = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  const fetchPosts = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();

      // Map API data to PostProps
      const formattedPosts: PostProps[] = data.map((post: any) => ({
        id: post.id,
        userId: post.userId,
        title: post.title,
        content: post.body,
      }));

      setPosts(formattedPosts);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  fetchPosts();
  // }, []);
  return (
    <div className="p-4 space-y-4">
      <Header />
      <div className="mt-16">
        <h1 className="text-3xl font-bold">Posts</h1>
        <div className="flex flex-col items-center gap-4">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              content={post.content}
              userId={post.userId}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default posts;
