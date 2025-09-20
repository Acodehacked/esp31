'use client'
import Link from 'next/link';
import { useState } from 'react';
import { HiMenu, HiX, HiSearch, HiBell } from 'react-icons/hi';
import { ThemeToggle } from '../../components/theme-toggle';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`w-full bg-background border-b border-gray-200 dark:border-gray-800 ${isOpen ? 'relative' : ''}`}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </div>
          <span className="text-xl font-bold text-foreground">MediLink</span>
        </Link>

        {/* Desktop Menu - Centered Navigation */}
        <div className="hidden md:flex items-center bg-secondary rounded-full px-8 py-3 space-x-8 border border-gray-200 dark:border-gray-800">
          <Link href="/" className="text-foreground hover:text-primary font-medium transition-colors">
            Dashboard
          </Link>
          <Link href="#patients" className="text-muted-foreground hover:text-foreground font-medium transition-colors">
            Patients
          </Link>
          <Link href="#prescriptions" className="text-muted-foreground hover:text-foreground font-medium transition-colors">
            Prescriptions
          </Link>
          <Link href="#appointments" className="text-muted-foreground hover:text-foreground font-medium transition-colors">
            Appointments
          </Link>
        </div>

        {/* Desktop Right Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
            <HiSearch className="w-5 h-5" />
          </button>
          <button className="p-2 text-muted-foreground hover:text-foreground transition-colors relative">
            <HiBell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full"></span>
          </button>
          <ThemeToggle />
          <button className="p-1">
            <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
              <span className="text-foreground text-sm font-medium">U</span>
            </div>
          </button>
          <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
            <HiMenu className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <button
            className="text-2xl text-foreground z-100"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden" onClick={() => setIsOpen(false)} />
          <div className="absolute top-16 left-0 right-0 mx-4 bg-card shadow-lg rounded-xl z-50 md:hidden border">
            <div className="flex flex-col space-y-4 px-6 py-4">
              <Link href="/" onClick={() => setIsOpen(false)} className="block text-foreground hover:text-primary">Dashboard</Link>
              <Link href="#patients" onClick={() => setIsOpen(false)} className="block text-muted-foreground hover:text-foreground">Patients</Link>
              <Link href="#prescriptions" onClick={() => setIsOpen(false)} className="block text-muted-foreground hover:text-foreground">Prescriptions</Link>
              <Link href="#appointments" onClick={() => setIsOpen(false)} className="block text-muted-foreground hover:text-foreground">Appointments</Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
