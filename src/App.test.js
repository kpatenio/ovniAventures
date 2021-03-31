import { render } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event'
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { MemoryRouter } from 'react-router-dom';

// TODO - solo page tests

describe('Landing page tests', () => {
  test('should render default character image', () => {
    const {getByAltText} = render(
      <MemoryRouter initialEntries={['/']}>
        <I18nextProvider i18n={i18n}>
          <App/>
        </I18nextProvider>
      </MemoryRouter>
    )
    expect(getByAltText('human1')).toBeInTheDocument();
  })
  
  test('should render new image after clicking left button', () => {
      const {getByAltText, getByTestId} = render(
        <MemoryRouter initialEntries={['/']}>
        <I18nextProvider i18n={i18n}>
          <App/>
        </I18nextProvider>
      </MemoryRouter>
      )
      const leftButton = getByTestId('character-select-left');
      userEvent.click(leftButton);
      expect(getByAltText('human4')).toBeInTheDocument();
    })
  
    test('should render new image after clicking right button', () => {
      const {getByAltText, getByTestId} = render(
        <MemoryRouter initialEntries={['/']}>
        <I18nextProvider i18n={i18n}>
          <App/>
        </I18nextProvider>
      </MemoryRouter>
      )
      const leftButton = getByTestId('character-select-right');
      userEvent.click(leftButton);
      expect(getByAltText('human2')).toBeInTheDocument();
    })

    test('should render character name input field properly in English', () => {
      const {getByPlaceholderText} = render(
        <MemoryRouter initialEntries={['/']}>
        <I18nextProvider i18n={i18n}>
          <App/>
        </I18nextProvider>
      </MemoryRouter>
      )
      const inputField = getByPlaceholderText(i18n.getDataByLanguage('en').translation.landingPlaceholderInputName);
      userEvent.type(inputField, 'bob');
      expect(inputField).toHaveValue('bob')
    })

    test('should disable New Game button if no character name is inputted', () => {
      const {getByPlaceholderText, getByRole} = render(
        <MemoryRouter initialEntries={['/']}>
        <I18nextProvider i18n={i18n}>
          <App/>
        </I18nextProvider>
      </MemoryRouter>
      )
      const newGameButton = getByRole('button', {name: i18n.getDataByLanguage('en').translation.landingLabelNewGame});
      expect(newGameButton).toHaveAttribute('disabled');
    })

    test('should enable New Game button if character name is inputted', () => {
      const {getByPlaceholderText, getByRole} = render(
        <MemoryRouter initialEntries={['/']}>
        <I18nextProvider i18n={i18n}>
          <App/>
        </I18nextProvider>
      </MemoryRouter>
      )
      const inputField = getByPlaceholderText(i18n.getDataByLanguage('en').translation.landingPlaceholderInputName);
      const newGameButton = getByRole('button', {name: i18n.getDataByLanguage('en').translation.landingLabelNewGame});
      userEvent.type(inputField, 'bob');
      expect(newGameButton).not.toHaveAttribute('disabled');
    })
})