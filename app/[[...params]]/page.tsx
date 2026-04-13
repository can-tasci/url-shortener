import { redirect } from 'next/navigation';

interface Props {
  params: {
    params: string[];
  };
}

export default function RedirectPage({ params }: Props) {
  const pathArray = params.params || [];
  
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
