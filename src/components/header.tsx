import React from "react";
import Link from "next/link";

// Components
import Container from "@/components/container";
import ThemeToggler from "@/components/theme-toggler";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import LogoutHandler from "@/components/auth/logout-handler";

// Assets
import { CircleUser, Menu, Bitcoin, Search } from "lucide-react";

// Auth
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const navItems = [
    { title: "Home", href: "/" },
    { title: "NFTs", href: "#" },
    { title: "Resources", href: "#" },
];

const Header = async () => {
    const session = await getServerSession(authOptions);

    return (
        <header className="border-b bg-background">
            <Container className="flex h-16 w-full items-center gap-4">
                <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                    <Link
                        href="#"
                        className="flex items-center gap-2 text-lg font-semibold md:text-base"
                    >
                        <Bitcoin className="h-6 w-6" />

                        <span className="sr-only">DCoin</span>
                    </Link>

                    {navItems.map((item) => (
                        <Link
                            key={item.title}
                            href={item.href}
                            className="text-muted-foreground transition-colors hover:text-foreground"
                        >
                            {item.title}
                        </Link>
                    ))}
                </nav>

                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="shrink-0 md:hidden"
                        >
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">
                                Toggle navigation menu
                            </span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <nav className="grid gap-6 text-lg font-medium">
                            <Link
                                href="#"
                                className="flex items-center gap-2 text-lg font-semibold"
                            >
                                <Bitcoin className="h-6 w-6" />

                                <span className="sr-only">DCoin</span>
                            </Link>

                            {navItems.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    className="text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </nav>

                        <ThemeToggler />
                    </SheetContent>
                </Sheet>

                <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                    <form className="ml-auto flex-1 sm:flex-initial">
                        <div className="relative">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />

                            <Input
                                type="search"
                                placeholder="Search Address/Block/Token"
                                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                            />
                        </div>
                    </form>

                    <ThemeToggler />

                    {session?.user ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="secondary"
                                    size="icon"
                                    className="rounded-full"
                                >
                                    <CircleUser className="h-5 w-5" />
                                    <span className="sr-only">
                                        Toggle user menu
                                    </span>
                                </Button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>
                                    {session?.user.name}{" "}
                                    {session?.user.role === "admin"
                                        ? " - Admin"
                                        : ""}
                                </DropdownMenuLabel>

                                <DropdownMenuSeparator />

                                <Link href="/me">
                                    <DropdownMenuItem>
                                        Your info
                                    </DropdownMenuItem>
                                </Link>

                                <DropdownMenuSeparator />

                                <DropdownMenuItem>
                                    <LogoutHandler />
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <Link href="/login">
                            <Button>Login</Button>
                        </Link>
                    )}
                </div>
            </Container>
        </header>
    );
};

export default Header;
