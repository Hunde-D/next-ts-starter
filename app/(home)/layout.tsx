import { Sidebar, Navbar } from '@/components/index';
import { ScrollArea } from '@/components/ui/scroll-area';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="fixed flex min-h-screen w-full bg-muted/40">
      <Sidebar />
      <div className="flex h-dvh w-full flex-col sm:pl-14">
        <Navbar />
        <ScrollArea className="h-full w-full sm:h-full">
          <main className="h-full w-full bg-muted/50 px-5 pb-5 pt-5 dark:bg-black/10">
            {children}
          </main>
        </ScrollArea>
      </div>
    </div>
  );
};
export default HomeLayout;
