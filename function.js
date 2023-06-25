var TreeElement = document.querySelector(".tree")

var ForceDataRefresh = true

var PlayerStats = {
  PlayerSettings: {
    CustomCursor: true,
  },

  Logs: 0,
  LogsPerSecond: 0,
  LogsPerClick: 1,

  TreeStats: {
    HP: 500,
    MaxHP: 500,
    TreeJackpotPercentage: 0.2,
    TreeType: 4,
    TreeSpecialMode: false,
  },

  MainUpgrades: [
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
    [],
  ]
}

if (!ForceDataRefresh) {
  var SavedPlayerStatsEncoded = JSON.parse(localStorage.getItem("SavedPlayerStats")) || PlayerStats
  PlayerStats = SavedPlayerStatsEncoded
}

function SavePlayerStats() {
  localStorage.setItem("SavedPlayerStats", JSON.stringify(PlayerStats))
}

// sets tree type
TreeElement.style.backgroundImage = `url("trees/tree${PlayerStats.TreeStats.TreeType}.png")`

setInterval(function() {
    // Code to be executed every second
    PlayerStats.Logs += PlayerStats.LogsPerSecond
    RefreshUI()
    SavePlayerStats()
}, 1000);

function RefreshUI() {
    var LogTrackerElements = document.querySelectorAll(".log-tracker");
    var LogsPerSecondTrackerElements = document.querySelectorAll(".logs-per-second-tracker");
    var LogsPerClickTrackerElement = document.querySelector(".logs-per-click-tracker");

    LogTrackerElements.forEach(function(element) {
        element.textContent = PlayerStats.Logs.toFixed(1)
    })
    LogsPerSecondTrackerElements.forEach(function(element) {
        element.textContent = PlayerStats.LogsPerSecond.toFixed(1)
    })
    LogsPerClickTrackerElement.textContent = PlayerStats.LogsPerClick.toFixed(1)
}
RefreshUI()


function TreeClick() {
    PlayerStats.Logs += PlayerStats.LogsPerClick
    PlayerStats.TreeStats.HP -= 1
    if (PlayerStats.TreeStats.HP <= 0) {
        var JackpotDestructionAmount = PlayerStats.Logs * PlayerStats.TreeStats.TreeJackpotPercentage
        PlayerStats.Logs += JackpotDestructionAmount
        PlayerStats.TreeStats.HP = PlayerStats.TreeStats.MaxHP
        showToast(`Tree Destroyed! +${JackpotDestructionAmount.toFixed(1)} Logs`, "success")

        if (PlayerStats.TreeStats.TreeSpecialMode == false) { var RandomTreeTypeNum = Math.floor(Math.random() * 4) + 1; }
        PlayerStats.TreeStats.TreeType = RandomTreeTypeNum

        console.log("TREE TYPE: " + PlayerStats.TreeStats.TreeType)
        TreeElement.style.backgroundImage = `url("trees/tree${PlayerStats.TreeStats.TreeType}.png")`
    }
    console.log(PlayerStats.TreeStats.HP)

    MakeLog()
    RefreshUI()
}

