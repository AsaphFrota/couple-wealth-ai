import { Badge } from "@/app/_lib/ui/badge";
import { Transaction, TransactionType } from "@prisma/client";
import { CircleIcon } from "lucide-react";

interface TransactionTypeBadgeProps {
  transaction: Transaction;
}

const TransactionTypeBadge = ({ transaction }: TransactionTypeBadgeProps) => {
  if (transaction.type === TransactionType.DEPOSIT) {
    return (
      <Badge className="hover:bg-muted font-bold bg-muted text-primary">
        <CircleIcon className="fill-primary mr-2" size={10} />
        Ganho
      </Badge>
    );
  }
  if (transaction.type === TransactionType.EXPENSE) {
    return (
      <Badge className="hover:bg-muted font-bold text-danger bg-danger bg-opacity-10">
        <CircleIcon className="fill-danger mr-2" size={10} />
        Gasto
      </Badge>
    );
  }
  return (
    <Badge className="hover:bg-muted font-bold text-white bg-white bg-opacity-10">
      <CircleIcon className="fill-white mr-2" size={10} />
      Investimento
    </Badge>
  );
};

export default TransactionTypeBadge;
