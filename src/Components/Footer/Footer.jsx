import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-cyan-50 text-gray-700 p-10 sm:p-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

                {/* Services */}
                <div>
                    <h6 className="text-lg font-bold text-cyan-700 mb-4">Services</h6>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-cyan-500 transition">Branding</a></li>
                        <li><a href="#" className="hover:text-cyan-500 transition">Development</a></li>
                        <li><a href="#" className="hover:text-cyan-500 transition">Software</a></li>
                        <li><a href="#" className="hover:text-cyan-500 transition">Design</a></li>
                        <li><a href="#" className="hover:text-cyan-500 transition">Marketing</a></li>
                        <li><a href="#" className="hover:text-cyan-500 transition">Advertisement</a></li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h6 className="text-lg font-bold text-cyan-700 mb-4">Company</h6>
                    <ul className="space-y-2">
                        <li><a className="hover:text-cyan-500 transition"><Link to='/about'>About us</Link></a></li>
                        <li><a className="hover:text-cyan-500 transition"><Link to='/contact'>Contact</Link></a></li>
                        <li><a className="hover:text-cyan-500 transition"><Link to='/'>Jobs</Link></a></li>
                        <li><a href="#" className="hover:text-cyan-500 transition">Press kit</a></li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h6 className="text-lg font-bold text-cyan-700 mb-4">Legal</h6>
                    <ul className="space-y-2">
                        <li><a className="hover:text-cyan-500 transition"><Link to='/terms'>Terms of use</Link></a></li>
                        <li><a className="hover:text-cyan-500 transition"><Link to='/privacy'>Privacy policy</Link></a></li>
                        <li><a className="hover:text-cyan-500 transition"><Link to='/cookie'>Cookie policy</Link></a></li>
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
