import { FaRegSmile, FaPaperPlane, FaPlus } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { FiMoreVertical } from "react-icons/fi";

export default function ChatHome() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-white border-r hidden md:flex flex-col">
        {/* Profile Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-semibold text-lg">Chats</h2>
          <div className="flex gap-3 text-gray-600 text-xl">
            <FaPlus className="cursor-pointer hover:text-gray-800" />
            <FiMoreVertical className="cursor-pointer hover:text-gray-800" />
          </div>
        </div>

        {/* Search Bar */}
        <div className="p-3">
          <div className="flex items-center bg-gray-100 rounded-full px-3 py-2">
            <IoSearchOutline className="text-gray-500 text-lg" />
            <input
              type="text"
              placeholder="Search or start new chat"
              className="ml-2 bg-transparent outline-none w-full text-sm"
            />
          </div>
        </div>

        {/* Chat List */}
        <div className="overflow-y-auto flex-1">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="flex items-center p-3 hover:bg-gray-50 cursor-pointer border-b"
            >
              <img
                src={`https://i.pravatar.cc/40?img=${i + 1}`}
                alt="avatar"
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-3 flex-1">
                <h4 className="font-medium text-gray-800">User {i + 1}</h4>
                <p className="text-gray-500 text-sm truncate">
                  Last message preview...
                </p>
              </div>
              <span className="text-xs text-gray-400">12:0{i} PM</span>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-1 flex flex-col bg-gray-50">
        {/* Chat Header */}
        <div className="flex justify-between items-center p-4 border-b bg-white">
          <div className="flex items-center">
            <img
              src="https://i.pravatar.cc/40?img=11"
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-3">
              <h4 className="font-medium text-gray-800">John Doe</h4>
              <p className="text-sm text-gray-500">Online</p>
            </div>
          </div>
          <FiMoreVertical className="text-gray-600 text-xl cursor-pointer" />
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 overflow-y-auto bg-gray-100">
          <div className="space-y-3">
            <div className="flex justify-start">
              <div className="bg-white px-4 py-2 rounded-lg shadow text-sm max-w-xs">
                Hey there!
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-green-100 px-4 py-2 rounded-lg shadow text-sm max-w-xs">
                Hi! How are you?
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-white px-4 py-2 rounded-lg shadow text-sm max-w-xs">
                I’m good. Working on a new project.
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-green-100 px-4 py-2 rounded-lg shadow text-sm max-w-xs">
                That’s awesome! Tell me more.
              </div>
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div className="flex items-center p-3 bg-white border-t">
          <FaRegSmile className="text-gray-500 text-xl mx-2 cursor-pointer" />
          <input
            type="text"
            placeholder="Type a message"
            className="flex-1 outline-none px-3 py-2 bg-gray-100 rounded-full text-sm"
          />
          <FaPaperPlane className="text-blue-500 text-xl ml-3 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
