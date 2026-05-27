
import { clinics } from "../data/mockData";

export default function Clinics() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold mb-10">Клиники</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {clinics.map((clinic) => (
          <div key={clinic.id} className="glass rounded-3xl p-6">
            <h2 className="text-2xl font-bold">{clinic.name}</h2>
            <p className="mt-2">⭐ {clinic.rating}</p>
            <p>{clinic.address}</p>
            <p>Стаж врачей: {clinic.experience}</p>

            <button className="mt-4 bg-cyan-500 px-5 py-3 rounded-xl">
              Подробнее
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
