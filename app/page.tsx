<<<<<<< HEAD
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
=======
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import CwNavbar from "./_components/cw-navbar";
>>>>>>> dddce42 (feat: add navbar component)

const Home = async () => {
  const { userId } = await auth();
  if (!userId) {
<<<<<<< HEAD
    redirect("/login");
  }
  return (
    <div className="h-full flex items-center justify-center">
      <UserButton />
    </div>
  );
=======
    redirect("/subscription");
  }
  return <CwNavbar />;
>>>>>>> dddce42 (feat: add navbar component)
};
export default Home;
