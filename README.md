# Instructions
## Client
1- Accédez au dossier client et tapez la commande
```bash
npm install
```
## Server
2- Accedez au dossier server et tapez la commande
```bash
npm install
```
3- Créer dans le dossier serveur un fichier .env  
4- Ajouter ce contenu dans le fichier .env et changer password avec votre mot de passe de la base de données
```bash
PORT=5000
DB_URL=mysql://root:password@localhost:3306/sigrex
```

5- Créer une instance sql dans mysql workbench  
6- Dans cette instance créer un schema appelé sigrex  
7- Dans le dossier serveur executez les commandes suivantes  
```bash
npx prisma generate
npx prisma migrate dev --name init --create-only
npx migrate deploy
```
8- Si vous rencontrez des problemes de migration allez dans le fichier migration.sql et executez le script sql qui est dedant dans le workbench  
9- Executer la commande suivante (assurez que vous etes dans le dossier serveur)
```bash
nodemon server
```
10- Dans le dossier client executez la commande:
```bash
npm run dev
```
P.S: Pour remplir la base de données avec des données exemplaires, utiliser cette commande 
```bash
npx prisma studio
```



