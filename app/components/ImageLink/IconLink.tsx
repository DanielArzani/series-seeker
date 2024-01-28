import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type IconLinkProps = {
  accessibleText: string;
  activeStyles?: string;
  altText: string;
  icon: string;
  iconClassName?: string;
  iconDimensions?: [width: number, height: number];
  isSrOnly?: boolean;
  url: string;
};

/**
 * This link uses the Link component from next/link and contains an image and accessible text. The component checks the url and applies
 * the 'activeStyles' to the link container if the user's current URL matches the 'url' prop, allowing for custom styling when the link is active.
 * @param accessibleText - Text that is either hidden from sighted users but revealed to screen readers (using 'sr-only' class) or displayed alongside the icon. It inherits the text color of its parent.
 * @param activeStyles - The styles or classes to apply to the link container when the component's 'url' matches the current URL. These can be global styles or Tailwind CSS classes.
 * @param altText - The alternate text for the icon, used for accessibility.
 * @param icon - The path to the icon image.
 * @param iconDimensions - Optional tuple specifying the width and height of the image, ideally matching its aspect ratio.
 * @param isSrOnly - If true, 'accessibleText' is visually hidden but accessible to screen readers. If false, the text is visible.
 * @param url - The destination path that the link routes to.
 * @param iconClassName - Optional classes to apply to the icon for additional styling.
 * @example
 * // .jsx/.tsx file
 *  <li>
      <IconLink
        icon={bookmarkIcon}
        altText='Go to your bookmarks'
        accessibleText='Bookmarks'
        isSrOnly={false}
        activeStyles='bg-red-500' // Class applied to the Link
        iconClassName='white-filter' // Class applied to the icon
        url='/bookmarks'
      />
    </li> 

   // global.module.css
   // will make it so that when the icon is hovered or active, it will be bright white
      .white-filter {
        transition: filter 0.3s ease;
      }

  .white-filter:hover {
        filter: brightness(0) invert(1);
}

  .selected.white-filter {
        filter: brightness(0) invert(1);
      }
}
 **/

export default function IconLink({
  accessibleText,
  activeStyles = '',
  altText,
  icon,
  iconDimensions,
  isSrOnly = true,
  url,
  iconClassName = '',
}: IconLinkProps) {
  const pathname = usePathname();

  const isSelected = (route: string) => pathname === route;
  const isActive = isSelected(url);

  const linkClassNames = clsx('flex items-center gap-2', {
    [activeStyles]: isActive,
  });

  const imageClassNames = clsx(iconClassName, {
    selected: isActive,
  });

  return (
    <Link href={url} className={linkClassNames}>
      <Image
        className={imageClassNames}
        src={icon}
        alt={altText}
        height={iconDimensions?.[1]}
        width={iconDimensions?.[0]}
      />
      {isSrOnly ? (
        <span className='sr-only'>{accessibleText}</span>
      ) : (
        <span className='text-inherit'>{accessibleText}</span>
      )}
    </Link>
  );
}
