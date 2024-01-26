import { UserButton } from '@clerk/nextjs';

/**
 * Wrapper for Clerks UserButton component
 */
export default function SignOutButton() {
  return (
    <div>
      <UserButton afterSignOutUrl='/' />
    </div>
  );
}
