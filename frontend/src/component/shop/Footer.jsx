import React, { useState } from "react";
import { ArrowUp, Facebook,Twitter, Youtube, Instagram } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full bg-white border-t">
      {/* Newsletter Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Newsletter Signup</h2>
          <p className="text-muted-foreground mb-6">
            Would you like to send a confirmation email after subscription?
          </p>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
              required
            />
            <button type="submit" variant="outline">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="#" className="hover:opacity-80">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="hover:opacity-80">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="hover:opacity-80">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
              <a href="#" className="hover:opacity-80">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>

            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              <span>MOVIC</span>
              <span className="mx-1">©</span>
              <span>by Prestashop Themes Template</span>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-6">
              <a href="/store" className="text-sm hover:underline">
                Store
              </a>
              <a href="/order" className="text-sm hover:underline">
                Order
              </a>
              <a href="/contact" className="text-sm hover:underline">
                Contact
              </a>
              <a href="/sitemap" className="text-sm hover:underline">
                Sitemap
              </a>
            </div>
          </div>

          {/* Payment Methods and Back to Top */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-2">
              <img
                src="/placeholder.svg"
                alt="Visa"
                width={40}
                height={25}
                className="h-6 w-auto"
              />
              <img
                src="/placeholder.svg"
                alt="Mastercard"
                width={40}
                height={25}
                className="h-6 w-auto"
              />
              <img
                src="/placeholder.svg"
                alt="American Express"
                width={40}
                height={25}
                className="h-6 w-auto"
              />
              <img
                src="/placeholder.svg"
                alt="PayPal"
                width={40}
                height={25}
                className="h-6 w-auto"
              />
            </div>
            <button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
