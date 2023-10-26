import Image from 'next/image';

export default function ChatProfile() {
  return (
    
    <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-600">
      <div className="avatar rounded-xl bg-slate-800 p-2">
        <Image className="chat-profile-img rounded-full" src="/User.png" width={40} height={40} alt="User Profile" />
      </div>
      <h1 className="text-xl font-semibold">User Name.</h1>
    </div>
  );
}
