import { Phone, MessageCircle, MapPin, Mail } from 'lucide-react';

interface ContactCardProps {
  phone: string;
  whatsapp?: string;
  email?: string;
  address?: string;
  className?: string;
}

const ContactCard = ({ phone, whatsapp, email, address, className = '' }: ContactCardProps) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg border-0 hover:shadow-xl transition-all duration-300 ${className}`}>
      <div className="p-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
        
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-red-600 rounded-xl flex items-center justify-center">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <a href={`tel:${phone}`} className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300">
                {phone}
              </a>
            </div>
          </div>

          {whatsapp && (
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-500">WhatsApp</p>
                <a 
                  href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}`} 
                  className="text-green-600 font-medium hover:text-green-700 transition-colors duration-300"
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
              <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <a 
                  href={`mailto:${email}`} 
                  className="text-purple-600 font-medium hover:text-purple-700 transition-colors duration-300"
                >
                  {email}
                </a>
              </div>
            </div>
          )}

          {address && (
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-gray-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Address</p>
                <p className="text-gray-900 font-medium">{address}</p>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 space-y-3">
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSdl9v2WYIAbX41Wo2LyrUjhSZucHuvytgoYxd9Elq1yFSV0ig/alreadyresponded"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full block text-center bg-gradient-to-r from-blue-600 to-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Apply Now
          </a>
          <button 
            className="w-full border-2 border-blue-600 text-blue-600 py-3 px-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;