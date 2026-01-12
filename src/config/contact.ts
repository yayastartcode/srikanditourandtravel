// Master contact configuration
// Update these values with your actual business information

export const contactConfig = {
  // WhatsApp Configuration
  whatsapp: {
    number: "6281235611031", // Format: country code + number (no + or spaces)
    defaultMessage:
      "Halo, saya ingin merencanakan perjalanan kustom dengan Srikandi Tour and Travel",
  },

  // Phone Numbers
  phone: {
    primary: "+6281235611031",
    secondary: "+62",
    primaryRaw: "+6281235611031", // For tel: links
    secondaryRaw: "+6281",
  },

  // Email Addresses
  email: {
    info: "info@srikanditourandtravel.com",
    booking: "booking@srikanditourandtravel.com",
  },

  // Physical Address
  address: {
    street: "Sisir Kota Batu",
    city: "Kota Batu",
    province: "Jawa Timur",
    postalCode: "65314",
    full: "Kota Batu , Jawa Timur 65314",
  },

  // Social Media Links
  social: {
    facebook: "https://facebook.com/srikanditourandtravel",
    instagram: "https://instagram.com/srikanditourandtravel",
    twitter: "https://twitter.com/srikanditourandtravel",
  },

  // Google Maps Embed URL
  // Get this from: https://www.google.com/maps -> Share -> Embed a map
  maps: {
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3952.2038849179517!2d112.52551607500583!3d-7.873722992148506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwNTInMjUuNCJTIDExMsKwMzEnNDEuMSJF!5e0!3m2!1sid!2sid!4v1768173357446!5m2!1sid!2sid",
  },

  // Company Information
  company: {
    name: "Srikandi Tour and Travel",
    tagline: "Perusahaan Tour & Travel Terpercaya di Kota Batu Malang",
    description:
      "Perusahaan Tour & Travel Terpercaya di Kota Batu Malang dengan layanan profesional dan armada lengkap.",
  },
};

// Helper function to generate WhatsApp link
export const getWhatsAppLink = (customMessage?: string) => {
  const message = customMessage || contactConfig.whatsapp.defaultMessage;
  return `https://wa.me/${
    contactConfig.whatsapp.number
  }?text=${encodeURIComponent(message)}`;
};
