import React from 'react';
import UserProfileDangerZone from '@components/user/profile/user-profile-danger-zone';

export default async function ProfilePage() {
  return (
    <div className="flex flex-col justify-center gap-4">
      <div className="bg-background-alternate p-4 shadow-lg rounded-lg border">
        <h1 className="text-2xl font-bold">Profile Settings</h1>
      </div>

      <UserProfileDangerZone />
    </div>
  );
}
