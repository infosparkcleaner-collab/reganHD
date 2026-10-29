import { faqs, nav, shoeStages, site, skus } from "@/content/site";
import { abs } from "@/lib/seo";

// llms.txt: a plain-Markdown summary for AI answer engines (https://llmstxt.org).
export function GET() {
  const body = `# ${site.name}

> ${site.name} rebuilds heavy-duty truck brake shoes in Canada (sandblasted, relined and riveted) and ships them in Marathon Stop Box Kits to fleets, heavy-duty repair shops and parts distributors. It is also part of a Canadian trucking business.

## Pages

- [Home](${abs("/")}): overview, who we work with, the rebuild process, FAQ
${nav.map((n) => `- [${n.label}](${abs(n.href)})`).join("\n")}

## Rebuild process

${shoeStages.map((s, i) => `${i + 1}. ${s.title}: ${s.text}`).join("\n")}

## Products

- Marathon Stop Box Kit: heavy-duty brake shoe kit from Marathon Brake Systems, packed and shipped by ${site.name}.
- Part numbers: ${skus.join(", ")}. Specs, fitment and pricing on request.

## FAQ

${faqs.map((f) => `### ${f.q}\n\n${f.a}`).join("\n\n")}

## Contact

Request a quote by part number and quantity: ${abs("/contact")}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
