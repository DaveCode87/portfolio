"use client";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#121212]">
      <h1 className="text-3xl mb-4 text-white">404 Pagina non trovata</h1>
      <p className="mb-8 text-white">
        La pagina che stai cercando non è stata trovata.
      </p>

      <button
        onClick={() => router.push("/")}
        className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg"
      >
        Torna alla Home
      </button>
    </div>
  );
};

export default NotFoundPage;
