import Link from 'next/link';
import { getHeaderMenu } from '@/lib/wordpress';
import MobileMenu from '@/components/layout/MobileMenu';
import NavDropdown from '@/components/layout/NavDropdown';
import Logo from '@/components/Logo';

export default async function Header() {
    const menuItems = await getHeaderMenu();

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
            <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">

                {/* Logo */}
                <Logo className="flex items-center gap-2 group" />


                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {menuItems.map((item) => (
                        <NavDropdown key={item.id} item={item} />
                    ))}
                </nav>

                {/* Mobile Menu Toggle (Client Component) */}
                <MobileMenu menuItems={menuItems} />
            </div>
        </header>
    );
}