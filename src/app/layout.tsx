import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Providers
import { ThemeProvider } from "@/providers/theme-provider";
import AuthSessionProvider from "@/providers/auth-session-provider";

// Components
import { Toaster } from "@/components/ui/sonner";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "DCoin",
    description: "A simple cryptocurrency system made by Dat Phan",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <AuthSessionProvider>
                <body className={font.className}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <Toaster />

                        {children}
                    </ThemeProvider>
                </body>
            </AuthSessionProvider>
        </html>
    );
}
