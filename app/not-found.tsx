import Link from 'next/link';

/**
 * The page that handles any unmatched urls for the app
 */
export default function NotFound() {
  return (
    <div className='bg-white absolute top-0 left-0 right-0 bottom-0 w-full h-full flex flex-col items-center justify-center p-4'>
      <h2 className='text-3xl font-bold text-gray-800 mb-2'>404 - Not Found</h2>
      <p className='text-lg text-gray-600 mb-4'>
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <Link
        href='/'
        className='text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded shadow'
      >
        Return Home
      </Link>
    </div>
  );
}
