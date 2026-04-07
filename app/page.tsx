import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-4xl flex-col items-center justify-center py-20 px-8 bg-white dark:bg-black sm:items-start">
        
        {/* Logo ou Badge */}
        <div className="mb-8 flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">Tecnologia</span>
        </div>

        <div className="flex flex-col items-center gap-8 text-center sm:items-start sm:text-left">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-black dark:text-zinc-50">
            O que é o <span className="text-blue-600">GitHub?</span>
          </h1>
          
          <div className="space-y-6 max-w-2xl">
            <p className="text-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
              O GitHub é a maior plataforma de <strong>hospedagem de código-fonte</strong> e colaboração do mundo. Ele utiliza o sistema de controle de versão chamado Git para ajudar desenvolvedores a trabalharem juntos em projetos de qualquer lugar do planeta.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-4 border border-zinc-100 dark:border-zinc-800 rounded-xl">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Controle de Versão</h3>
                <p className="text-sm text-zinc-500">Funciona como uma máquina do tempo para o seu código, permitindo salvar versões e desfazer erros facilmente.</p>
              </div>
              <div className="p-4 border border-zinc-100 dark:border-zinc-800 rounded-xl">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Colaboração Social</h3>
                <p className="text-sm text-zinc-500">Desenvolvedores podem sugerir melhorias em projetos de terceiros através de Pull Requests.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-12 w-full sm:flex-row">
          <a
            className="flex h-12 items-center justify-center gap-2 rounded-lg bg-black text-white px-8 text-sm font-medium transition-transform hover:scale-105 dark:bg-white dark:text-black"
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Criar conta gratuita
          </a>
          <a
            className="flex h-12 items-center justify-center rounded-lg border border-zinc-200 px-8 text-sm font-medium transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
            href="https://docs.github.com/pt"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentação oficial
          </a>
        </div>

        <footer className="mt-20 pt-8 border-t border-zinc-100 dark:border-zinc-900 w-full text-zinc-400 text-sm">
          Construído com Next.js e Tailwind CSS para fins educativos.
        </footer>
      </main>
    </div>
  );
}