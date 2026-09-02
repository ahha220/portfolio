export default function NavBar() {
  return (
    <div className="sticky top-2 z-40 mb-2">
      <div className="mx-auto w-full max-w-3xl flex items-center justify-between py-3">
        <button className="text-lg font-bold uppercase tracking-widest text-white">home</button>
        <div className="flex items-center gap-8">
          <button className="text-lg font-bold uppercase tracking-widest text-white hover:text-blue-500 hover:cursor-pointer transition-colors">projects</button>
          <button className="text-lg font-bold uppercase tracking-widest text-white hover:text-blue-500 transition-colors">additionals.</button>
        </div>
      </div>
    </div>
  );
}
