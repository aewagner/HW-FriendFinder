// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friends = [{
    "name": "Ahmed",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores": [
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
    ]
},

{
    "name": "Rick",
    "photo": "https://vignette.wikia.nocookie.net/deathbattlefanon/images/0/08/2816096-thumbnail_1992608045960713568.jpg/revision/latest?cb=20170828123523",
    "scores": [
        5,
        5,
        5,
        1,
        1,
        5,
        1,
        3,
        1,
        1
    ]
},

{
    "name": "Morty",
    "photo": "https://vignette.wikia.nocookie.net/ricksanchez/images/e/e8/Morty.png/revision/latest?cb=20160605181037",
    "scores": [
        1,
        2,
        1,
        4,
        2,
        3,
        5,
        2,
        4,
        3
    ]
},

{
    "name": "Summer",
    "photo": "https://vignette.wikia.nocookie.net/rickandmorty/images/a/ad/Summer_is_cool.jpeg/revision/latest/scale-to-width-down/310?cb=20160919183158",
    "scores": [
        3,
        3,
        3,
        4,
        5,
        3,
        2,
        5,
        3,
        1
    ]
},

{
    "name": "Mr. Poopybutthole",
    "photo": "https://vignette.wikia.nocookie.net/rickandmorty/images/3/37/Mr_poopy_butthole.png/revision/latest?cb=20150819161234",
    "scores": [
        "3",
        "3",
        "3",
        "3",
        "3",
        "3",
        "3",
        "3",
        "3",
        "3"
    ]
},

{
    "name": "Jerry",
    "photo": "http://vignette3.wikia.nocookie.net/rickandmorty/images/f/f1/Jerry_Smith.png/revision/latest?cb=20160923151111",
    "scores": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
    ]



}];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;