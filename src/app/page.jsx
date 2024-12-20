export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-16 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold">Welcome to the Responsive Layout</h1>
      <p className="text-center text-gray-600">
        This layout dynamically shows a sidebar or top bar based on the screen
        size.
      </p>
    </div>
  );
}
