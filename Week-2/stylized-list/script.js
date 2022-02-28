/*! JavaScript */

//  !!        First Way Of Doing It
var woods = [
    {
        id: 0,
        name: "Pine",
        type: "soft wood",
        color: "yellowish",
        inside: "true",
        outside: "false",
        description: "yellow with brown knots",
        used_for: ["indoor repair", " framing", " floors"],
    },
    {
        id: 1,
        name: "Spruce",
        type: "softwood",
        color: ["yellowish", " reddish brown"],
        inside: "true",
        outside: "false",
        description: "yellowish with reddish brown knots/lines",
        used_for: ["musical instruments", " paper", " commercial"],
    },
    {
        id: 2,
        name: "Larch",
        type: "softwood",
        color: "reddish brown",
        inside: "true",
        outside: "false",
        description: "reddish haze with brown knots/ lines",
        used_for: [
            "paneling veneers",
            " interior",
            " high quality",
            " often without knots",
        ],
    },
    {
        id: 3,
        name: "Juniper",
        type: "softwood",
        color: "red",
        inside: "true",
        outside: "sometimes",
        description: "reddish fine-grained",
        used_for: [
            "High quality fences",
            " pencils",
            " decay & insect resistant",
        ],
    },
    {
        id: 4,
        name: "Aspen",
        type: "softwood",
        color: "white",
        inside: "true",
        outside: "false",
        description: "white plywood with light knots / lines",
        used_for: ["paneling saunas", " utility purposes", " paper"],
    },
    {
        id: 5,
        name: "Hornbeam",
        type: "hardwood",
        color: "reddish white",
        inside: "true",
        outside: "true",
        description: "variety of birch family wood reddish with a white haze.",
        used_for: ["parquet flooring", " chess sets", " durable"],
    },
    {
        id: 6,
        name: "Birch",
        type: "hardwood",
        color: ["gray", " white", " black", " silver", " yellow birch"],
        inside: "true",
        outside: "true",
        description: "decorative wood",
        used_for: ["veneers", " cabinets", " musical instruments"],
    },
    {
        id: 7,
        name: "Alder",
        type: "hardwood",
        color: ["red", "silver", " black", " white"],
        inside: "true",
        outside: "true",
        description: "decorative wood",
        used_for: ["electric guitars", " under water resistant", " pilings"],
    },
    {
        id: 8,
        name: "Beech",
        type: "hardwood",
        color: "brownish white",
        inside: "true",
        outside: "true",
        description: "durable hardwood",
        used_for: [
            "food production",
            " beer wooden barrels",
            " writing tables in germany",
        ],
    },
    {
        id: 9,
        name: "Oak",
        type: "hardwood",
        color: "brown with reddish haze",
        inside: "true",
        outside: "false (not common)",
        description: "elegant wood for show thats durable",
        used_for: ["floors", " cabinetry", " interior trim"],
    },
    {
        id: 10,
        name: "Elm",
        type: "hardwood",
        color: "yellow whitish tan",
        inside: "true",
        outside: "false",
        description: "not common natural looking wood",
        used_for: ["drums", " hockey sticks", " submerged applications"],
    },
    {
        id: 11,
        name: "cherry",
        type: "hardwood",
        color: "orangish to dark brown",
        inside: "true",
        outside: "true (but too expensive to use)",
        description: "elegant coloring & expensive",
        used_for: ["furniture", " flooring", " cabinetry"],
    },
    {
        id: 12,
        name: "Pear",
        type: "hardwood",
        color: "yellowish light brown",
        inside: "true",
        outside: "true (not common)",
        description: "has a elegant grain pattern",
        used_for: ["cabinetry", " furniture", " premium items"],
    },
    {
        id: 13,
        name: "Maple",
        type: "hardwood",
        color: "light brownish",
        inside: "true",
        outside: "true (not common)",
        description: "wood that has a light grain design",
        used_for: ["basketball courts", " baseball bats", " bowling pins"],
    },
];
// console.log(woods);

buildList(woods);

function buildList(data) {
    var table = document.getElementById("myList");

    for (var i = 0; i < data.length; i++) {
        var items = `
    <li>ID: ${data[i].id}<br />
    Name: ${data[i].name}<br />
    Type: ${data[i].type}<br />
    Color: ${data[i].color}<br />
    Inside: ${data[i].inside}<br />
    Outside: ${data[i].outside}<br />
    Description: ${data[i].description}<br />
    Used For: ${data[i].used_for}
    </li><br /><hr />
    `;

        table.innerHTML += items;
    }
}

