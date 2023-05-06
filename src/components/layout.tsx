import Navbar from "./navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="max-w-full px-4 sm:px-6 lg:px-8 bg-white dark:bg-grey">
        {children}
      </main>
    </>
  );
}