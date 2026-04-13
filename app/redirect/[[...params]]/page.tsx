import { redirect } from 'next/navigation';

interface Props {
  params: Promise<{
    params: string[];
  }>;
}

export default async function RedirectPage({ params }: Props) {
  const { params: pathParams } = await params;

  if (!pathParams || pathParams.length === 0) {
    return <div>Redirect parametresi bulunamadı</div>;
  }

  // URL parametrelerini birleştir: forgot-password/cb6841c9-8b7b-430e-8eab-e115b69388ea
  const pathString = pathParams.join('/');
  const redirectUrl = `obs://${pathString}`;

  // 302 redirect
  redirect(redirectUrl);
}