import Navbar from "./components/Navbar";

type Props = {
  children: React.ReactNode;
};

export default function Page({ children }: Props) {
  return (
    <div className="min-h-screen bg-[#0a192f] text-slate-300">
      <Navbar />
      <main className="p-6">{children}</main>
    </div>
  );
}