//   !!       Second Way To Do It
/*
var woods = [
    {
        id: 0,
        name: "Pine",
        type: "soft wood",
        color: "yellowish",
        inside: "true",
        outside: "false",
        description: "yellow with brown knots",
        used_for: ["indoor repair", " framing", " floors"],
    },
    {
        id: 1,
        name: "Spruce",
        type: "softwood",
        color: ["yellowish", " reddish brown"],
        inside: "true",
        outside: "false",
        description: "yellowish with reddish brown knots/lines",
        used_for: ["musical instruments", " paper", " commercial"],
    },
    {
        id: 2,
        name: "Larch",
        type: "softwood",
        color: "reddish brown",
        inside: "true",
        outside: "false",
        description: "reddish haze with brown knots/ lines",
        used_for: [
            "paneling veneers",
            " interior",
            " high quality",
            " often without knots",
        ],
    },
    {
        id: 3,
        name: "Juniper",
        type: "softwood",
        color: "red",
        inside: "true",
        outside: "sometimes",
        description: "reddish fine-grained",
        used_for: [
            "High quality fences",
            " pencils",
            " decay & insect resistant",
        ],
    },
    {
        id: 4,
        name: "Aspen",
        type: "softwood",
        color: "white",
        inside: "true",
        outside: "false",
        description: "white plywood with light knots / lines",
        used_for: ["paneling saunas", " utility purposes", " paper"],
    },
    {
        id: 5,
        name: "Hornbeam",
        type: "hardwood",
        color: "reddish white",
        inside: "true",
        outside: "true",
        description: "variety of birch family wood reddish with a white haze.",
        used_for: ["parquet flooring", " chess sets", " durable"],
    },
    {
        id: 6,
        name: "Birch",
        type: "hardwood",
        color: ["gray", " white", " black", " silver", " yellow birch"],
        inside: "true",
        outside: "true",
        description: "decorative wood",
        used_for: ["veneers", " cabinets", " musical instruments"],
    },
    {
        id: 7,
        name: "Alder",
        type: "hardwood",
        color: ["red", "silver", " black", " white"],
        inside: "true",
        outside: "true",
        description: "decorative wood",
        used_for: ["electric guitars", " under water resistant", " pilings"],
    },
    {
        id: 8,
        name: "Beech",
        type: "hardwood",
        color: "brownish white",
        inside: "true",
        outside: "true",
        description: "durable hardwood",
        used_for: [
            "food production",
            " beer wooden barrels",
            " writing tables in germany",
        ],
    },
    {
        id: 9,
        name: "Oak",
        type: "hardwood",
        color: "brown with reddish haze",
        inside: "true",
        outside: "false (not common)",
        description: "elegant wood for show thats durable",
        used_for: ["floors", " cabinetry", " interior trim"],
    },
    {
        id: 10,
        name: "Elm",
        type: "hardwood",
        color: "yellow whitish tan",
        inside: "true",
        outside: "false",
        description: "not common natural looking wood",
        used_for: ["drums", " hockey sticks", " submerged applications"],
    },
    {
        id: 11,
        name: "cherry",
        type: "hardwood",
        color: "orangish to dark brown",
        inside: "true",
        outside: "true (but too expensive to use)",
        description: "elegant coloring & expensive",
        used_for: ["furniture", " flooring", " cabinetry"],
    },
    {
        id: 12,
        name: "Pear",
        type: "hardwood",
        color: "yellowish light brown",
        inside: "true",
        outside: "true (not common)",
        description: "has a elegant grain pattern",
        used_for: ["cabinetry", " furniture", " premium items"],
    },
    {
        id: 13,
        name: "Maple",
        type: "hardwood",
        color: "light brownish",
        inside: "true",
        outside: "true (not common)",
        description: "wood that has a light grain design",
        used_for: ["basketball courts", " baseball bats", " bowling pins"],
    },
];
// console.log(woods);

var woodsList = document.getElementById("myList");

for (var i = 0; i < woods.length; i++) {
    woodsList.innerHTML +=
        "<li>" + woods[i].name + "ID:" + woods[i].id + "</li>";
}

*/
