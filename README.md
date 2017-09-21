# siichallenge

Installer node.js

Pour lancer l'application, il faut dans un premier temps faire un bower install.
Ensuite, il faut déployer l'application sur un serveur web. J'ai fait mes tests avec http-server qui est un petit serveur web que l'on installe en faisant
npm install -g http-server

Une fois http-server installé il suffit de lancer la commande suivante à la racine du projet : http-server -o (qui ouvre directement l'application dans le navigateur).

J'ai eu des problèmes avec cors, pour les contourner, je préfix mes appels de l'api twitter avec l'url https://cors-anywhere.herokuapp.com/
Ce n'est absolument pas une solution que je préconise, mais c'est une solution simple pour un poc, sachant que je ne sais pas comment vous allez tester et comment est votre environnement.
