/* * Ceci permet de transmettre les requêtes HTTP comme `http.get('/api/stuff')` vers un autre serveur/port. *
C’est particulièrement utile Durant le développement pour éviter des problèmes CORS dus à l’utilisation d’un serveur local.
* Pour plus de détails et options, voir: https://angular.io/guide/build#proxying-to-a-backend-server */

module.exports =
{
    '/api': {
        target: 'http://localhost:3000',
        secure: false
    }
};