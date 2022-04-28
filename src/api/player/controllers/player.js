'use strict';

/**
 *  player controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::player.player', ({strapi}) => ({
    async CheckCredentials(ctx) {
        const { username, password } = ctx.request.body

        const playerData = await strapi.db.query('api::player.player').findOne({
            select: '*',
            where: { username: username }
        })

        if (playerData == null) return ctx.badRequest('Account does not exist')

        if (playerData.password != password) return null
        else return playerData
    },

    async RegisterNewPlayer(ctx) {
        const { username, password, characterId } = ctx.request.body

        const check = await strapi.db.query('api::player.player').findOne({
            select: '*',
            where: { username: username }
        })

        if (check != null) return ctx.badRequest('Username already taken.')

        const playerData = await strapi.db.query('api::player.player').create({
            data: {
                username: username,
                password: password,
                characterId: characterId,
                score: 0
            }
          });

        return ctx.response.body = 'Registration Successful!'
    },

    async UpdateScore(ctx) {
        const { username, score } = ctx.request.body

        const player = await strapi.db.query('api::player.player').update({
            where: { username: username },
            data: {
                score: score
            }
        })

        return ctx.response.body = 'Score Updated!'
    },

    async GetLeaderboard(ctx) {
        const entries = await strapi.db.query('api::player.player').findMany({
            limit: 10,
            orderBy: { score: 'desc'}
        })

        return entries
    }
}));