import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#031d33] text-white px-6 py-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
                {/* Logo */}
                <div className="md:col-span-1">
                    <h1 className="text-3xl font-bold leading-tight">
                        <span className="text-white">THE</span>{" "}
                        <span className="text-cyan-400">MOVIE</span>{" "}
                        <span className="text-white">DB</span>
                    </h1>
                </div>

                {/* Sections */}
                <div>
                    <h2 className="font-bold text-lg mb-3">THE BASICS</h2>
                    <ul className="space-y-2 text-sm">
                        <li>About TMDB</li>
                        <li>Contact Us</li>
                        <li>Support Forums</li>
                        <li>API Documentation</li>
                        <li>System Status</li>
                    </ul>
                </div>

                <div>
                    <h2 className="font-bold text-lg mb-3">GET INVOLVED</h2>
                    <ul className="space-y-2 text-sm">
                        <li>Contribution Bible</li>
                        <li>Add New Movie</li>
                        <li>Add New TV Show</li>
                    </ul>
                </div>

                <div>
                    <h2 className="font-bold text-lg mb-3">COMMUNITY</h2>
                    <ul className="space-y-2 text-sm">
                        <li>Guidelines</li>
                        <li>Discussions</li>
                        <li>Leaderboard</li>
                    </ul>
                </div>

                <div>
                    <h2 className="font-bold text-lg mb-3">LEGAL</h2>
                    <ul className="space-y-2 text-sm">
                        <li>Terms of Use</li>
                        <li>API Terms of Use</li>
                        <li>Privacy Policy</li>
                        <li>DMCA Policy</li>
                    </ul>
                </div>
            </div>

            {/* Welcome Box */}
            <div className="mt-10 flex justify-center">
                <div className="bg-transparent rounded-md px-4 py-2 text-cyan-600 font-bold text-lg shadow">
                    By Anup Kumar Tiwari
                </div>
            </div>

            {/* Build Version */}
            <div className="text-center mt-4 text-xs text-gray-400">
                Build a589d1c (8760)
            </div>
        </footer>
    );
};

export default Footer;
