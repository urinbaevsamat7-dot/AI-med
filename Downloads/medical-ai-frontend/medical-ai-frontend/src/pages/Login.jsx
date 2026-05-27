
import toast from "react-hot-toast";

export default function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
    toast.success("Успешный вход");
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <form
        onSubmit={handleLogin}
        className="glass p-10 rounded-3xl w-full max-w-md"
      >
        <h1 className="text-4xl font-bold text-white mb-8">Вход</h1>

        <input className="w-full p-4 rounded-xl bg-white/10 mb-4 text-white" placeholder="Email" />
        <input type="password" className="w-full p-4 rounded-xl bg-white/10 mb-4 text-white" placeholder="Пароль" />

        <button className="w-full bg-cyan-500 py-4 rounded-xl text-white">
          Войти
        </button>

        <button
          type="button"
          className="w-full mt-4 border border-white/20 py-4 rounded-xl text-white"
        >
          Вход через Google
        </button>
      </form>
    </div>
  );
}
