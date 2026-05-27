
export default function Chat() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      <aside className="w-72 border-r border-white/10 p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-6">История чатов</h2>
        <div className="space-y-4">
          <div className="glass p-4 rounded-xl">Консультация #1</div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col">
        <div className="flex-1 p-6 space-y-6">
          <div className="flex gap-3">
            <div>🤖</div>
            <div className="glass p-4 rounded-2xl">
              Чем могу помочь?
            </div>
          </div>

          <div className="flex gap-3 justify-end">
            <div className="glass p-4 rounded-2xl">
              Найди клинику в Астане
            </div>
            <div>🧑</div>
          </div>
        </div>

        <div className="p-6 border-t border-white/10 flex gap-4">
          <input
            className="flex-1 p-4 rounded-2xl bg-white/10"
            placeholder="Введите сообщение..."
          />
          <button className="bg-cyan-500 px-8 rounded-2xl">
            Отправить
          </button>
        </div>
      </main>
    </div>
  );
}
