export const COMPANY_NAME = "FlowGP";
export const COMPANY_EMAIL = "contact@flowgp.fr";
export const COMPANY_PHONE = "+590691268401";           
export const COMPANY_PHONE_DISPLAY = "+590 691 268 401"; 
export const COMPANY_ADRESS = "ZI jarry 97122 Baie-Mahault";     
export const WHATSAPP_NUMBER = "590691268401";      
export const FACEBOOK_PROFIL = "https://www.facebook.com/profile.php?id=61580360632496";     
export const INSTAGRAM_PROFIL = "https://www.instagram.com/flowgp971?igsh=MTVwOGkyeHNyZGVpbA==";    

export function buildMailto(subject: string, body?: string) {
  const s = encodeURIComponent(subject);
  const b = body ? encodeURIComponent(body) : "";
  return `mailto:${COMPANY_EMAIL}?subject=${s}${b ? `&body=${b}` : ""}`;
}