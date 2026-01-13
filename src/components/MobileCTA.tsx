import { Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export const MobileCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card border-t border-border p-3 shadow-elevated">
      <div className="flex gap-3">
        <Button variant="outline" className="flex-1 font-poppins font-semibold" asChild>
          <a href="tel:07746237030" className="flex items-center justify-center gap-2"><Phone className="h-4 w-4" />Call Kevin</a>
        </Button>
        <Button className="flex-1 bg-action hover:bg-action/90 text-action-foreground font-poppins font-semibold" asChild>
          <a href="#booking" className="flex items-center justify-center gap-2"><Calendar className="h-4 w-4" />Fast Triage</a>
        </Button>
      </div>
    </div>
  );
};
