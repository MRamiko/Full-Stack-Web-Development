const country = {
  name: "Georgia",
  population: 10000000,
  writing: "Mxedruli",
  currency:"GEL",
  language: "Georgian",
  monuments: [
    "guria1",
    "guria2",
    "guria3"
  ],
  cities: [
    {
      name: "Batumi",
      population: 123213
    },
    {
      name: "Kutaisi",
      population: 32323
    },
    {
      name: "Ozurgeti<3",
      population: 3434343
    }
  ]
};
const fruits=['apple','banana','orange','kiwi','mango'];
const colors=['red','green','blue','yellow','black'];

const score =85;
function grade(score){

if (score >= 90 && score <=100) {
return 'A';
} else if (score >= 80) {
 return 'B';
 } else if (score >= 70) {
return 'C';
} else {
return 'D';
}
}
console.log(grade)