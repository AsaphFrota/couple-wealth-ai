import { db } from "../_lib/prisma";
import { Transaction } from "@prisma/client";

import { transactionColumns } from "./_columns";
import AddTransactionButton from "../_component/add-transactions-button";
import { DataTable } from "../_lib/ui/data-table";

const transactons: Transaction[] = await db.transaction.findMany();

const TransactionsPage = async () => {
  return (
    <div className="space-y-6 p-6">
      {/* TÍTULO E BOTÃO */}
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>
        <AddTransactionButton />
      </div>
      <DataTable columns={transactionColumns} data={transactons} />
    </div>
  );
};

export default TransactionsPage;
