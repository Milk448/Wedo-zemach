import React from 'react';

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header Section */}
      <header className="bg-cover bg-center h-64" style={{ backgroundImage: 'url(/path/to/your/background-image.jpg)' }}>
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <h1 className="text-white text-4xl font-bold">About Us</h1>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="flex-grow p-8 bg-white">
        {/* Our Mission & Our Vision */}
        <section className="flex flex-col md:flex-row mb-10">
          <div className="flex-1 bg-gray-100 p-8 rounded-lg shadow-md mx-2">
            <h2 className="text-3xl font-semibold text-blue-600">Our Mission</h2>
            <p className="text-gray-700 mt-4">To empower communities through education and sustainable initiatives.</p>
          </div>
          <div className="flex-1 bg-gray-100 p-8 rounded-lg shadow-md mx-2 mt-4 md:mt-0">
            <h2 className="text-3xl font-semibold text-blue-600">Our Vision</h2>
            <p className="text-gray-600 mt-4">A world where everyone has access to quality education and resources.</p>
          </div>
        </section>

        {/* Our History & Meet Our Team */}
        <section className="flex flex-col md:flex-row mb-10">
          <div className="flex-1 bg-gray-100 p-8 rounded-lg shadow-md mx-2">
            <h2 className="text-3xl font-semibold text-blue-600">Our History</h2>
            <p className="text-gray-700 mt-4">Founded in [Year], we have been working tirelessly to make a difference. Our journey began with [brief history].</p>
          </div>
          <div className="flex-1 bg-gray-100 p-8 rounded-lg shadow-md mx-2 mt-4 md:mt-0">
            <h2 className="text-3xl font-semibold text-blue-600">Meet Our Team</h2>
            <ul className="list-disc list-inside text-gray-600 mt-4">
              <li>
                <strong>[Team Member Name]</strong> - [Position]
                <p>[Brief bio]</p>
              </li>
              <li>
                <strong>[Team Member Name]</strong> - [Position]
                <p>[Brief bio]</p>
              </li>
              {/* Add more team members as needed */}
            </ul>
          </div>
        </section>

        {/* Testimonials & Impact Stories */}
        <section className="flex flex-col md:flex-row mb-10">
          <div className="flex-1 bg-gray-100 p-8 rounded-lg shadow-md mx-2">
            <h2 className="text-3xl font-semibold text-blue-600">Testimonials</h2>
            <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-600 mt-4">
              <p>"[Testimonial content]"</p>
              <footer className="text-gray-500">- [Name, Title/Organization]</footer>
            </blockquote>
            {/* Add more testimonials as needed */}
          </div>
          <div className="flex-1 bg-gray-100 p-8 rounded-lg shadow-md mx-2 mt-4 md:mt-0">
            <h2 className="text-3xl font-semibold text-blue-600">Impact Stories</h2>
            <article className="mt-4">
              <h3 className="text-2xl font-semibold text-gray-800">[Story Title]</h3>
              <p className="text-gray-600">[Brief narrative about the impact]</p>
            </article>
            {/* Add more stories as needed */}
          </div>
        </section>

        {/* Get Involved Section */}
        <section className="flex-grow flex items-center justify-center bg-gray-100 p-8">
          <div className="max-w-4xl text-center">
            <h2 className="text-3xl font-semibold text-blue-600">Get Involved</h2>
            <p className="text-gray-700 mt-4">
              Join us in making a difference!{' '}
              <a href="/get-involved" className="text-blue-600 underline hover:text-blue-800">
                Learn more
              </a>.
            </p>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-200 text-center p-4">
        <p className="text-gray-600">© {new Date().getFullYear()} Your Organization Name. All rights reserved.</p>
      </footer>
    </div>
  );
}