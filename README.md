# Marche à suivre pour creer son CV sur le WEB




## Création d'un environement

Tout d'abord il faut télécharger "GitHub" sur notre portable. Cette installation comprend le logiciel "Git Shell" qui va nous permettre de taper des commandes qui nous permettront d'installer ce que nous avons besoin pour creer un projet d'application web...

Dans "Git Shell", installer le générateur pour une application web
```sh
$ npm install -g generator-webapp
```



## Création d'un nouveau projet

Creer un dossier ou sera stocker notre projet et ce positionner dans ce dossiers avec les commandes (directement taper dans "Git Shell":
```sh
mkdir monProjet
cd monProjet
```

Ensuite, il faudra lancer l'installation de l'application web avec "Yeoman"...
```sh
$ yo webapp
```

Puis selectionner "Bootstrap" qui nous permettra d'utiliser une belle mise en page proposer gratuitement!
  
 Ensuite il faudra installer le package et le bower json:
 ```sh
$ npm install && bower install
```

### Lancement de l'application web

 En utilisant la commande suivante...
  ```sh
grunt serve
```
 ... On pourra modifier nos fichiers HTML, CSS, ... et on pourra directement visualiser les modifications effectuer sur notre page web.
 
> Pour d'autre mise en page, on peut également installer "Boostwach" qui lui nous mettra à disposition différents thèmes...


## Gestion de notre projet

Ensuite avec "GitHub" on peut créer un compte et sur l'interface web creer un nouvel emplacement web pour y stocker notre projet. On devra ensuite creer un dossier en local sur notre machine avec le même nom.

Après avoir compiler notre projet dans la ligne de commande Git Shell avec "grunt build", on va pouvoir récuperer dans notre dossier du projet un dossier "dist" qui nous permettera de recuperer celui-ci compiler prêt à être chargé dans "GitHub"...

Il faudra copier tout les éléments qui figure dans le dossier "dist" et les glisser dans le dossier qui comporte le même nom que notre emplacement web. Après avoir ouvert l'application "GitHub" sur notre machine pour voir si il y a des modification à valider et à envoyer sur le web et pour gérer ça on utilisera un nom qui fait référence à une version voir à une version dans laquel on pourra commenter ce qui à été modifier!

Pour terminier ouvrir la page WEB (nom de l'emplacement) pour découvrir celui-ci sur internet


Steven Habegger