<<<<<<< HEAD
import { Button } from "../_components/ui/button";

const SubscriptionPage = () => {
  return (
    <div className="relative h-screen bg-darkBg overflow-hidden">
      {" "}
      {/* Conteúdo da página */}{" "}
      <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-4">
        {" "}
        <h2 className="text-center text-3xl font-medium text-gray-900 dark:text-gray-50 sm:text-6xl">
          Couple Wealth AI{" "}
          <span className="animate-text-gradient inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
            Couple Wealth AI
          </span>
        </h2>
        <p className="text-lg text-gray-400">
          Descubra a experiência de design futurista.
        </p>{" "}
      </div>{" "}
      <div>
        {" "}
        <Button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Comprar agora
        </Button>{" "}
      </div>
    </div>
  );
};
=======
import CwNavbar from "../_components/cw-navbar";

const SubscriptionPage = () => {
  return <CwNavbar />;
};

>>>>>>> dddce42 (feat: add navbar component)
export default SubscriptionPage;
