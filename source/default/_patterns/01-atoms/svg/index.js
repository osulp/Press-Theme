/**
 * svg
 */

import $ from 'jquery';
import svg4everybody from 'svg4everybody';

// Module dependencies
import 'protons';
import fontawesome from './fontawesome';

// The autogenerated SVG icons from svg-spritemap-webpack-plugin
import 'svg-spritemap-webpack-plugin/svg-icons.css';
import './sprite-svg.css';

// Module template
import './_svg.twig';
import './_svg--embed.twig';
import './_svg--sprite.twig';

// Import all SVGs into assets/images for reference in CSS/JS bundle
require.context('./icons', false, /\.svg$/);

// Enable Fontawesome immediately, comment this out if not using FontAwesome
fontawesome();

export const name = 'svg';

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
export function enable($context) {
  // Find our component within the DOM
  const $svg = $('.svg', $context);
  // Bail if component does not exist
  if (!$svg.length) {
    return;
  }

  // Enable svg4everybody.
  svg4everybody();
}

export default enable;
