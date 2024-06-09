var T_1 = {
    "nodes": [
        {"id": 1, "tours": 1, "mise": 0, "points": 10, "estimation": 10, "réussi": "oui"},
        {"id": 2, "tours": 1, "mise": 0, "points": 10, "estimation": 10, "réussi": "oui"},
        {"id": 3, "tours": 1, "mise": 1, "points": -10, "estimation": 10, "réussi": "non"},
        {"id": 4, "tours": 1, "mise": 0, "points": 10, "estimation": 10, "réussi": "oui"},
        {"id": 5, "tours": 1, "mise": 0, "points": 10, "estimation": 10, "réussi": "oui"},
        {"id": 6, "tours": 1, "mise": 1, "points": 50, "estimation": 20, "réussi": "oui"}
    ],
    // 0 = un gagne l'autre perd, 1 = les deux gagnent, 2 = les deux perdent
    "links": [
        {source: 1, target: 2, weight: "1"},
        {source: 1, target: 3, weight: "0"},
        {source: 1, target: 4, weight: "1"},
        {source: 1, target: 5, weight: "1"},
        {source: 1, target: 6, weight: "1"},
        {source: 2, target: 3, weight: "0"},
        {source: 2, target: 4, weight: "1"},
        {source: 2, target: 5, weight: "1"},
        {source: 2, target: 6, weight: "1"},
        {source: 3, target: 4, weight: "0"},
        {source: 3, target: 5, weight: "0"},
        {source: 3, target: 6, weight: "0"},
        {source: 4, target: 5, weight: "1"},
        {source: 4, target: 6, weight: "1"},
        {source: 5, target: 6, weight: "1"},
    ]
};

var T_2 = {
    "nodes": [
        {"id": 1, "tours": 2, "mise": 0, "points": 30, "estimation": 30, "réussi": "oui"},
        {"id": 2, "tours": 2, "mise": 0, "points": 30, "estimation": 30, "réussi": "oui"},
        {"id": 3, "tours": 2, "mise": 2, "points": -20, "estimation": 10, "réussi": "non"},
        {"id": 4, "tours": 2, "mise": 0, "points": 30, "estimation": 30, "réussi": "oui"},
        {"id": 5, "tours": 2, "mise": 1, "points": 30, "estimation": 30, "réussi": "oui"},
        {"id": 6, "tours": 2, "mise": 1, "points": 40, "estimation": 70, "réussi": "non"},
    ],
    // 0 = un gagne l'autre perd, 1 = les deux gagnent, 2 = les deux perdent

    "links": [
        {source: 1, target: 2, weight: "1"},
        {source: 1, target: 3, weight: "0"},
        {source: 1, target: 4, weight: "1"},
        {source: 1, target: 5, weight: "1"},
        {source: 1, target: 6, weight: "0"},
        {source: 2, target: 3, weight: "0"},
        {source: 2, target: 4, weight: "1"},
        {source: 2, target: 5, weight: "1"},
        {source: 2, target: 6, weight: "0"},
        {source: 3, target: 4, weight: "0"},
        {source: 3, target: 5, weight: "0"},
        {source: 3, target: 6, weight: "2"},
        {source: 4, target: 5, weight: "1"},
        {source: 4, target: 6, weight: "0"},
        {source: 5, target: 6, weight: "0"},
    ]
};

