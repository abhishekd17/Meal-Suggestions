import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-8 text-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">

          {/* About Us & Mission Section */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <p className="text-sm mb-2">We are dedicated to providing AI-driven meal suggestions that help you achieve better fitness and well-being.</p>
            <h3 className="text-lg font-semibold mb-2">Our Mission</h3>
            <p className="text-sm">To empower individuals with personalized, nutritious meal plans that support a healthier lifestyle.</p>
          </div>

          {/* Contact Us Section */}
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="text-sm">Email: <a href="mailto:support@mealmate.com" className="hover:text-blue-400">abdunya7@.com</a></p>
            <p className="text-sm">Phone: <span className="hover:text-blue-400">(123) 456-7890</span></p>
          </div>

        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 pt-4 border-t border-gray-400 text-center text-sm opacity-80">
          <p>&copy; 2024 SmartPlates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

