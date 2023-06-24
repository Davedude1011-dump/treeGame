var TreeElement = document.querySelector(".tree")
var TreeStats = {
    HP: 1000,
    TreeType: 4
}

var Points = 10000000000000
var PointsPerSecond = 0
var PointsPerClick = 1

function RefreshUI() {
    var PointTrackerElements = document.querySelectorAll(".point-tracker");
    var PointsPerSecondTrackerElements = document.querySelectorAll(".points-per-second-tracker");
    var PointsPerClickTrackerElement = document.querySelector(".points-per-click-tracker");

    PointTrackerElements.forEach(function(element) {
        element.textContent = Points.toFixed(1)
    })
    PointsPerSecondTrackerElements.forEach(function(element) {
        element.textContent = PointsPerSecond.toFixed(1)
    })
    PointsPerClickTrackerElement.textContent = PointsPerClick.toFixed(1)
}
RefreshUI()


function TreeClick() {
    Points += PointsPerClick
    TreeStats.HP -= 1
    if (TreeStats.HP <= 0) {
        Points *= 2
        TreeStats.HP = 1000
    }
    //console.log(TreeStats.HP)

    MakeLog()
    RefreshUI()
}

var Upgrades = [
    [
        {AmountOwned: 0, Boost: 0.1, Cost: 15},
        {AmountOwned: 0, Boost: 1, Cost: 100},
        {AmountOwned: 0, Boost: 8, Cost: 1100},
        {AmountOwned: 0, Boost: 47, Cost: 12000},
        {AmountOwned: 0, Boost: 260, Cost: 130000},
        {AmountOwned: 0, Boost: 1400, Cost: 1400000},
        {AmountOwned: 0, Boost: 7800, Cost: 20000000},
        {AmountOwned: 0, Boost: 44000, Cost: 330000000},
        {AmountOwned: 0, Boost: 260000, Cost: 5100000000},
        {AmountOwned: 0, Boost: 1600000, Cost: 75000000000},
        {AmountOwned: 0, Boost: 10000000, Cost: 1000000000000},
    ],
    [
        {AmountOwned: 0, CostMultyplier: 1.1, Cost: 1000}
    ],
    [],
]

// Physical
var UpgradeMenu1 = document.getElementById("UpgradeMenu1");
var InnerUpgrades = UpgradeMenu1.children;
for (let i = 2; i < InnerUpgrades.length; i++) {
  (function () {
    var CurrentChild = InnerUpgrades[i];
    var CurrentAmountElement = CurrentChild.children[0];
    var CurrentCostElement = CurrentChild.children[2];

    CurrentChild.onclick = function () {
      console.log(Upgrades[0][i - 2]);
      if (Points >= Upgrades[0][i - 2].Cost) {
        Points -= Upgrades[0][i - 2].Cost;
        PointsPerClick += Upgrades[0][i - 2].Boost;
        Upgrades[0][i - 2].AmountOwned++;
        Upgrades[0][i - 2].Cost *= 1 + (Upgrades[0][i - 2].AmountOwned / 100);
        Upgrades[0][i - 2].Cost = Upgrades[0][i - 2].Cost.toFixed(0)

        CurrentAmountElement.textContent = Upgrades[0][i - 2].AmountOwned;
        CurrentCostElement.textContent = Upgrades[0][i - 2].Cost;
      }
      RefreshUI();
    };
  })(i); // Pass the current value of `i` as an argument to the IIFE
}

// Automation
var UpgradeMenu2 = document.getElementById("UpgradeMenu2");
var InnerUpgrades = UpgradeMenu2.children;
for (let i = 2; i < InnerUpgrades.length; i++) {
  (function () {
    var CurrentChild = InnerUpgrades[i];
    var CurrentAmountElement = CurrentChild.children[0];
    var CurrentCostElement = CurrentChild.children[2];

    CurrentChild.onclick = function () {
      console.log(Upgrades[1][i - 2]);
      if (Points >= Upgrades[1][i - 2].Cost) {
        Points -= Upgrades[1][i - 2].Cost;
        PointsPerSecond += Upgrades[1][i - 2].Boost;
        Upgrades[1][i - 2].AmountOwned++;
        Upgrades[1][i - 2].Cost *= 1 + (Upgrades[1][i - 2].AmountOwned / 100);
        Upgrades[1][i - 2].Cost = Upgrades[1][i - 2].Cost.toFixed(0)

        CurrentAmountElement.textContent = Upgrades[1][i - 2].AmountOwned;
        CurrentCostElement.textContent = Upgrades[1][i - 2].Cost;
      }
      RefreshUI();
    };
  })(i); // Pass the current value of `i` as an argument to the IIFE
}