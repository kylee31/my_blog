import Footer from "@/components/Footer";
import NavHeader from "@/components/NavHeader";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen max-w-screen-md relative flex flex-col m-auto px-4 lg:px-0">
      <NavHeader />
      <div className="flex flex-col jusfity-center items-center py-16">
        {children}
      </div>
      <Footer />
    </div>
  );
}
