import ChatApps from "@/components/chat apps/page";
import Chats from "@/components/chats/page";

export default function Chat() {
  return (
    <main className="grid grid-cols-12 gap-4">
      <ChatApps />
      <Chats />
      <div className="chat-view"></div>
    </main>
  )
}