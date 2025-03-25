import './globals.css'


export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/events">Events</a></li>
          </ul>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}

