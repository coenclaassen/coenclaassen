import { site } from "../config/site";

export function GET() {
  const contactCard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "N:Claassen;Coen;;;",
    "FN:Coen Claassen",
    `TEL;TYPE=CELL,VOICE:${site.phone}`,
    `EMAIL;TYPE=INTERNET:${site.contactCardEmail}`,
    `URL:${site.url}`,
    `URL:${site.linkedinHref}`,
    `URL:${site.offTrailRunHref}`,
    "END:VCARD",
    "",
  ].join("\r\n");

  return new Response(contactCard, {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
    },
  });
}
