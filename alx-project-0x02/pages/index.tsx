import Header from "@/components/layout/Header";
import PageLayout from "@/components/layout/PageLayout";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16 flex flex-col justify-center items-center h-[calc(100vh-64px)] px-4 text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">Welcome</h1>
        <p className="text-secondary max-w-2xl text-lg">
          This project is a{" "}
          <span className="font-semibold">Next.js + Tailwind</span> app
          demonstrating the use of reusable components, basic routing, API data
          fetching, and dynamic content management.
        </p>
      </div>
    </div>
  );
}
