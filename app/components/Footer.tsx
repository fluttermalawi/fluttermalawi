import {
  Link,
} from "@remix-run/react";

const Footer = () => {
  return (
    <footer className="bg-navy text-white  mt-auto">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <div className="col-span-1 md:col-span-4 lg:col-span-4">
            <h2 className="text-2xl font-bold text-primary mb-4">Flutter Malawi</h2>
            <p className="mb-4">A community that builds together grows together.</p>
            <div className="flex space-x-4">
              <a href="https://x.com/fluttermalawi" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                <i className="iconoir-x h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                    href="https://docs.flutter.dev/get-started/install"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                    href="https://docs.flutter.dev/codelabs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                >
                  Tutorials
                </a>
              </li>
              <li>
                <a
                    href="https://medium.com/flutter/latest"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                    href="https://dashatar-dev.web.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                >
                  Dashatar
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/code-of-conduct" className="hover:text-primary">
                  Code of Conduct
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-primary">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-primary">
                  Projects
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-muted-foreground/20">
          <div className="flex flex-col-reverse sm:flex-row justify-between items-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Flutter Malawi.
            </p>
            <div className="flex space-x-4 mb-4 sm:mb-0">
              <p className="text-xs text-white justify-center">
                Flutter, Dart and the related logo are trademarks of Google LLC. Flutter Malawi
                Community is not affiliated with or otherwise sponsored by Google LLC.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;