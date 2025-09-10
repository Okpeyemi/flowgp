export default function JsonLd({
  id,
  data,
}: {
  id: string;
  data: unknown;
}) {
  return (
    <script
      id={id}
      type="application/ld+json"
      // SSR JSON-LD so crawlers find it in initial HTML
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}