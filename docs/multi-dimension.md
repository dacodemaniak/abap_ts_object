# Tableau multidimensionnels

```js
CONST array: Tableau(Tableau) <- [
    ['Jean', 25],
    ['Paul', 43]
]

CONST in_array: Tableau(?) <- array[1]
CONST paul: CHAINE <- array[1][0]

CONST suivi: Tableau(?) <- [
    [
        "Jean",
        [
            [
                "Alrogithmique",
                [15, 13]
            ],
            [
                "Conception",
                [12, 11, 16]
            ],
            [
                "SQL",
                [12, 18]
            ]
        ]
    ],
    [
        "Maxence",
        [
            [
                "Alrogithmique",
                [11, 12]
            ],
            [
                "Conception",
                [13, 14, 15]
            ],
            [
                "SQL",
                [10, 8]
            ]
        ]
    ],
    [
        "Lucie",
        [
            [
                "Alrogithmique",
                [10, 19]
            ],
            [
                "Conception",
                [13, 15]
            ],
            [
                "SQL",
                [12, 18, 16]
            ]
        ]
    ]
]
```

## Moyenne générale de la classe toute matière confondue

```js
VAR cumul_notes: ENTIER <- 0
VAR cumul_evaluations: ENTIER <- 0
POUR CHAQUE apprenant DANS suivi FAIRE
    CONST nom: CHAINE <- apprenant[0]
    CONST notes: Tableau <- apprenant[1]

    POUR CHAQUE note DANS notes FAIRE
        CONST matiere: CHAINE <- note[0]
        CONST evaluations: Tableau <- note[1]
        cumul_evaluations <- cumul_evaluations + LEN(evaluations)
        POUR CHAQUE evaluation DANS evaluations FAIRE
            cumul_notes <- cumul_notes + evaluation
        FIN POUR
    FIN POUR
FIN POUR
CONST moyenne_generale_classe: REEL <- cumul_notes / cumul_evaluations
```

## Moyenne répartie par matières tout étudiant confondu

## Moyenne par matière par étudiant

## Moyenne générale par étudiant

