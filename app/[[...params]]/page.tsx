import { redirect } from 'next/navigation';

interface Props {
  params: Promise<{
    params?: string[];
  }>;
}

export default async function RedirectPage({ params }: Props) {
  const { params: pathParams } = await params;

  // Parametreleri al
  const pathArray = pathParams && pathParams.length > 0 ? pathParams : [];
  
  if (pathArray.length === 0) {
    // Boş path - kökü yönlendir
    redirect('obs://');
  }

  // URL parametrelerini birleştir: forgot-password/cb6841c9-8b7b-430e-8eab-e115b69388ea
  const pathString = pathArray.join('/');
  const redirectUrl = `obs://${pathString}`;

  // 302 redirect
  redirect(redirectUrl);
}
