
import { pharmacies } from "../data/mockData";

export default function Pharmacies() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold mb-10">Аптеки</h1>

      <input
        className="w-full p-4 rounded-2xl bg-white/10 mb-10"
        placeholder="Поиск медикаментов..."
      />

      <div className="space-y-6">
        {pharmacies.map((item) => (
          <div key={item.id} className="glass p-6 rounded-3xl">
            <h2 className="text-2xl font-bold">{item.medicine}</h2>
            <p>Наличие: {item.available ? "Есть" : "Нет"}</p>
            <p>Цена: {item.price}</p>
            <p>{item.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
