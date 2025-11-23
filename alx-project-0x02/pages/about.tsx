import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";
import PageLayout from "@/components/layout/PageLayout";

const about = () => {
  return (
    <div className="p-4 space-y-4">
      <Header />
      <div className="mt-16 space-y-4">
        <h1 className="text-3xl font-bold">About Page</h1>
        <div className=" space-x-4">
          <Button size="small" shape="rounded-sm">
            Small Button
          </Button>

          <Button size="medium" shape="rounded-md">
            Medium Button
          </Button>

          <Button size="large" shape="rounded-full">
            Large Button
          </Button>
        </div>
      </div>
    </div>
  );
};

export default about;