var T_3 = {
    "nodes": [
        {"id": 1, "tours": 3, "mise": 0, "points": 60, "estimation": 60, "réussi": "oui"},
        {"id": 2, "tours": 3, "mise": 0, "points": 60, "estimation": 60, "réussi": "oui"},
        {"id": 3, "tours": 3, "mise": 0, "points": 10, "estimation": 10, "réussi": "oui"},
        {"id": 4, "tours": 3, "mise": 1, "points": 50, "estimation": 50, "réussi": "oui"},
        {"id": 5, "tours": 3, "mise": 1, "points": 50, "estimation": 50, "réussi": "oui"},
        {"id": 6, "tours": 3, "mise": 1, "points": 60, "estimation": 60, "réussi": "oui"},
    ],
    // 0 = un gagne l'autre perd, 1 = les deux gagnent, 2 = les deux perdent
    "links": [
        {source: 1, target: 2, weight: "1"},
        {source: 1, target: 3, weight: "1"},
        {source: 1, target: 4, weight: "1"},
        {source: 1, target: 5, weight: "1"},
        {source: 1, target: 6, weight: "1"},
        {source: 2, target: 3, weight: "1"},
        {source: 2, target: 4, weight: "1"},
        {source: 2, target: 5, weight: "1"},
        {source: 2, target: 6, weight: "1"},
        {source: 3, target: 4, weight: "1"},
        {source: 3, target: 5, weight: "1"},
        {source: 3, target: 6, weight: "1"},
        {source: 4, target: 5, weight: "1"},
        {source: 4, target: 6, weight: "1"},
        {source: 5, target: 6, weight: "1"},
    ]
};

var T_4 = {
    "nodes": [
        {"id": 1, "tours": 4, "mise": 0, "points": 20, "estimation": 100, "réussi": "non"},
        {"id": 2, "tours": 4, "mise": 0, "points": 100, "estimation": 100, "réussi": "oui"},
        {"id": 3, "tours": 4, "mise": 0, "points": 50, "estimation": 50, "réussi": "oui"},
        {"id": 4, "tours": 4, "mise": 0, "points": 90, "estimation": 90, "réussi": "oui"},
        {"id": 5, "tours": 4, "mise": 2, "points": 40, "estimation": 90, "réussi": "non"},
        {"id": 6, "tours": 4, "mise": 0, "points": 100, "estimation": 100, "réussi": "oui"},
    ],
    // 0 = un gagne l'autre perd, 1 = les deux gagnent, 2 = les deux perdent
    "links": [
        {source: 1, target: 2, weight: "0"},
        {source: 1, target: 3, weight: "0"},
        {source: 1, target: 4, weight: "0"},
        {source: 1, target: 5, weight: "2"},
        {source: 1, target: 6, weight: "0"},
        {source: 2, target: 3, weight: "1"},
        {source: 2, target: 4, weight: "1"},
        {source: 2, target: 5, weight: "0"},
        {source: 2, target: 6, weight: "1"},
        {source: 3, target: 4, weight: "1"},
        {source: 3, target: 5, weight: "0"},
        {source: 3, target: 6, weight: "1"},
        {source: 4, target: 5, weight: "1"},
        {source: 4, target: 6, weight: "0"},
        {source: 5, target: 6, weight: "1"},
    ]
};

var T_5 = {
    "nodes":[ 
        {"id": 1, "tours": 5, "mise": 1, "points": 10, "estimation": 40, "réussi": "non"},
        {"id": 2, "tours": 5, "mise": 2, "points": 90, "estimation": 140, "réussi": "non"},
        {"id": 3, "tours": 5, "mise": 0, "points": 100, "estimation": 100, "réussi": "oui"},
        {"id": 4, "tours": 5, "mise": 2, "points": 80, "estimation": 130, "réussi": "non"},
        {"id": 5, "tours": 5, "mise": 0, "points": 90, "estimation": 90, "réussi": "oui"},
        {"id": 6, "tours": 5, "mise": 1, "points": 150, "estimation": 120, "réussi": "oui"},
    ],
    // 0 = un gagne l'autre perd, 1 = les deux gagnent, 2 = les deux perdent
    "links": [
        {source: 1, target: 2, weight: "2"},
        {source: 1, target: 3, weight: "0"},
        {source: 1, target: 4, weight: "2"},
        {source: 1, target: 5, weight: "0"},
        {source: 1, target: 6, weight: "0"},
        {source: 2, target: 3, weight: "0"},
        {source: 2, target: 4, weight: "2"},
        {source: 2, target: 5, weight: "0"},
        {source: 2, target: 6, weight: "0"},
        {source: 3, target: 4, weight: "0"},
        {source: 3, target: 5, weight: "1"},
        {source: 3, target: 6, weight: "1"},
        {source: 4, target: 5, weight: "0"},
        {source: 4, target: 6, weight: "0"},
        {source: 5, target: 6, weight: "1"},
    ]
};

