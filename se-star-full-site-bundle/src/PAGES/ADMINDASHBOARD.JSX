import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from 'SE-STAR-FULL-SITE-BUNDLE/SRC/config/firebaseConfig';

const AdminDashboard = () => {
  const [user] = useAuthState(auth);

  return (
    <div style={{ padding: 40 }}>
      <h1>Admin Dashboard</h1>
      {user ? (
        <>
          <p>Logged in as: {user.email}</p>
          <div style={{ marginTop: 30 }}>
            <button onClick={() => alert('Trigger airdrop now')}>🚀 Trigger Airdrop</button>
            <button onClick={() => alert('Export wallet list')}>📤 Export Wallet List</button>
            <button onClick={() => alert('Review flagged wallets')}>🔍 Flag Review</button>
          </div>
        </>
      ) : (
        <p>You must be logged in to access this page.</p>
      )}
    </div>
  );
};

export default AdminDashboard;