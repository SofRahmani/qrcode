import { NAVBAR_ITEMS } from "@/config/navbarItems";
import { Menu, Package2 } from "lucide-react";
import Link from "next/link";
import Github from "../settings/Github";
import { ModeToggle } from "../settings/ToggleDarkMode";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

export default function Navbar() {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold md:text-base">
          <Package2 className="size-6" />
          <span className="sr-only">QR Code</span>
        </Link>
        {NAVBAR_ITEMS.map(item => (
          <Link
            key={item.name}
            href={item.href}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            {item.name}
          </Link>
        ))}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="size-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link href="#" className="flex items-center gap-2 text-lg font-semibold">
              <Package2 className="size-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            {NAVBAR_ITEMS.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <div className="ml-auto flex gap-2 sm:flex-initial">
          <Github />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
