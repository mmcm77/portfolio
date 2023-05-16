import Link from "next/link";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      <div className="flex flex-col items-center mt-8">
        <h1 className="text-3xl font-bold mb-2">About Me</h1>
        <p className="text-lg text-center">
          Hi there! I{"'"}m Mike, and this is my playground for learning.
        </p>
        <p className="text-lg text-center pt-10">
          <Link href="https://www.linkedin.com/in/mcmillanm/">Linkedin 🔗</Link>
        </p>
        <p className="text-lg text-center">
          <Link href="https://twitter.com/mike__mcmillan">Twitter 🔗</Link>
        </p>
      </div>
    </main>
  );
}