var T_6 = {
    "nodes": [
        {"id": 1, "tours": 6, "mise": 1, "points": 0, "estimation": 30, "réussi": "non"},
        {"id": 2, "tours": 6, "mise": 2, "points": 130, "estimation": 130, "réussi": "oui"},
        {"id": 3, "tours": 6, "mise": 2, "points": 140, "estimation": 140, "réussi": "oui"},
        {"id": 4, "tours": 6, "mise": 0, "points": 140, "estimation": 140, "réussi": "oui"},
        {"id": 5, "tours": 6, "mise": 2, "points": 160, "estimation": 130, "réussi": "oui"},
        {"id": 6, "tours": 6, "mise": 0, "points": 210, "estimation": 210, "réussi": "oui"},
    ],
    // 0 = un gagne l'autre perd, 1 = les deux gagnent, 2 = les deux perdent
    "links": [
        {source: 1, target: 2, weight: "0"},
        {source: 1, target: 3, weight: "0"},
        {source: 1, target: 4, weight: "0"},
        {source: 1, target: 5, weight: "0"},
        {source: 1, target: 6, weight: "0"},
        {source: 2, target: 3, weight: "1"},
        {source: 2, target: 4, weight: "1"},
        {source: 2, target: 5, weight: "1"},
        {source: 2, target: 6, weight: "1"},
        {source: 3, target: 4, weight: "1"},
        {source: 3, target: 5, weight: "1"},
        {source: 3, target: 6, weight: "1"},
        {source: 4, target: 5, weight: "1"},
        {source: 4, target: 6, weight: "1"},
        {source: 5, target: 6, weight: "1"},
    ]
};

var T_7 = {
    "nodes": [
        {"id": 1, "tours": 7, "mise": 0, "points": 70, "estimation": 70, "réussi": "oui"},
        {"id": 2, "tours": 7, "mise": 1, "points": 150, "estimation": 150, "réussi": "oui"},
        {"id": 3, "tours": 7, "mise": 2, "points": 130, "estimation": 180, "réussi": "non"},
        {"id": 4, "tours": 7, "mise": 0, "points": 70, "estimation": 210, "réussi": "non"},
        {"id": 5, "tours": 7, "mise": 2, "points": 200, "estimation": 200, "réussi": "oui"},
        {"id": 6, "tours": 7, "mise": 0, "points": 280, "estimation": 280, "réussi": "oui"},
    ],
    // 0 = un gagne l'autre perd, 1 = les deux gagnent, 2 = les deux perdent
    "links": [
        {source: 1, target: 2, weight: "1"},
        {source: 1, target: 3, weight: "0"},
        {source: 1, target: 4, weight: "0"},
        {source: 1, target: 5, weight: "1"},
        {source: 1, target: 6, weight: "1"},
        {source: 2, target: 3, weight: "0"},
        {source: 2, target: 4, weight: "0"},
        {source: 2, target: 5, weight: "1"},
        {source: 2, target: 6, weight: "1"},
        {source: 3, target: 4, weight: "2"},
        {source: 3, target: 5, weight: "0"},
        {source: 3, target: 6, weight: "0"},
        {source: 4, target: 5, weight: "0"},
        {source: 4, target: 6, weight: "0"},
        {source: 5, target: 6, weight: "1"},
    ]
};

