import ChatProfile from "../chat profile/page";

export default function Chats() {
  return (
    <div className="chats col-span-4 flex flex-col gap-3 bg-slate-700 h-screen overflow-y-scroll">
      <div className="header p-3 bg-slate-600 flex justify-between items-center">
        <h2 className="text-4xl font-bold">Chats</h2>
        <div className="opt"></div>
      </div>
      <div className="chats-list p-3 flex flex-col gap-3">
        <ChatProfile />
        <ChatProfile />
        <ChatProfile />
        <ChatProfile />
        <ChatProfile />
        <ChatProfile />
        <ChatProfile />
        <ChatProfile />
        <ChatProfile />
        <ChatProfile />
        <ChatProfile />
        <ChatProfile />
      </div>
    </div>
  );
}