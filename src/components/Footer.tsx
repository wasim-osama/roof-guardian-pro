import { Phone, Mail, MapPin, Shield, Award } from "lucide-react";
import logo from "@/assets/kh-roofing-logo.webp";

const services = [
  "Residential Roofing",
  "Flat Roofs & EPDM",
  "Gutters & Fascias",
  "Chimney Repairs",
  "Emergency Repairs",
  "Roof Maintenance",
];

const company = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#booking" },
];

const areas = [
  "Doncaster",
  "Adwick",
  "Thorne",
  "Bentley",
  "Armthorpe",
  "Rossington",
  "Hatfield",
  "Mexborough",
];

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <img src={logo} alt="KH Roofing" className="h-14 mb-6" />
            <p className="font-roboto text-secondary-foreground/80 mb-6 leading-relaxed">
              Doncaster's trusted, owner-led roofing specialists. Built to last, guaranteed to impress.
            </p>
            <div className="flex gap-3">
              <div className="flex items-center gap-2 bg-secondary-foreground/10 rounded-lg px-3 py-2">
                <Shield className="h-4 w-4 text-action" />
                <span className="font-poppins text-xs font-medium">NFRC</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary-foreground/10 rounded-lg px-3 py-2">
                <Award className="h-4 w-4 text-action" />
                <span className="font-poppins text-xs font-medium">Fully Insured</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-6">COMPANY</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    className="font-roboto text-secondary-foreground/80 hover:text-action transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-6">SERVICES</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a 
                    href="#services" 
                    className="font-roboto text-secondary-foreground/80 hover:text-action transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-6">CONTACT</h4>
            <div className="space-y-4 font-roboto text-secondary-foreground/80">
              <a href="tel:07746237030" className="flex items-center gap-3 hover:text-action transition-colors">
                <Phone className="h-5 w-5 text-action" />
                (07746) 237030
              </a>
              <a href="mailto:info@khroofing.co.uk" className="flex items-center gap-3 hover:text-action transition-colors">
                <Mail className="h-5 w-5 text-action" />
                info@khroofing.co.uk
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-action flex-shrink-0 mt-0.5" />
                <span>Doncaster, South Yorkshire</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-secondary-foreground/20">
              <p className="font-poppins font-medium text-sm mb-2">Service Areas:</p>
              <p className="font-roboto text-sm text-secondary-foreground/60">
                {areas.join(" • ")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="font-roboto text-sm text-secondary-foreground/60">
              © {new Date().getFullYear()} KH Roofing. All rights reserved.
            </p>
            <p className="font-roboto text-sm text-secondary-foreground/60">
              Kevin Hepworth — Owner-Operator | Building Trust, One Roof at a Time
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
