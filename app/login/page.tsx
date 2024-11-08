import Image from "next/image";
import { Button } from "../_component/ui/button";
import { LogInIcon } from "lucide-react";

const LoginPage = () => {
  return (
    <div className="grid h-full grid-cols-2">
      {/*ESQUERDA*/}
      <div className="mx-auto flex h-full flex-col max-w-[550px] justify-center p-8">
        <Image
          src="/logo.svg"
          width={173}
          height={39}
          alt="Couple Wealth AI"
          className="mb-8"
        />
        <h1 className="mb-3 text-4xl font-bold">Bem-vindo</h1>
        <p className="mb-8 text-muted-foreground">
          A Finance AI é uma plataforma de gestão financeira que utiliza IA para
          monitorar suas movimentações, e oferecer insights personalizados,
          facilitando o controle do seu orçamento.
        </p>
        <Button variant="outline">
          <LogInIcon className="mb-2" />
          Fazer Login
        </Button>
      </div>
      {/*DIREITA*/}
      <div className="relative h-full w-full">
        <Image
          src="/login.png"
          alt="Faça Login"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