var T_8 = {
    "nodes": [
        {"id": 1, "tours": 8, "mise": 1, "points": 90, "estimation": 90, "réussi": "oui"},
        {"id": 2, "tours": 8, "mise": 3, "points": 140, "estimation": 210, "réussi": "non"},
        {"id": 3, "tours": 8, "mise": 2, "points": 120, "estimation": 170, "réussi": "non"},
        {"id": 4, "tours": 8, "mise": 0, "points": 150, "estimation": 150, "réussi": "oui"},
        {"id": 5, "tours": 8, "mise": 0, "points": 280, "estimation": 280, "réussi": "oui"},
        {"id": 6, "tours": 8, "mise": 3, "points": 270, "estimation": 340, "réussi": "non"},
    ],
    // 0 = un gagne l'autre perd, 1 = les deux gagnent, 2 = les deux perdent
    "links": [
        {source: 1, target: 2, weight: "0"},
        {source: 1, target: 3, weight: "0"},
        {source: 1, target: 4, weight: "1"},
        {source: 1, target: 5, weight: "1"},
        {source: 1, target: 6, weight: "0"},
        {source: 2, target: 3, weight: "2"},
        {source: 2, target: 4, weight: "0"},
        {source: 2, target: 5, weight: "0"},
        {source: 2, target: 6, weight: "2"},
        {source: 3, target: 4, weight: "0"},
        {source: 3, target: 5, weight: "0"},
        {source: 3, target: 6, weight: "2"},
        {source: 4, target: 5, weight: "1"},
        {source: 4, target: 6, weight: "0"},
        {source: 5, target: 6, weight: "0"},
    ]
};

var T_9 = {
    "nodes": [
        {"id": 1, "tours": 9, "mise": 2, "points": 80, "estimation": 130, "réussi": "non"},
        {"id": 2, "tours": 9, "mise": 3, "points": 200, "estimation": 200, "réussi": "oui"},
        {"id": 3, "tours": 9, "mise": 0, "points": 210, "estimation": 210, "réussi": "oui"},
        {"id": 4, "tours": 9, "mise": 3, "points": 210, "estimation": 210, "réussi": "oui"},
        {"id": 5, "tours": 9, "mise": 0, "points": 190, "estimation": 370, "réussi": "non"},
        {"id": 6, "tours": 9, "mise": 1, "points": 290, "estimation": 290, "réussi": "oui"},
    ],
    // 0 = un gagne l'autre perd, 1 = les deux gagnent, 2 = les deux perdent
    "links": [
        {source: 1, target: 2, weight: "0"},
        {source: 1, target: 3, weight: "0"},
        {source: 1, target: 4, weight: "0"},
        {source: 1, target: 5, weight: "2"},
        {source: 1, target: 6, weight: "0"},
        {source: 2, target: 3, weight: "1"},
        {source: 2, target: 4, weight: "1"},
        {source: 2, target: 5, weight: "0"},
        {source: 2, target: 6, weight: "1"},
        {source: 3, target: 4, weight: "1"},
        {source: 3, target: 5, weight: "0"},
        {source: 3, target: 6, weight: "1"},
        {source: 4, target: 5, weight: "1"},
        {source: 4, target: 6, weight: "1"},
        {source: 5, target: 6, weight: "0"},
    ]
};

var T_10 = {
    "nodes": [
        {"id": 1, "tours": 10, "mise": 0, "points": 180, "estimation": 180, "réussi": "oui"},
        {"id": 2, "tours": 10, "mise": 1, "points": 220, "estimation": 220, "réussi": "oui"},
        {"id": 3, "tours": 10, "mise": 3, "points": 270, "estimation": 270, "réussi": "oui"},
        {"id": 4, "tours": 10, "mise": 2, "points": 300, "estimation": 250, "réussi": "oui"},
        {"id": 5, "tours": 10, "mise": 1, "points": 180, "estimation": 210, "réussi": "non"},
        {"id": 6, "tours": 10, "mise": 3, "points": 270, "estimation": 350, "réussi": "non"},
    ],
    // 0 = un gagne l'autre perd, 1 = les deux gagnent, 2 = les deux perdent
    "links": [
        {source: 1, target: 2, weight: "1"},
        {source: 1, target: 3, weight: "1"},
        {source: 1, target: 4, weight: "1"},
        {source: 1, target: 5, weight: "0"},
        {source: 1, target: 6, weight: "0"},
        {source: 2, target: 3, weight: "1"},
        {source: 2, target: 4, weight: "1"},
        {source: 2, target: 5, weight: "0"},
        {source: 2, target: 6, weight: "0"},
        {source: 3, target: 4, weight: "1"},
        {source: 3, target: 5, weight: "0"},
        {source: 3, target: 6, weight: "0"},
        {source: 4, target: 5, weight: "0"},
        {source: 4, target: 6, weight: "0"},
        {source: 5, target: 6, weight: "2"},
    ]
};