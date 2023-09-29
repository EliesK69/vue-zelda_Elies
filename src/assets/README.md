
# Vue3 - Evaluation - 
 
Objectif: partir d'une maquette statique et faire un projet vue3 qui sollicite une api externe
  
# Le front
  
```sh
npm init vue@latest
> cd  <nom-prenom-vue3>  > npm install  > npm run dev
```
  

Installez toutes les dépendances nécessaires pour avoir une vue au plus près de la maquette html/css
  
Découpez ensuite votre projet en composants

    

> Sur l'index vous pouvez par exemple choisir d'afficher 3 montres au
> hasard ou vos 3 monstres préférés
 

# L'api

L'api publique permet de récupérer des infos sur les monstres de Zelda Breath of the wild


Il y a deux endpoints importants: récupérer la liste des monstres et récupérer les détails d'un monstre

 
**Récupérer tous les monstres**

[https://metallo.ew.r.appspot.com/monsters](https://metallo.ew.r.appspot.com/monsters)


**Récupérer un monstre par son _id**
  
[https://metallo.ew.r.appspot.com/monsters/651088132f75197b24892761](https://metallo.ew.r.appspot.com/monsters/651088132f75197b24892761)


**Query dispo sur /monsters** 

```js
page=2 
limit=40
```




## Grille

- Import des assets statics: 3pts

- Gestion des routes: 3pts

- Découpage composants: 3pts

- Récupération data from api: 6pts

- Affichage des données de l'api: 3pts

- Nommage, clean code, logique: 2pts

  

**Rendu**

L'adresse du repo sous cette forme **nom-prenom-vue3**.git

Sinon un zip (**sans node_modules**)

Durée : **3h**


> **Warning**
> Il vaut mieux un petit projet qui build qu'un gros qui build pas