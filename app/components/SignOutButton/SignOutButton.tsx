import { UserButton } from '@clerk/nextjs';

export default function SignOutButton() {
  return (
    <div>
      <UserButton afterSignOutUrl='/login' />
    </div>
  );
}
