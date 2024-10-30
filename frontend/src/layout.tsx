import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <div className="flex flex-1 justify-center">
        <div className="w-2/2 max-sm:w-4/5">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
