import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import CwNavbar from "./_components/cw-navbar";

const Home = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }
  return <CwNavbar />;
};
export default Home;
