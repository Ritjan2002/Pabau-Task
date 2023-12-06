let showAllBtns = true;

let values = [
  {
    value: "Internship",
    check: false,
  },
  {
    value: "Pabau",
    check: false,
  },
  {
    value: "Employment",
    check: false,
  },
  {
    value: "Career",
    check: false,
  },
];

let btns = [
  {
    name: "Shuffle Values",
    click: "shuffle()",
  },
  {
    name: "Change Values",
    click: "change()",
  },
  {
    name: "Show selected Values",
    click: "show()",
  },
];

let btnShowAll = [
  {
    name: "Show all values",
    click: "showAll()",
  },
];

//renders or re-renders the values in the front end
const renderValue = () => {
  let checkboxRendered = ``;
  let btnsRendered = ``;

  if (showAllBtns) {
    values.map(
      (e) =>
        (checkboxRendered += `<div>
                  <input type="checkbox" id=${e.value} ${
          e.check && "checked"
        } value=${e.value} onchange=changeCheck(${e.value})>
                    <label for=${e.value}>${e.value}</label>
                </div>`)
    );

    btns.map(
      (btn) =>
        (btnsRendered += `
              <button onclick=${btn.click}>${btn.name}</button>
          `)
    );
  } else {
    const selectedOptions = showSelectedOptions();
    if (selectedOptions.length > 0) {
      selectedOptions.map(
        (e) =>
          (checkboxRendered += `<div>
                      <input type="checkbox" id=${e.value} ${
            e.check && "checked"
          } value=${e.value} onchange=changeCheck(${e.value})>
                        <label for=${e.value}>${e.value}</label>
                    </div>`)
      );
    } else {
      checkboxRendered += `<div style="color: red"><h1>Nothing selected</h1></div>`;
    }

    btnShowAll.map(
      (btn) =>
        (btnsRendered += `
                        <button onclick=${btn.click}>${btn.name}</button>
                    `)
    );
  }

  document.getElementById("formCheck").innerHTML = checkboxRendered;
  document.getElementById("btns").innerHTML = btnsRendered;
};

renderValue();

//showing just selected options
const showSelectedOptions = () => {
  return values.filter((value) => value.check === true);
};

//it updates the values when they check or uncheck
const changeCheck = (check) => {
  values.map((item) => {
    if (item.value === check.value) {
      item.check = !item.check;
    }
    return item;
  });
};

//3 functions to play with data
const shuffle = () => {
  values = values.sort(() => Math.random() - 0.5);
  renderValue();
};

const change = () => {
  values = [
    {
      value: "HTML",
    },
    {
      value: "CSS",
    },
    {
      value: "Javascript",
    },
    {
      value: "Typescript",
    },
  ];
  renderValue();
  window.alert("Values of checkboxes has been changed!!!");
};

const show = () => {
  showAllBtns = false;
  renderValue();
};


// show all the checkboxes and bring buttons back
const showAll = () => {
  showAllBtns = true;
  renderValue();
};
