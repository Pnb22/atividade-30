'use client';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 font-sans dark:from-slate-900 dark:to-slate-800 px-4">
      <main className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
             Atividade 30
          </h1>
          <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-200 mb-2">
            CI/CD Pipeline com GitHub Actions
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Integração Contínua e Entrega Contínua para aplicações Next.js
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Feature 1 */}
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-3xl mb-3"></div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              Validação de Código
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              ESLint roda automaticamente em cada push/PR para manter a qualidade do código
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-3xl mb-3"></div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              Testes Automatizados
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Jest executa testes a cada mudança garantindo funcionalidade
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-3xl mb-3"></div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              Build Automático
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Verifica se a aplicação compila corretamente antes do deploy
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-3xl mb-3"></div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              Deploy Contínuo
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Deploy automático no Vercel a cada push na branch main
            </p>
          </div>
        </div>

        {/* Pipeline Steps */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
            Pipeline CI/CD
          </h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md bg-green-100 dark:bg-green-900">
                <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  npm ci
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Instala dependências de forma determinística
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 dark:bg-blue-900">
                <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  npm run lint
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Executa ESLint para validar qualidade do código
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md bg-purple-100 dark:bg-purple-900">
                <span className="text-purple-600 dark:text-purple-400 font-bold">✓</span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  npm run test
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Roda testes com Jest para garantir funcionamento
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md bg-orange-100 dark:bg-orange-900">
                <span className="text-orange-600 dark:text-orange-400 font-bold">✓</span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  npm run build
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Compila a aplicação para produção
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 dark:bg-indigo-900">
                <span className="text-indigo-600 dark:text-indigo-400 font-bold">✓</span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Deploy no Vercel
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Publica automaticamente após sucesso em todas as etapas
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tecnologias */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
            Tecnologias Utilizadas
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              'Next.js 16',
              'React 19',
              'TypeScript',
              'Tailwind CSS',
              'ESLint',
              'Jest',
              'GitHub Actions',
              'Vercel',
            ].map((tech) => (
              <span
                key={tech}
                className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
          >
            📦 Ver no GitHub
          </a>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-slate-700 transition-all"
          >
            📚 Next.js Docs
          </a>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-slate-600 dark:text-slate-400">
          <p>Desenvolvido com  CI/CD</p>
        </div>
      </main>
    </div>
  );
}
