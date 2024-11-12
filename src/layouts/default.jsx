import { Navbar } from "@/components/navbar.jsx";

export default function DefaultLayout({ children }) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        {/*<Link*/}
        {/*  isExternal*/}
        {/*  className="flex items-center gap-1 text-current"*/}
        {/*  href="https://nextui-docs-v2.vercel.app?utm_source=next-pages-template"*/}
        {/*  title="nextui.org homepage"*/}
        {/*>*/}
        <span className="text-default-600 mr-1">Powered by</span>
        <p className="text-primary">SoupBun</p>
        {/*</Link>*/}
      </footer>
    </div>
  );
}