
import toast from "react-hot-toast";

export default function Register() {
  const handleRegister = (e) => {
    e.preventDefault();
    toast.success("Регистрация успешна");
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <form onSubmit={handleRegister} className="glass p-10 rounded-3xl w-full max-w-md">
        <h1 className="text-4xl font-bold text-white mb-8">Регистрация</h1>

        <input className="w-full p-4 rounded-xl bg-white/10 mb-4 text-white" placeholder="Имя" />
        <input className="w-full p-4 rounded-xl bg-white/10 mb-4 text-white" placeholder="Email" />
        <input type="password" className="w-full p-4 rounded-xl bg-white/10 mb-4 text-white" placeholder="Пароль" />
        <input type="password" className="w-full p-4 rounded-xl bg-white/10 mb-4 text-white" placeholder="Подтверждение пароля" />

        <button className="w-full bg-cyan-500 py-4 rounded-xl text-white">
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}
