// create a family database

// use family;
// create father side collection
db.createCollection('parents');

// insert into father collection
db.parents.insertMany(
  db.parents.insertMany(
    {
    "_id": 1,
    "title": "father",
    "name": "momodou touray",
    "address": "jambanjelly",
    "dob": new Date('1945-09-07'),
    "professor": "teacher",
    "orign": "jambanjelly",
    "living": true,
    "parent": [
                 "father", {"name": "ebrima touray", "living": false},
                 "mother", {"name": "kumba bah", "living": false}
        ],
    "brother": "sulayman touray",
    "sister": "",
    "marriage": true,
    "wife": ["jatou badjie", "rabby bah"],
    "children": ["fatoumata touray", "muhammed lamin touray", "ebrima touray", "alieu touray", "jainaba touray"]
  },
  {
    "_id": 2,
    "title": "mother",
    "name": "jatou badjie",
    "address": "jambanjelly",
    "dob": new Date('1960-02-06'),
    "professor": "house wife",
    "orign": "jambanjelly",
    "living": true,
    "parent": [
                "father", {"name": "basaikou badjie", "living": false},
                "mother", {"name": "ena jara bojang", "living": false}
            ],
    "brother": "",
    "sister": ["tida badjie", "nini badjie"],
    "marriage": true,
    "husband": "momodou touray",
    "children": ["fatoumata touray", "muhammed lamin touray", "ebrima touray", "alieu touray", "jainaba touray"]
  },
  {
    "_id": 3,
    "title": "step_mother",
    "name": "rabby bah",
    "address": "jambanjelly",
    "dob": new Date('1984-05-16'),
    "professor": "house wife",
    "orign": "taybatou",
    "living": true,
    "parent": [
        "father", {"name": "bubacarr bah", "living": true},
        "mother", {"name": "mariama jallow", "living": true}
    ],
    "brother": "",
    "sister": "",
    "marriage": true,
    "husband": [
            "late-husband", {"name": "buba sowe", "living": false},
            "current-husband", {"name": "momodou touray", "living": true}
    ],
    "re_marriage": true,
    "children": "marima bah"
  },
  {
    "_id": 4,
    "title": "uncle",
    "name": "sulayman touray",
    "address": "jambanjelly",
    "dob": new Date('1975-02-10'),
    "professor": "labourer",
    "orign": "jambanjelly",
    "living": true,
    "parent": [
        "father", {"name": "ebrima touray", "living": false},
        "mother", {"name": "komba bah", "living": false}
    ],
    "brother": ["momdou touray"],
    "sister": "",
    "marriage": false,
    "children": ""
  },
  {
  "_id": 5,
  "title": "aunt",
  "name": "tidat badjie",
  "address": "jambanjelly",
  "dob": new Date('1930-09-16'),
  "professor": "house wife",
  "orign": "jambanjelly",
  "living": true,
  "parent": [
    "father", {"name": "basaikou badjie", "living": false},
    "mother", {"name": "ena jara bojang", "living": false}
],
  "brother": ["bori badjie", "malamin badjie"],
  "sister": ["nini badjie", "jatou badjie"],
  "marriage": true,
  "husband": "mamadi bojang",
  "children": ["faye bojang", "abe bojang", "banna bojang", "alagie bojang"]
  },
  {
    "_id": 6,
    "title": "aunt",
    "name": "nini badjie",
    "address": "fajikunda",
    "dob": new Date('1950-03-23'),
    "professor": "cleaner",
    "orign": "jambanjelly",
    "living": true,
    "parent": [
        "father", {"name": "basaikou badjie", "living": false},
        "mother", {"name": "ena jara bojang", "living": false}
    ],
    "brother": "",
    "sister": ["tida badjie", "jatou badjie"],
    "marriage": true,
    "husband": "fabakary sanyang",
    "children": ["bakary sanyang", "amie sanyang", "sariba sanyang", "matar sanyang", "isatou sanyang", "nyima sanyang"]
  }
  );

  // create sbilings collections
db.createCollection('sbilings');

// insert into sbilings collection
db.sbilings.insertOne(
  {
  "_id": 5,
  "title": "sister",
  "name": "jainaba touray",
  "address": "jambanjelly",
  "dob": new Date('2002-12-27'),
  "prpofessor": "student",
  "orign": "jambanjelly",
  "living": true,
  "parent": [
      "father", {"name": "momodou touray", "living": true},
      "mother", {"name": "jatou badjie", "living": true}
  ],
  "brother": ["muhammed lamin touray","ebrima touray", "alieu touray"],
  "sister": "fatoumata touray",
  "marraige": false,
  "children": ""
  }
);

// inser many
db.sbilings.insertMany(
  {
  "_id": 1,
  "title": "sister",
  "name": "fatoumata touray",
  "address": "talinding",
  "dob": new Date('1986-10-21'),
  "prpofessor": "plocie",
  "orign": "jambanjelly",
  "living": true,
  "parent": [
      "father", {"name": "momodou touray", "living": true},
      "mother", {"name": "jatou badjie", "living": true}
  ],
  "brother": ["muhammed lamin touray", "ebrima touray", "alieu touray"],
  "sister": "jainaba touray",
  "marraige": true,
  "husband": "lamin k saidy",
  "children": ["alieu saidy", "mariama saidy"]
},
  {
  "_id": 2,
  "title": "brother",
  "name": "muhammed lamin touray",
  "address": "jambanjelly",
  "dob": new Date('1988-08-27'),
  "prpofessor": "driver",
  "orign": "jambanjelly",
  "living": true,
  "parent": [
      "father", {"name": "momodou touray", "living": true},
      "mother", {"name": "jatou badjie", "living": true}
  ],
  "brother": ["ebrima touray", "alieu touray"],
  "sister": ["fatoumata touray","jainaba touray"],
  "marraige": false,
  "children": "fotoumata touray"
},
{
"_id": 3,
"title": "",
"name": "ebrima touray",
"address": "jambanjelly",
"dob": new Date('1992-03-20'),
"prpofessor": "student",
"orign": "jambanjelly",
"living": true,
"parent": [
    "father", {"name": "momodou touray", "living": true},
    "mother", {"name": "jatou badjie", "living": true}
],
"brother": ["muhammed lamin touray", "alieu touray"],
"sister": ["fatoumata touray","jainaba touray"],
"marraige": false,
"children": ""
},
{
"_id": 4,
"title": "brother",
"name": "alieu touray",
"address": "jambanjelly",
"dob": new Date('1996-09-27'),
"prpofessor": "student",
"orign": "jambanjelly",
"living": true,
"parent": [
    "father", {"name": "momodou touray", "living": true},
    "mother", {"name": "jatou badjie", "living": true}
],
"brother": ["muhammed lamin touray", "ebrima touray"],
"sister": ["fatoumata touray","jainaba touray"],
"marraige": false,
"children": ""
},
{
"_id": 5,
"title": "sister",
"name": "jainaba touray",
"address": "jambanjelly",
"dob": new Date('2002-12-27'),
"prpofessor": "student",
"orign": "jambanjelly",
"living": true,
"parent": [
    "father", {"name": "momodou touray", "living": true},
    "mother", {"name": "jatou badjie", "living": true}
],
"brother": ["muhammed lamin touray","ebrima touray", "alieu touray"],
"sister": "fatoumata touray",
"marraige": false,
"children": ""
}
);
