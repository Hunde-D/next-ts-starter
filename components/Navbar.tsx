'use client';
import Link from 'next/link';
import {
  Button,
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui';
import { PanelLeft, Archive, User } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { sidebarLinks } from '@/constants';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 flex h-14 w-full items-center bg-background px-3">
      <Link
        href="/"
        className="flex items-center gap-2 place-self-center text-primary hover:text-primary/70 sm:hidden"
      >
        {/* replace this with logo */}
        <Archive size={35} className="" />
        <p className={cn('text-xl font-bold')}> Starter</p>
      </Link>
      <div className="flex-center ml-auto gap-1">
        <ThemeToggle />
        <div className="flex-center duration-8000 size-9 rounded-lg hover:bg-muted">
          {/* replace this with user profile icon */}
          <User size={20} className="text-primary" />
        </div>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            size="icon"
            variant="outline"
            className="border-none shadow-none sm:hidden"
          >
            <PanelLeft className="h-5 w-5 text-primary" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col sm:max-w-xs">
          <Link href="/" className="place-self-center">
            {/* replace this with logo */}
            <Archive size={35} className="text-primary hover:text-primary/70" />
          </Link>
          <nav className="mt-5 grid gap-6 text-lg font-medium">
            {sidebarLinks.map(link => {
              const isActive = pathname === link.route;
              return (
                <SheetClose asChild key={link.route}>
                  <Link
                    key={link.route}
                    // href={link.route}
                    href="/"
                    className={cn(
                      'flex items-center gap-3 rounded-lg px-4 py-2 hover:bg-muted hover:text-primary',
                      {
                        'bg-muted text-primary': isActive,
                      },
                    )}
                  >
                    <link.icon className="size-5 text-sm" strokeWidth={1.5} />
                    <span>{link.label}</span>
                  </Link>
                </SheetClose>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};
export default Navbar;
