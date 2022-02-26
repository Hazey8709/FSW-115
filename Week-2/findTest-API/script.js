// *!   JavaScript Page

fetch("findTest.json")
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        for (var i = 0; i < +data.length; i++) {
            document.getElementById("data").innerHTML +=
                "Name:" +
                data[i].name +
                "<br />" +
                "ID:" +
                data[i].id +
                "<br />" +
                "Full Degree:" +
                data[i].fullDegree +
                "<br />" +
                "Norm Degree:" +
                data[i].normDegree +
                "<br />" +
                "Speed:" +
                data[i].speed +
                "<br />" +
                "Sign:" +
                data[i].sign +
                "<br />" +
                " " +
                "<hr />" +
                "<br />";
        }
    });

/*

const planets = `
{
  "id": 0,
  "name": "Sun",
  "fullDegree": 119.36236006077748,
  "normDegree": 29.362360060777476,
  "speed": 0.9614164973040943,
  "isRetro": "false",
  "sign": "Cancer",
  "signLord": "Moon",
  "house": 6
},
{
  "id": 1,
  "name": "Moon",
  "fullDegree": 141.46427700686803,
  "normDegree": 21.46427700686803,
  "speed": 11.86293198461302,
  "isRetro": "false",
  "sign": "Leo",
  "signLord": "Sun",
  "house": 7
},
{
  "id": 2,
  "name": "Mars",
  "fullDegree": 100.86285218276414,
  "normDegree": 10.862852182764144,
  "speed": 0.6441614668698721,
  "isRetro": "false",
  "sign": "Cancer",
  "signLord": "Moon",
  "house": 6
},
{
  "id": 3,
  "name": "Mercury",
  "fullDegree": 140.51579105369137,
  "normDegree": 20.515791053691373,
  "speed": 1.5415660153057722,
  "isRetro": "false",
  "sign": "Leo",
  "signLord": "Sun",
  "house": 7
},
{
  "id": 4,
  "name": "Jupiter",
  "fullDegree": 127.03865813626372,
  "normDegree": 7.03865813626372,
  "speed": 0.21666058348340428,
  "isRetro": "false",
  "sign": "Leo",
  "signLord": "Sun",

  "house": 7
},
{
  "id": 5,
  "name": "Venus",
  "fullDegree": 118.06764224279176,
  "normDegree": 28.067642242791763,
  "speed": -0.6201938056718103,
  "isRetro": "true",
  "sign": "Cancer",
  "signLord": "Moon",

  "house": 6
},
{
  "id": 6,
  "name": "Saturn",
  "fullDegree": 214.37388242254252,
  "normDegree": 4.373882422542522,
  "speed": 0.023249303177768656,
  "isRetro": "false",
  "sign": "Scorpio",
  "signLord": "Mars",
  "house": 10
},
{
  "id": 7,
  "name": "Rahu",
  "fullDegree": 158.80846330342416,
  "normDegree": 8.808463303424162,
  "speed": -0.05295372555616844,
  "isRetro": "true",
  "sign": "Virgo",
  "signLord": "Mercury",
  "house": 8
},
{
  "id": 8,
  "name": "Ketu",
  "fullDegree": 338.80846330342416,
  "normDegree": 8.808463303424162,
  "speed": -0.05295372555616844,
  "isRetro": "true",
  "sign": "Pisces",
  "signLord": "Jupiter",
  "house": 2
},
{
  "id": 9,
  "name": "Ascendant",
  "fullDegree": 326.3572110330986,
  "normDegree": 26.357211033098622,
  "speed": 0,
  "isRetro": false,
  "sign": "Aquarius",
  "signLord": "Saturn",
  "house": 1
}
`;

const myPlanets = JSON.stringify(planets);
console.log(myPlanets);
*/
/* *!
"\n{\n  \"id\": 0,\n  \"name\": \"Sun\",\n  \"fullDegree\": 119.36236006077748,\n  \"normDegree\": 29.362360060777476,\n  \"speed\": 0.9614164973040943,\n  \"isRetro\": \"false\",\n  \"sign\": \"Cancer\",\n  \"signLord\": \"Moon\",\n  \"house\": 6\n},\n{\n  \"id\": 1,\n  \"name\": \"Moon\",\n  \"fullDegree\": 141.46427700686803,\n  \"normDegree\": 21.46427700686803,\n  \"speed\": 11.86293198461302,\n  \"isRetro\": \"false\",\n  \"sign\": \"Leo\",\n  \"signLord\": \"Sun\",\n  \"house\": 7\n},\n{\n  \"id\": 2,\n  \"name\": \"Mars\",\n  \"fullDegree\": 100.86285218276414,\n  \"normDegree\": 10.862852182764144,\n  \"speed\": 0.6441614668698721,\n  \"isRetro\": \"false\",\n  \"sign\": \"Cancer\",\n  \"signLord\": \"Moon\",\n  \"house\": 6\n},\n{\n  \"id\": 3,\n  \"name\": \"Mercury\",\n  \"fullDegree\": 140.51579105369137,\n  \"normDegree\": 20.515791053691373,\n  \"speed\": 1.5415660153057722,\n  \"isRetro\": \"false\",\n  \"sign\": \"Leo\",\n  \"signLord\": \"Sun\",\n  \"house\": 7\n},\n{\n  \"id\": 4,\n  \"name\": \"Jupiter\",\n  \"fullDegree\": 127.03865813626372,\n  \"normDegree\": 7.03865813626372,\n  \"speed\": 0.21666058348340428,\n  \"isRetro\": \"false\",\n  \"sign\": \"Leo\",\n  \"signLord\": \"Sun\",\n\n  \"house\": 7\n},\n{\n  \"id\": 5,\n  \"name\": \"Venus\",\n  \"fullDegree\": 118.06764224279176,\n  \"normDegree\": 28.067642242791763,\n  \"speed\": -0.6201938056718103,\n  \"isRetro\": \"true\",\n  \"sign\": \"Cancer\",\n  \"signLord\": \"Moon\",\n\n  \"house\": 6\n},\n{\n  \"id\": 6,\n  \"name\": \"Saturn\",\n  \"fullDegree\": 214.37388242254252,\n  \"normDegree\": 4.373882422542522,\n  \"speed\": 0.023249303177768656,\n  \"isRetro\": \"false\",\n  \"sign\": \"Scorpio\",\n  \"signLord\": \"Mars\",\n  \"house\": 10\n},\n{\n  \"id\": 7,\n  \"name\": \"Rahu\",\n  \"fullDegree\": 158.80846330342416,\n  \"normDegree\": 8.808463303424162,\n  \"speed\": -0.05295372555616844,\n  \"isRetro\": \"true\",\n  \"sign\": \"Virgo\",\n  \"signLord\": \"Mercury\",\n  \"house\": 8\n},\n{\n  \"id\": 8,\n  \"name\": \"Ketu\",\n  \"fullDegree\": 338.80846330342416,\n  \"normDegree\": 8.808463303424162,\n  \"speed\": -0.05295372555616844,\n  \"isRetro\": \"true\",\n  \"sign\": \"Pisces\",\n  \"signLord\": \"Jupiter\",\n  \"house\": 2\n},\n{\n  \"id\": 9,\n  \"name\": \"Ascendant\",\n  \"fullDegree\": 326.3572110330986,\n  \"normDegree\": 26.357211033098622,\n  \"speed\": 0,\n  \"isRetro\": false,\n  \"sign\": \"Aquarius\",\n  \"signLord\": \"Saturn\",\n  \"house\": 1\n}\n"
*/
