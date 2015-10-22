import React from 'react';
import Lock from '../../lock/lock';
import AskSocialNetworkOrEmail from '../../cred/or/ask_social_network_or_email';
import { openLock } from '../../lock/actions';
import { openFunctionArgsResolver } from '../../lock/mode';
import { close } from '../../social/actions';
import { requestPasswordlessEmail } from '../../passwordless/actions';
import * as l from '../../lock/index';
import * as m from '../../passwordless/index';
import {
  renderEmailSentConfirmation,
  renderSignedInConfirmation
} from '../shared';

const NAME = "socialOrMagiclink";

function open(id, ...args) {
  const [options, callback] = openFunctionArgsResolver(NAME, args);
  options.signInCallback = callback;
  options.modeOptions = {dictName: NAME, storageKey: NAME};
  return openLock(id, NAME, options);
}

function render(lock) {
  const screenName = "networkOrEmail";

  const auxiliaryPane =
    renderEmailSentConfirmation(lock, {dictKey: "magiclinkConfirmation"})
    || renderSignedInConfirmation(lock, {dictKey: "socialConfirmation"});

  const placeholder = l.ui.t(lock, [screenName, "emailInputPlaceholder"], {__textOnly: true});

  const props = {
    auxiliaryPane: auxiliaryPane,
    children: <AskSocialNetworkOrEmail lock={lock} placeholder={placeholder} />,
    closeHandler: close,
    escHandler: close,
    footerText: l.ui.t(lock, [screenName, "footerText"]),
    headerText: l.ui.t(lock, [screenName, "headerText"]),
    isDone: m.passwordlessStarted(lock) || l.signedIn(lock),
    lock: lock,
    screenName: screenName,
    submitHandler: !m.passwordlessStarted(lock) && requestPasswordlessEmail
  };

  return <Lock {...props} />;
}

export default {
  name: NAME,
  methods: {
    close: close,
    open: {
      socialOrMagiclink: open
    }
  },
  renderFn: render
};
