import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <div className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-center font-[family-name:var(--font-geist-mono)] text-sm sm:text-left">
          <li className="mb-2">
            This is a{' '}
            <code className="rounded bg-black/[.05] px-1 py-0.5 font-semibold dark:bg-white/[.06]">
              Nextjs 14
            </code>{' '}
            App Router template with{' '}
            <code className="rounded bg-black/[.05] px-1 py-0.5 font-semibold dark:bg-white/[.06]">
              TypeScript
            </code>
            ,
            <code className="rounded bg-black/[.05] px-1 py-0.5 font-semibold dark:bg-white/[.06]">
              Tailwind CSS
            </code>
            , and{' '}
            <code className="rounded bg-black/[.05] px-1 py-0.5 font-semibold dark:bg-white/[.06]">
              Shadcn/ui.
            </code>
          </li>
          <li>
            The template includes Lucide Icon, next-themes, .prettierrc, and
            lint-staged pre-commit Hook configration,
          </li>
          <li>
            The template also includes a frequently used directories like
            providers, actions, components, and utils.
          </li>
        </ol>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Button asChild className="rounded-xl">
            <Link href="https://nextjs.org/docs" target="_blank">
              Nextjs Docs
            </Link>
          </Button>
          <Button asChild className="rounded-xl" variant="outline">
            <Link href="https://ui.shadcn.com/docs" target="_blank">
              Shadcn/ui Docs
            </Link>
          </Button>
          <Button asChild className="rounded-xl" variant="outline">
            <Link href="https://tailwindcss.com/docs" target="_blank">
              Tailwindcss Docs
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
