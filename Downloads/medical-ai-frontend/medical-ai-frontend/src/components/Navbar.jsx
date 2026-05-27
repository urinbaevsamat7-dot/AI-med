
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 glass px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-cyan-400">
          Medical AI
        </Link>

        <div className="hidden md:flex gap-6 items-center">
          <Link to="/">Главная</Link>
          <Link to="/clinics">Клиники</Link>
          <Link to="/pharmacies">Аптеки</Link>
          <Link to="/chat">AI Чат</Link>
          <Link to="/about">О сервисе</Link>

          <Link to="/login" className="px-4 py-2 border rounded-xl">
            Вход
          </Link>

          <Link to="/register" className="px-4 py-2 bg-cyan-500 rounded-xl">
            Регистрация
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-4">
          <Link to="/">Главная</Link>
          <Link to="/clinics">Клиники</Link>
          <Link to="/pharmacies">Аптеки</Link>
          <Link to="/chat">AI Чат</Link>
        </div>
      )}
    </nav>
  );
}
