import React, { useEffect, useRef, useState } from 'react';
import Peer from 'peerjs';

function VideoChat() {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const peer = useRef(null);
  const [peerId, setPeerId] = useState(null); // Store the peer ID for identification

  useEffect(() => {
    // Create a new PeerJS instance
    peer.current = new Peer("Hackcamp2024");

    // Get local media
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((stream) => {
        // Display local video
        localVideoRef.current.srcObject = stream;

        // Call this peer with the local stream
        peer.current.on('call', (call) => {
          call.answer(stream); // Answer the call with the local stream
          call.on('stream', (remoteStream) => {
            remoteVideoRef.current.srcObject = remoteStream; // Display the remote stream
          });
        });
      })
      .catch((err) => {
        console.error('Error accessing media devices:', err);
      });

    // When the peer is open, set the peer ID
    peer.current.on('open', (id) => {
      console.log('My peer ID is:', id);
      setPeerId(id); // Set your peer ID
    });

    return () => {
      // Clean up on component unmount
      if (peer.current) {
        peer.current.destroy();
      }
    };
  }, []);

  // Function to initiate a call to another peer
  const initiateCall = (remotePeerId) => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((stream) => {
        // Display local video
        localVideoRef.current.srcObject = stream;

        // Make the call to another peer
        const call = peer.current.call(remotePeerId, stream);

        // Handle the remote stream
        call.on('stream', (remoteStream) => {
          remoteVideoRef.current.srcObject = remoteStream; // Display the remote video
        });
      })
      .catch((err) => {
        console.error('Error accessing media devices:', err);
      });
  };

  return (
    <div>
      <h1>Inside Video Chat</h1>
      {/* <p>My Peer ID: {peerId}</p> */}
      <div>
        <video ref={localVideoRef} autoPlay muted style={{ width: '300px' }} />
        <video ref={remoteVideoRef} autoPlay style={{ width: '300px' }} />
      </div>
      <div>
        <button onClick={() => initiateCall(peerId)}>Call</button>
      </div>
    </div>
  );
}

export default VideoChat;