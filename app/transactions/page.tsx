import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "../_component/ui/button";
import { db } from "../_lib/prisma";
import { DataTable } from "../_lib/ui/data-table";
import { transactionColumns } from "./_columns";

const TransactionsPage = async () => {
  // acessar as transacoes do meu banco de dados
  const transactions = await db.transaction.findMany({});
  return (
    <div className="p-6 space-y-6">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>
        <Button className="rounded-full">
          Adicionar Transação
          <ArrowDownUpIcon />
        </Button>
      </div>
      <DataTable columns={transactionColumns} data={transactions} />
    </div>
  );
};

export default TransactionsPage;
