export default function ChatView() {
  return (
    <div className="chat-view bg-slate-700 col-span-7 h-screen flex flex-col justify-between">
      <div className="user-info p-3 bg-slate-600 flex justify-between items-center">
        <h2 className="text-4xl font-bold">User Name</h2>
        <div className="opt"></div>
      </div>
      <div className="messages"></div>
      <div className="input-fields p-3 bg-slate-600 flex justify-between items-center">
        
      </div>
    </div>
  );
}