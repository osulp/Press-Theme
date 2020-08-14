/**
 * main-menu
 */

import $ from 'jquery';

// Module dependencies
import 'protons';

// Module template
import './_main-menu.twig';

export const name = 'main-menu';

export const defaults = {
  dummyClass: 'js-main-menu-exists',
};

/**
 * Components may need to run clean-up tasks if they are removed from DOM.
 *
 * @param {jQuery} $context - A piece of DOM
 * @param {Object} settings - Pertinent settings
 */
// eslint-disable-next-line no-unused-vars
export function disable($context, settings) {}

/**
 * Each component has a chance to run when its enable function is called. It is
 * given a piece of DOM ($context) and a settings object. We destructure our
 * component key off the settings object and provide an empty object fallback.
 * Incoming settings override default settings via Object.assign().
 *
 * @param {jQuery} $context - A piece of DOM
 * @param {Object} settings - Settings object
 */
export function enable($context, { mainMenu = {} }) {
  // Find our component within the DOM
  const $mainMenu = $('.main-menu', $context);
  // Bail if component does not exist
  if (!$mainMenu.length) {
    return;
  }
  // Merge defaults with incoming settings
  const settings = {
    ...defaults,
    ...mainMenu,
  };
  // An example of what could be done with this component
  $mainMenu.addClass(settings.dummyClass);
}

export default enable;
