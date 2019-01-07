import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// function parameters

function oldWay(one, two, three, four) {
  if (typeof one === undefined) one = "one";
  if (typeof two === undefined) two = "two";
  if (typeof three === undefined) three = "three";
  if (typeof four === undefined) four = "four";
}

oldWay("oldOne", "oldTwo", undefined, undefined);

function newWayAllParamsNamed({ one, two, three, four }) {
  return undefined;
}

// this still doesn't project against if this single params objects is undefined, therefore...
newWayAllParamsNamed({ one: "one", two: "two", three: "three", four: "four" });

//
function newWayAllParamsNamedWithEmptyObj({ one, two, three, four } = {}) {
  return undefined;
}
// we can set default values with named parameters at the time of function definition
function newWayRefactored({
  one = "one",
  two = "two",
  three = "three",
  four = "four"
} = {}) {
  return undefined;
}
