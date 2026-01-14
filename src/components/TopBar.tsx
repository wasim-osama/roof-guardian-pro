import { Phone, Mail, Clock } from "lucide-react";

export const TopBar = () => {
  return (
    <div className="bg-secondary text-secondary-foreground py-2 hidden md:block">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a 
              href="tel:07746237030" 
              className="flex items-center gap-2 font-poppins font-medium hover:text-action transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>Need Any Roofing Help? Call Now</span>
              <span className="font-bold">(07746) 237030</span>
            </a>
            <a 
              href="mailto:info@khroofing.co.uk" 
              className="flex items-center gap-2 font-roboto hover:text-action transition-colors"
            >
              <Mail className="h-4 w-4" />
              info@khroofing.co.uk
            </a>
          </div>
          <div className="flex items-center gap-2 font-roboto text-secondary-foreground/80">
            <Clock className="h-4 w-4" />
            <span>Mon-Sat: 8AM - 6PM</span>
          </div>
        </div>
      </div>
    </div>
  );
};
