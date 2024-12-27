import AddTransactionButton from "../_components/add-transaction-button";
import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactionColumns } from "./_columns";
<<<<<<< HEAD
=======
import CwNavbar from "../_components/cw-navbar";
<<<<<<< HEAD
>>>>>>> dddce42 (feat: add navbar component)
=======
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
>>>>>>> 54cdbee (feat: ensure transactions and subscriptions pages are protected)

const TransactionsPage = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }
  const transactions = await db.transaction.findMany({
    where: {
      userId,
    },
  });
  return (
<<<<<<< HEAD
    <div className="space-y-6 p-6">
      {/* TÍTULO E BOTÃO */}
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>
        <AddTransactionButton />
      </div>
      <DataTable columns={transactionColumns} data={transactions} />
    </div>
  );
};

=======
    <>
      <CwNavbar />
      <div className="space-y-6 p-6">
        {/* TÍTULO E BOTÃO */}
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-bold">Transações</h1>
          <AddTransactionButton />
        </div>
        <DataTable columns={transactionColumns} data={transactions} />
      </div>
    </>
  );
};
>>>>>>> dddce42 (feat: add navbar component)
export default TransactionsPage;
