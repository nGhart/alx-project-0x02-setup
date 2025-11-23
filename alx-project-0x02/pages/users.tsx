import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { type UserProps } from "@/interfaces";

interface UsersPageProps {
  users: UserProps[];
}

const Users = ({ users }: UsersPageProps) => {
  return (
    <div className="p-4 space-y-4">
      <Header />
      <div className="mt-16 space-y-4">
        <h1 className="text-3xl font-bold">Users</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-4">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      users: data,
    },
  };
}

export default Users;
