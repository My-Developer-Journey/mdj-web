import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[var(--primary-black)] text-gray-300 px-10 py-12 mt-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
                <div className="col-span-1">
                    <Image height="0" width="0" src="/logo-alt.png" alt="Logo" className="h-10 w-auto mb-4" />
                </div>

                <div>
                <h3 className="font-semibold mb-2 text-white">MY DEVELOPER JOURNEY</h3>
                <ul className="space-y-1">
                    <li><Link href="#" className="hover:underline">Questions</Link></li>
                    <li><Link href="#" className="hover:underline">Help</Link></li>
                    <li><Link href="#" className="hover:underline">Chat</Link></li>
                </ul>
                </div>

                <div>
                <h3 className="font-semibold mb-2 text-white">PRODUCTS</h3>
                <ul className="space-y-1">
                    <li><Link href="#" className="hover:underline">Teams</Link></li>
                    <li><Link href="#" className="hover:underline">Advertising</Link></li>
                    <li><Link href="#" className="hover:underline">Talent</Link></li>
                </ul>
                </div>

                <div>
                <h3 className="font-semibold mb-2 text-white">COMPANY</h3>
                <ul className="space-y-1">
                    <li><Link href="#" className="hover:underline">About</Link></li>
                    <li><Link href="#" className="hover:underline">Press</Link></li>
                    <li><Link href="#" className="hover:underline">Work Here</Link></li>
                    <li><Link href="#" className="hover:underline">Legal</Link></li>
                    <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
                    <li><Link href="#" className="hover:underline">Terms of Service</Link></li>
                    <li><Link href="#" className="hover:underline">Contact Us</Link></li>
                </ul>
                </div>

                <div>
                <h3 className="font-semibold mb-2 text-white">EXCHANGE NETWORK</h3>
                <ul className="space-y-1">
                    <li><Link href="#" className="hover:underline">Technology</Link></li>
                    <li><Link href="#" className="hover:underline">Life & Arts</Link></li>
                    <li><Link href="#" className="hover:underline">Science</Link></li>
                    <li><Link href="#" className="hover:underline">Professional</Link></li>
                    <li><Link href="#" className="hover:underline">Business</Link></li>
                    <li><Link href="#" className="hover:underline">API</Link></li>
                </ul>
                </div>
            </div>

            <div className="mt-12 border-t border-gray-700 pt-6 text-sm flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="space-x-4">
                <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1" target="_blank" rel="noopener noreferrer" className="hover:underline">Blog</Link>
                <Link href="https://www.facebook.com/100009258569058/" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</Link>
                <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1" className="hover:underline">Twitter</Link>
                <Link href="https://www.linkedin.com/in/quanng876/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</Link>
                <Link href="https://www.instagram.com/tum_mi0403/" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</Link>
                </div>
                <div className="text-gray-400">
                © 2025 My Developer Journey. All rights reserved.
                </div>
            </div>
        </footer>
  );
}