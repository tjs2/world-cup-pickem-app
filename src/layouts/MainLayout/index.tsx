import { useTranslation } from 'react-i18next';

export default function MainLayout() {
  const { t } = useTranslation('shared');
  return <h1>{t('wip')}</h1>;
}
