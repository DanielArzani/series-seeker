/**
 * Function for changing the theme
 * @param theme - The string name by which the theme is called as defined in lib/themes
 * @example
 * <div className='h-screen grid place-items-center bg-primary'>
<div>
// default theme
  <button
    className='py-2 px-8 bg-buttons text-typography m-2'
    onClick={() => changeTheme('')} >
    Default
  </button>

  //  theme 1
  <button
    className='py-2 px-8 bg-buttons text-typography m-2'
    onClick={() => changeTheme('themeDark')}
  >
  </button>

  //  theme 2
  <button
    className='py-2 px-8 bg-buttons text-typography m-2'
    onClick={() => changeTheme('themeLight')}
  >
  </button>
</div>
 */
export const changeTheme = (theme: string) => {
  document.querySelector('html')?.setAttribute('data-theme', theme);
};
