import React from 'react'
import message_fr from './fr.json';
import message_en from './en.json';
import { IntlProvider } from 'react-intl';

const messages = {
    fr: message_fr,
    en: message_en,
}

const AppWithIntl = ({ component: Component, locale }) => {
    <IntlProvider locale={locale} messages={messages[locale]} >
        <Component />
    </IntlProvider>
}

export default AppWithIntl