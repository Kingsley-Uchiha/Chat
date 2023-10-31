import ChatApps from "@/components/chat apps/page";
import ChatView from "@/components/chat view/page";
import Chats from "@/components/chats/page";

export default function Chat(props: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}) {
  return (
    <main className="grid grid-cols-12 gap-4 ">
      <ChatApps />
      <Chats />
      <ChatView />
    </main>
  );
}