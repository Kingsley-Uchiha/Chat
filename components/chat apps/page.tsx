import Image from "next/image";

export default function ChatApps() {
  return (
    <div className="apps flex flex-col p-3 gap-3 bg-slate-700 items-center">
      <div className="chat-app">
        <Image src="/C.png" width={50} height={50} alt="Chat" />
      </div>
      <div className="chat-app">
        <Image src="/C.png" width={50} height={50} alt="Chat" />
        <h1>F</h1>
      </div>
      <div className="chat-app">
        <Image src="/C.png" width={50} height={50} alt="Chat" />
        <h1>X</h1>
      </div>
      <div className="chat-app">
        <Image src="/C.png" width={50} height={50} alt="Chat" />
        <h1>IG</h1>
      </div>
    </div>
  );
}
