export default function Configuracao() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black p-4">
      <main className="flex flex-1 w-full max-w-3xl flex-col bg-white dark:bg-zinc-900 shadow-xl rounded-2xl overflow-hidden my-12 border border-zinc-200 dark:border-zinc-800">
        
        {/* Header */}
        <div className="bg-blue-600 p-8 text-white">
          <h1 className="text-3xl font-bold tracking-tight">Configuração GitHub</h1>
          <p className="mt-2 text-blue-100 italic">Visual Studio Code + Git</p>
        </div>

        <div className="p-8 space-y-10">
          
          {/* Passo 1 */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-sm">1</span>
              Instalar o Git via Terminal
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 ml-10">
              Abra o terminal do VS Code (Ctrl + `) e execute o comando abaixo:
            </p>
            <div className="ml-10 bg-zinc-900 rounded-lg p-4 font-mono text-sm text-green-400 overflow-x-auto">
              winget install --id Git.Git -e --source winget
            </div>
          </section>

          <hr className="border-zinc-100 dark:border-zinc-800" />

          {/* Passo 2 */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-sm">2</span>
              Configurar Usuário Global
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 ml-10">
              Identifique-se para que seus commits fiquem vinculados à sua conta:
            </p>
            <div className="ml-10 space-y-3">
              <div className="bg-zinc-900 rounded-lg p-4 font-mono text-sm text-zinc-300">
                <span className="text-blue-400">git</span> config --global user.email <span className="text-orange-300">email@exemplo.com</span>
              </div>
              <div className="bg-zinc-900 rounded-lg p-4 font-mono text-sm text-zinc-300">
                <span className="text-blue-400">git</span> config --global user.name <span className="text-orange-300">SeuNome</span>
              </div>
            </div>
          </section>

          {/* Aviso Final */}
          <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-4 rounded-r-lg">
            <div className="flex items-center gap-3">
              <span className="text-amber-600 dark:text-amber-400 font-bold">⚠️ Importante:</span>
              <p className="text-sm text-amber-800 dark:text-amber-200">
                Uma janela do navegador será aberta. **Autorize o acesso** quando for perguntado para concluir a conexão.
              </p>
            </div>
          </div>

        </div>

        {/* Footer */}
        <footer className="bg-zinc-50 dark:bg-zinc-800/50 p-6 text-center text-zinc-500 text-xs uppercase tracking-widest border-t border-zinc-100 dark:border-zinc-800">
          Guia de Configuração Rápida
        </footer>
      </main>
    </div>
  );
}