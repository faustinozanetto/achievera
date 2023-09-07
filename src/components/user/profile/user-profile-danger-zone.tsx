import React from 'react';
import UserProfileDangerZoneDeleteAccount from './user-profile-danger-zone-delete-account';

const UserProfileDangerZone: React.FC = () => {
  return (
    <div className="bg-background-alternate p-4 shadow-lg rounded-lg border-destructive border">
      <h2 className="font-bold text-destructive text-lg">Danger Zone</h2>
      <p className="text-sm sm:text-base">
        Proceed with caution: The actions you take here cannot be undone. Once you confirm, there&apos;s no turning
        back.
      </p>

      <div className="flex justify-end mt-2">
        <UserProfileDangerZoneDeleteAccount />
      </div>
    </div>
  );
};

export default UserProfileDangerZone;
