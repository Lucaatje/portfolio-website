// import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
};

export default function Page({ children }: Props) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* <Navbar /> */}
      <main className="p-6">{children}</main>
    </div>
  );
}