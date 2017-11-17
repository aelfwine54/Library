# Library
Cette librairie en ligne est un exemple pour la MEAN stack pour le cours IFT604 donné à l'[Université de Sherbrooke](http://usherbrooke.ca).

## Avertissement
Le code ci-présenté n'est en aucun cas sécuritaire et ne devrait pas être utiliser tel quel pour une vrai application de commerce électronique.

## Fonctionnement
Le serveur et client sont conçus pour fonctionner de façon indépendante, selon l'architecture REST. Le client n'est pas encore fonctionnel toutefois.

Le serveur est programmé avec `Node.js` et le framework `express.js`. Pour le lancer, il faut d'abord récupérer les modules de nodes avec la commande à partir du dossier `server`:
```
    npm install
```
Puis, le serveur se lance avec la commande:
```
    npm start
```

Le client peut être exécuté indépendament du serveur. Pour le lancer à partir de l'outil [Angular CLI](https://cli.angular.io/), il suffit de se positionner dans le dossier `client` et de faire la commande:
```
    ng serve
```

## TODO
* Stocker les modèles dans MongoDB
* Ajouter la création de compte
* Améliorer le visuel
