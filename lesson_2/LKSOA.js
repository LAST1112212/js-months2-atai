const robotsss = [
    {
        robot: "Beks",
        speed: 150,
        force: 200
    },
    {
        robot: "Azam",
        speed: 120,
        force:130
    },
    {
        robot: "Maks",
        speed: 100,
        force: 120
    }
]
const filteredrobotsss = robotsss.filter(robotsss =>robotsss.speed > 100,robotsss =>robotsss.force> 120)
console.log(filteredrobotsss)