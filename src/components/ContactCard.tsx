import { Phone, MessageCircle, MapPin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface ContactCardProps {
  phone: string;
  whatsapp?: string;
  email?: string;
  address?: string;
  className?: string;
}

const ContactCard = ({ phone, whatsapp, email, address, className }: ContactCardProps) => {
  return (
    <Card className={`bg-white shadow-card border-0 hover:shadow-elegant transition-smooth ${className}`}>
      <CardContent className="p-8">
        <h3 className="text-xl font-semibold text-foreground mb-6">Contact Information</h3>
        
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Phone</p>
              <a href={`tel:${phone}`} className="text-primary font-medium hover:text-primary-dark transition-smooth">
                {phone}
              </a>
            </div>
          </div>

          {whatsapp && (
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-success rounded-xl flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">WhatsApp</p>
                <a 
                  href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}`} 
                  className="text-success font-medium hover:opacity-80 transition-smooth"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {whatsapp}
                </a>
              </div>
            </div>
          )}

          {email && (
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a 
                  href={`mailto:${email}`} 
                  className="text-secondary font-medium hover:opacity-80 transition-smooth"
                >
                  {email}
                </a>
              </div>
            </div>
          )}

          {address && (
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Address</p>
                <p className="text-foreground font-medium">{address}</p>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 space-y-3">
          <Button className="w-full bg-gradient-primary hover:shadow-glow transition-spring">
            Apply Now
          </Button>
          <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-smooth">
            Learn More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactCard;