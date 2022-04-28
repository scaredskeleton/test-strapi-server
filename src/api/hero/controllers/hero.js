'use strict';

/**
 *  hero controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::hero.hero', ({ strapi }) =>  ({
    async GetData(ctx) {
        var data = await strapi.service('api::hero.hero').find({name:""});
        console.log(data);
        var modList = [];
        
        data.results.forEach((test) => {
            modList.push({
                name: test.name,
                job: test.job,
            });
        });
        return modList;
    }
}));