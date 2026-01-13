import { Phone, Mail, MapPin, Shield, Award } from "lucide-react";
import logo from "@/assets/kh-roofing-logo.webp";

const areas = ["Doncaster", "Adwick", "Thorne", "Bentley", "Armthorpe", "Rossington", "Hatfield", "Mexborough"];

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <img src={logo} alt="KH Roofing" className="h-12 mb-4" />
            <p className="font-roboto text-secondary-foreground/80 max-w-md mb-6">Doncaster's trusted, owner-led roofing specialists. Honest work, fair prices, guaranteed quality.</p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 bg-secondary-foreground/10 rounded-lg px-3 py-2"><Shield className="h-4 w-4" /><span className="font-poppins text-xs font-medium">NFRC</span></div>
              <div className="flex items-center gap-2 bg-secondary-foreground/10 rounded-lg px-3 py-2"><Award className="h-4 w-4" /><span className="font-poppins text-xs font-medium">Fully Insured</span></div>
            </div>
          </div>
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-4">Contact</h4>
            <div className="space-y-3 font-roboto text-secondary-foreground/80">
              <a href="tel:07746237030" className="flex items-center gap-2 hover:text-primary transition-colors"><Phone className="h-4 w-4" />07746 237030</a>
              <a href="mailto:info@khroofing.co.uk" className="flex items-center gap-2 hover:text-primary transition-colors"><Mail className="h-4 w-4" />info@khroofing.co.uk</a>
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4" />Doncaster, South Yorkshire</div>
            </div>
          </div>
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-4">Service Areas</h4>
            <div className="grid grid-cols-2 gap-2 font-roboto text-sm text-secondary-foreground/80">
              {areas.map((area) => (<span key={area}>{area}</span>))}
            </div>
          </div>
        </div>
        <div className="border-t border-secondary-foreground/20 pt-8 text-center font-roboto text-sm text-secondary-foreground/60">
          <p>© {new Date().getFullYear()} KH Roofing. All rights reserved. | Kevin Hepworth, Owner-Operator</p>
        </div>
      </div>
    </footer>
  );
};
