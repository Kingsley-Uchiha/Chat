import Link from "next/link";

export default function Signup() {
  return (
    <main className="hero h-screen">
      <form
        action=""
        className="form-control gap-2 py-14 px-8 border border-slate-500 rounded-2xl"
      >
        <h1 className="text-3xl mb-10">Create an account</h1>
        <input
          className="input input-bordered"
          type="text"
          name="User Name"
          placeholder="User Name"
        />
        <input
          className="input input-bordered"
          type="email"
          name="Email"
          placeholder="Email"
        />
        <input
          className="input input-bordered"
          type="password"
          name="Password"
          placeholder="Password"
        />
        <Link href="/chat" type="button" className="btn btn-accent">
          Sign Up
        </Link>
      </form>
    </main>
  );
}
