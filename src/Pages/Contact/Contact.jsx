
const Contact = () => {

    return (
        <div className="bg-cyan-50 min-h-screen px-4 py-12">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
                <h1 className="text-3xl md:text-4xl font-bold text-cyan-600 mb-6 text-center">
                    Contact Us
                </h1>
                <p className="text-gray-700 text-center mb-6">
                    Have questions or need support? Fill out the form below and we'll get
                    back to you as soon as possible.
                </p>

                <form className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="input input-bordered w-full"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Subject"
                        className="input input-bordered w-full"
                        required
                    />
                    <textarea
                        placeholder="Message"
                        className="textarea textarea-bordered w-full"
                        rows={5}
                        required
                    ></textarea>
                    <button className="btn btn-primary w-full hover:bg-cyan-700 transition">
                        Send Message
                    </button>
                </form>

                {/* Contact Info */}
                <div className="mt-8 text-center text-gray-600">
                    <p>Email : amitsarkar.dev.bd@gmail.com</p>
                    <p>Phone : +880 1986804513</p>
                    <p>Address : Mirpur-2 , Duip-Residential, Dhaka, Bangladesh</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
