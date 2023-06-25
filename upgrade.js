// Physical
var UpgradeMenu1 = document.getElementById("UpgradeMenu1");
var InnerUpgrades = UpgradeMenu1.children;
for (let i = 2; i < InnerUpgrades.length; i++) {
  (function () {
    var CurrentChild = InnerUpgrades[i];
    var CurrentAmountElement = CurrentChild.children[0];
    var CurrentCostElement = CurrentChild.children[2];

    CurrentChild.onclick = function () {
      console.log(PlayerStats.MainUpgrades[0][i - 2]);
      if (PlayerStats.Logs >= PlayerStats.MainUpgrades[0][i - 2].Cost) {
        PlayerStats.Logs -= PlayerStats.MainUpgrades[0][i - 2].Cost;
        PlayerStats.LogsPerClick += PlayerStats.MainUpgrades[0][i - 2].Boost;
        PlayerStats.MainUpgrades[0][i - 2].AmountOwned++;
        PlayerStats.MainUpgrades[0][i - 2].Cost *= 1 + (PlayerStats.MainUpgrades[0][i - 2].AmountOwned / 100);
        PlayerStats.MainUpgrades[0][i - 2].Cost = PlayerStats.MainUpgrades[0][i - 2].Cost.toFixed(0)

        CurrentAmountElement.textContent = PlayerStats.MainUpgrades[0][i - 2].AmountOwned;
        CurrentCostElement.textContent = PlayerStats.MainUpgrades[0][i - 2].Cost;
      }
      RefreshUI();
    };
    CurrentAmountElement.textContent = PlayerStats.MainUpgrades[0][i - 2].AmountOwned;
    CurrentCostElement.textContent = PlayerStats.MainUpgrades[0][i - 2].Cost;
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
      console.log(PlayerStats.MainUpgrades[1][i - 2]);
      if (PlayerStats.Logs >= PlayerStats.MainUpgrades[1][i - 2].Cost) {
        PlayerStats.Logs -= PlayerStats.MainUpgrades[1][i - 2].Cost;
        PlayerStats.LogsPerSecond += PlayerStats.MainUpgrades[1][i - 2].Boost;
        PlayerStats.MainUpgrades[1][i - 2].AmountOwned++;
        PlayerStats.MainUpgrades[1][i - 2].Cost *= 1 + (PlayerStats.MainUpgrades[1][i - 2].AmountOwned / 100);
        PlayerStats.MainUpgrades[1][i - 2].Cost = PlayerStats.MainUpgrades[1][i - 2].Cost.toFixed(0)

        CurrentAmountElement.textContent = PlayerStats.MainUpgrades[1][i - 2].AmountOwned;
        CurrentCostElement.textContent = PlayerStats.MainUpgrades[1][i - 2].Cost;
      }
      RefreshUI();
    };
    CurrentAmountElement.textContent = PlayerStats.MainUpgrades[1][i - 2].AmountOwned;
    CurrentCostElement.textContent = PlayerStats.MainUpgrades[1][i - 2].Cost;
  })(i); // Pass the current value of `i` as an argument to the IIFE
}