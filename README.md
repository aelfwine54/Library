# Library
Cette biliothèque en ligne est un exemple de la pile MEAN pour le cours [IFT604](https://www.usherbrooke.ca/admission/fiches-cours/IFT604/) donné à l'[Université de Sherbrooke](http://usherbrooke.ca).

## Avertissement
Le code présenté dans ce dépôt n'est en aucun cas sécuritaire et ne devrait pas être utilisé (tel quel du moins) pour le développement d'une application de commerce électronique destinée à un usage commercial.

## Fonctionnement
Le serveur et client sont conçus pour fonctionner de façon indépendante, selon l'architecture REST. Toutefois, le client n'est pas encore complètement fonctionnel.

Le serveur utilise le framework Express.js, qui lui-même est basé sur l'environnement Node.js. Pour le démarrer, il faut d'abord installer les dépendances requises depuis le dossier `server` :
```
  npm install
```

Puis, le serveur peut être démarré avec la commande suivante :
```
  npm start
```

Pour démarrer le client, il faut d'abord installer les dépendances requises depuis le dossier `client` :

```
  npm install
```

Puis, le client peut être démarré avec la commande suivante :
```
  npm start
```

## TODO
* Stocker les modèles dans MongoDB
* Ajouter la création de compte
* Améliorer le visuel
