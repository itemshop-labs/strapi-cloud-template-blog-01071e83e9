'use strict';

/**
 * racket service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::racket.racket');
