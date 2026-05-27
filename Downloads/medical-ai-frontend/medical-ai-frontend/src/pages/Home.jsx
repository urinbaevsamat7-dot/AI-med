
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-5xl font-bold leading-tight">
            ИИ-помощник для поиска клиник, врачей и медикаментов
          </h1>

          <p className="text-gray-400 mt-6 text-lg">
            Современный AI сервис для поиска медицинских услуг и консультаций.
          </p>

          <Link
            to="/chat"
            className="inline-block mt-8 px-8 py-4 bg-cyan-500 rounded-2xl text-lg"
          >
            Начать
          </Link>
        </div>

        <div className="glass rounded-3xl p-10 h-96 flex items-center justify-center">
          <span className="text-7xl">🩺</span>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-10">Возможности</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Поиск клиник",
            "Поиск врачей",
            "Поиск лекарств",
            "AI-консультант",
            "Отзывы",
          ].map((item) => (
            <div key={item} className="glass rounded-3xl p-6">
              <h3 className="text-2xl font-semibold">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            ["150+", "Клиник"],
            ["800+", "Врачей"],
            ["400+", "Аптек"],
            ["20K+", "Пользователей"],
          ].map(([num, text]) => (
            <div key={text} className="glass p-8 rounded-3xl text-center">
              <h3 className="text-4xl font-bold text-cyan-400">{num}</h3>
              <p className="mt-2 text-gray-400">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
