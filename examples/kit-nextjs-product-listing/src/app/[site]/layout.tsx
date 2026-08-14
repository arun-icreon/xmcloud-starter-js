import { pocFlag } from 'lib/flags';
import { draftMode } from 'next/headers';
import Bootstrap from 'src/Bootstrap';

export default async function SiteLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ site: string }>;
}) {
  const { site } = await params;
  const { isEnabled } = await draftMode();

  const poc = await pocFlag();
  return (
    <>
    
    <div className="" data-class-change="true">
      <h2 className="text-2xl font-bold text-center mb-4">
      {poc ? 'Flag is on' : 'Flag is off'}
      </h2>
    </div>


      <Bootstrap siteName={site} isPreviewMode={isEnabled} />
      {children}
    </>
  );
}
