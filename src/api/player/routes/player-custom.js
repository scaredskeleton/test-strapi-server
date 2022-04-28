module.exports = {
    routes: [
        {
            method: 'POST',
            path: '/player/CheckCredentials',
            handler: 'player.CheckCredentials'
        },

        {
            method: 'POST',
            path: '/player/RegisterNewPlayer',
            handler: 'player.RegisterNewPlayer'
        },

        {
            method: 'POST',
            path: '/player/UpdateScore',
            handler: 'player.UpdateScore'
        },

        {
            method: 'GET',
            path: '/player/GetLeaderboard',
            handler: 'player.GetLeaderboard'
        }
    ]
}