import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/ChatSlice';
import ChatMessage from './ChatMessage';
// import { IndeterminateCheckBox } from '@mui/icons-material';

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  // API Polling
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("I am being called");
      // Dispatch the addMessage action
      dispatch(
        addMessage({
          name: "ERAM",
          message: "I am adding messages"
        })
      );
    }, 2000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
      console.log("Interval cleared");
    };
  }, [dispatch]);

  console.log("Chat Messages:", chatMessages); // Log chat messages for debugging

  return (
    <div className="h-[600px] w-[33rem] ml-5 p-2 border border-black bg-gray-50 rounded-lg">
      {/* Render chat messages */}
      {chatMessages.map((message, index) => (
      <ChatMessage key={index} name={message.name} message={message.message} />
))}

    </div>
  );
};

export default LiveChat;
