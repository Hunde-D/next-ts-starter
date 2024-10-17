'use client';
import Link from 'next/link';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui';
import { sidebarLinks } from '@/constants';
import { Archive } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col bg-background sm:flex">
      <nav className="flex flex-col items-center gap-5 px-2 sm:py-3">
        <Link href="/" className="mb-5 place-self-center text-primary">
          {/* replace this with logo */}
          <Archive size={27} className="hover:text-primary/70" />
        </Link>
        <TooltipProvider>
          {sidebarLinks.map(link => (
            <Tooltip key={link.route}>
              <TooltipTrigger asChild>
                <Link
                  // href={link.route}
                  href="/"
                  className={cn(
                    'flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-muted hover:text-primary md:h-8 md:w-8',
                    {
                      'bg-primary/90 text-white hover:bg-primary/70 hover:text-white dark:text-black':
                        pathname === link.route,
                    },
                  )}
                >
                  <link.icon className="size-5 text-sm" strokeWidth={1.25} />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">{link.label}</TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </nav>
    </aside>
  );
};
export default Sidebar;
