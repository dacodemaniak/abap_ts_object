```js
CONST entiers: Tableau(Entier) <- [5, 8, 3, 12, 13, 25, 2]
```

# 1. Combien y a t il de valeurs paires dans le tableau
Principe : réalisation d'un cumul, utilisation d'une boucle

```js
DEBUT
VAR cumul_pair <- 0
POUR CHAQUE entier DANS entiers
    SI entier % 2 = 0 ALORS
        cumul_pair <- cumul_pair + 1
    FIN SI
FIN POUR
ECRIRE(cumul_pair)
```

# 2. Copier les valeurs impaires dans un nouveau tableau
CONST impairs: Tableau(Entier) <- []
POUR VAR i: Entier DE 0 A LEN(entiers) - 1 INC 1
    SI entiers[i] % 2 <> 0 ALORS
        impairs[] <- entiers[i]
    FIN SI
FIN POUR

# 3. Déterminer la plus grande valeur du tableau original
VAR max: Entier <- entiers[0]
POUR VAR i: Entier DE 1 A LEN(entiers) - 1 INC 1
    SI entiers[i] > max ALORS
        max <- entiers[i]
    FIN SI
FIN POUR

max vaut 5
i vaut 1, entiers[i] vaut 8 8 > 5 ? => max vaut 8

# 4. Calculer la moyenne des valeurs du tableau
VAR cumul: Entier <- 0
POUR CHAQUE entier DANS entiers
    cumul <- cumul + entier
FIN POUR
CONST moyenne: Reel <- cumul / LEN(entiers)

# 5. Déterminer la factorielle des éléments du tableau
**VAR** factorielle: Entier <- 1
POUR CHAQUE entier DANS entiers
    factorielle <- factorielle * entier
FIN POUR
