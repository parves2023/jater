const Footer = () => {
  return (
    <footer className="bg-green-100 w-full py-10">
      <div className="container mx-auto grid md:grid-cols-4 gap-8 px-4">
        {/* Contact Section */}
        <div>
          <h2 className="text-2xl font-bold text-green-800">EduLe</h2>
          <p className="mt-3 text-gray-700">Caribbean Ct</p>
          <p className="text-gray-700">Haymarket, Virginia (VA)</p>
          <div className="mt-4 space-y-2">
            <p className="text-gray-700">
              <span className="font-bold">Email:</span> address@gmail.com
            </p>
            <p className="text-gray-700">
              <span className="font-bold">Phone:</span> (970) 262-1413
            </p>
          </div>
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-gray-700 hover:text-green-800">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-700 hover:text-green-800">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-700 hover:text-green-800">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-700 hover:text-green-800">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Category Section */}
        <div>
          <h3 className="text-lg font-bold text-green-800">Category</h3>
          <ul className="mt-3 space-y-2">
            <li className="text-gray-700">Creative Writing</li>
            <li className="text-gray-700">Film & Video</li>
            <li className="text-gray-700">Graphic Design</li>
            <li className="text-gray-700">UI/UX Design</li>
            <li className="text-gray-700">Business Analytics</li>
            <li className="text-gray-700">Marketing</li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-bold text-green-800">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li className="text-gray-700">Privacy Policy</li>
            <li className="text-gray-700">Discussion</li>
            <li className="text-gray-700">Terms & Conditions</li>
            <li className="text-gray-700">Customer Support</li>
            <li className="text-gray-700">Course FAQs</li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div>
          <h3 className="text-lg font-bold text-green-800">Subscribe</h3>
          <p className="mt-3 text-gray-700">
            Lorem Ipsum has been the industry's standard dummy text ever since.
          </p>
          <div className="mt-4">
            <input
              type="email"
              placeholder="Email here"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="mt-3 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 bg-gray-800 text-center text-white py-4">
        <p>© 2024 <span className="text-green-400">LINGOBINGO</span> Made with ❤ by <span className="text-blue-600 cursor-pointer">Anamul Hauqe</span></p>
      </div>
    </footer>
  );
};

export default Footer;