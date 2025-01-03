import CwNavbar from "../_components/cw-navbar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const SubscriptionPage = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }
  return <CwNavbar />;
};

export default SubscriptionPage;
