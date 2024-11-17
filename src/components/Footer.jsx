const Footer = () => {
  return (
    <footer className=" py-10">
      <div className="container mx-auto text-center">
        {/* Footer Header */}
        <div className="grid gap-4 mb-8">
          <h3 className="text-3xl font-bold">Lingo Bingo</h3>
          <p className="text-gray-600">
            Leading the way in Learning and Exchanging IDEAS.
          </p>
        </div>
        <hr className="mb-8" />
        {/* Footer Sections */}
        <div className="grid md:grid-cols-4 grid-cols-1 gap-8 text-left">
          {/* Contact Information */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <p className="text-gray-600">Email: support@gadgetheaven.com</p>
            <p className="text-gray-600">Phone: +1 (800) 123-4567</p>
            <p className="text-gray-600">Address: 123 Tech Avenue, Innovation City</p>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold">Services</h3>
            <ul className="space-y-1 text-gray-600">
              <li>Product Support</li>
              <li>Order Tracking</li>
              <li>Shipping & Delivery</li>
              <li>Returns</li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="space-y-3 flex flex-col">
            <h3 className="text-lg font-bold">Follow Us</h3>
            <ul className="flex gap-4 justify-center flex-col">
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-400"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pink-500"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-800"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold">Legal</h3>
            <ul className="space-y-1 text-gray-600">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
              <li>Accessibility</li>
            </ul>
          </div>
        </div>
        <hr className="my-8" />
        {/* Copyright Notice */}
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Lingo Bingo. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
