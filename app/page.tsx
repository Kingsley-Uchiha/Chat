import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="">
      <nav className="navbar fixed px-16 py-5 border-b border-slate-500">
        <div className="navbar-start">
          <div className="k_logo">
            <Image src="/Kode.png" width={40} height={40} alt="Kode" />
          </div>
        </div>
        <div className="navbar-center">
          <div className="logo">
            <Image src="/Chat.png" width={160} height={160} alt="Chat" />
          </div>
        </div>
        <div className="navbar-end btn-group">
          <Link href="/signup" className="btn btn-info btn-outline">
            Sign up
          </Link>
          <Link href="/signin" className="btn btn-info">
            Sign in
          </Link>
        </div>
      </nav>
      <header className="hero h-screen">
        <div className="txt flex flex-col items-center justify-center gap-20">
          <h1 className="hero-content flex-col gap-5 text-6xl font-bold">
            The new, better WhatsApp...
            <span className="text-sky-600 text-9xl">Chat</span>
          </h1>
          <div className="flex gap-6">
            <Link href="/signup" className="btn btn-info btn-outline">
              Sign up
            </Link>
            <Link href="/signin" className="btn btn-info">
              Sign in
            </Link>
          </div>
        </div>
      </header>
    </main>
  );
}
