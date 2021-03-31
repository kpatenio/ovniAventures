import { render } from '@testing-library/react';
import Header from '../../../components/Header';
import userEvent from '@testing-library/user-event'
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../i18n';

test('should render EN header by default', () => {
  const {getByText} = render(
    <I18nextProvider i18n={i18n}>
      <Header/>
    </I18nextProvider>
  )
  expect(getByText(i18n.getDataByLanguage('en').translation.headerLanguage)).toBeDefined();
})

test('should render header in FR after clicking EN button', () => {
  const {getByText} = render(
    <I18nextProvider i18n={i18n}>
      <Header/>
    </I18nextProvider>
  )

  const buttonEN = getByText(i18n.getDataByLanguage('en').translation.headerLanguage);
  userEvent.click(buttonEN);
  expect(getByText(i18n.getDataByLanguage('fr').translation.headerLanguage)).toBeDefined();
})
