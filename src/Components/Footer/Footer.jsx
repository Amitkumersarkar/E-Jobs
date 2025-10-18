import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-cyan-50 text-gray-700 p-10 sm:p-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

                {/* Services */}
                <div>
                    <h6 className="text-lg font-bold text-cyan-700 mb-4">Services</h6>
                    <ul className="space-y-2">
                        <li href="#" className="hover:text-cyan-500 transition">Branding</li>
                        <li href="#" className="hover:text-cyan-500 transition">Development</li>
                        <li href="#" className="hover:text-cyan-500 transition">Software</li>
                        <li href="#" className="hover:text-cyan-500 transition">Design</li>
                        <li href="#" className="hover:text-cyan-500 transition">Marketing</li>
                        <li href="#" className="hover:text-cyan-500 transition">Advertisement</li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h6 className="text-lg font-bold text-cyan-700 mb-4">Company</h6>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/about" className="hover:text-cyan-500 transition">
                                About us
                            </Link>
                        </li>

                        <li className="hover:text-cyan-500 transition"><Link to='/contact'>Contact</Link></li>
                        <li className="hover:text-cyan-500 transition"><Link to='/'>Jobs</Link></li>
                        <li className="hover:text-cyan-500 transition"><Link to='/error'>Press kit</Link></li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h6 className="text-lg font-bold text-cyan-700 mb-4">Legal</h6>
                    <ul className="space-y-2">
                        <li className="hover:text-cyan-500 transition"><Link to='/terms'>Terms of use</Link></li>
                        <li className="hover:text-cyan-500 transition"><Link to='/privacy'>Privacy policy</Link></li>
                        <li className="hover:text-cyan-500 transition"><Link to='/cookie'>Cookie policy</Link></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h6 className="text-lg font-bold text-cyan-700 mb-4">Newsletter</h6>
                    <p className="text-sm mb-2">Subscribe to get latest job updates</p>
                    <div className="flex gap-2 flex-col sm:flex-row">
                        <input
                            type="email"
                            placeholder="username@site.com"
                            className="input input-bordered w-full sm:w-auto flex-1"
                        />

                        <button className="btn btn-primary w-full sm:w-auto">Subscribe</button>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-10 text-center text-gray-500 text-sm sm:text-base">
                © {new Date().getFullYear()} E-Jobs. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
