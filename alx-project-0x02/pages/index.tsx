import Header from "@/components/layout/Header";
import PageLayout from "@/components/layout/PageLayout";

export default function Home() {
  return (
    <div className="p-4 space-y-4">
      <Header />
      <div className="mt-16">
        <h1 className="text-3xl font-semibold text-gray-900 mb-4">Welcome </h1>
      </div>
    </div>
  );
}
