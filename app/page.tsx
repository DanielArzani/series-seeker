import Header from './ui/Header/Header';

/**
 * The homepage
 * The root route (/)
 */
export default function Homepage() {
  return (
    <>
      <Header />

      {/* these are my guesses at how this be structured and whether they are client or server 
      components */}
      {/* <header id="server--0">
        <div id='server--1' className='logo'></div>

        <nav id='client--1'></nav>

        <div id='server--2(clerk)' className='userProfileImage'>
            <UserButton afterSignOutUrl='/login' />
        </div>
      </header>

      <div id='client--2' className='searchBar'></div>

      <div id='server--3' className='trending movies'></div>

      <div id='server--4' className='listOfMovies'></div> */}
    </>
  );
}
