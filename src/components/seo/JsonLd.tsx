/** Renders schema.org JSON-LD. Pass one node or several (they are wrapped in an @graph). */
export function JsonLd({ data }: { data: object | object[] }) {
  const json = Array.isArray(data) ? { "@context": "https://schema.org", "@graph": data } : { "@context": "https://schema.org", ...data };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json).replace(/</g, "\\u003c") }} />;
}
