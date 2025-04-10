import { Sparkles } from "lucide-react"

export function SteamCleaningSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-10 h-10 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Curățenie cu Aburi</h2>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8 transform transition-all hover:scale-[1.01]">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4 text-center">
              ✨ Curățenie impecabilă cu puterea aburului! ✨
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">
              Vrei o soluție eficientă și ecologică pentru curățenia ta? Noi îți oferim servicii profesionale de
              curățenie cu aburi, eliminând murdăria, bacteriile și mirosurile neplăcute – fără chimicale agresive!
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg text-center">
                <div className="mb-2 text-blue-600 dark:text-blue-400 font-bold">✔️</div>
                <p className="text-gray-700 dark:text-gray-300">Curățăm și dezinfectăm rapid și eficient</p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg text-center">
                <div className="mb-2 text-blue-600 dark:text-blue-400 font-bold">✔️</div>
                <p className="text-gray-700 dark:text-gray-300">
                  Soluție eco-friendly – sigură pentru copii și animale
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg text-center">
                <div className="mb-2 text-blue-600 dark:text-blue-400 font-bold">✔️</div>
                <p className="text-gray-700 dark:text-gray-300">
                  Rezultate impecabile pentru mobilier, covoare, tapițerii și multe altele
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button className="btn-gradient px-8 py-3 rounded-full text-white font-medium shadow-lg hover:shadow-xl transition-all">
              Solicită o ofertă pentru curățenie cu aburi
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
