import data from "../../../utils/jsontest.json"


let firstRoutes = []
let countries = []

let routes = []



data.map(country => {countries.push(
    country.cca3
)})

data.map(country => {firstRoutes.push(
    {key: country.cca3, value: country.borders}
)})

firstRoutes.forEach((item) => {

    item.value?.map(border => {
        routes.push(
            [item.key, border]
        )
    })
})




//grafo
const adjacencyList = new Map();

//adicionar item
function addNode(country){
    adjacencyList.set(country, [])
};

function addLink(origin, destination) {
    adjacencyList.get(origin).push(destination)
    adjacencyList.get(destination).push(origin)
}


countries.forEach(addNode)
routes.forEach(route => addLink(...route))


function bfs(start){

    const verified = new Set()
    const queue = [start]


    while (queue.length > 0) {
        const country = queue.shift()
        const destinations = adjacencyList.get(country)

        for(const destination of destinations) {
            if(destination === "FRA") {
                console.log("Chegamos!");
            }
            if(!verified.has(destination)){
                console.log(destination)
                verified.add(destination)
                queue.push(destination)
            }
        }
    }
}



const handler = async (req, res) => {
    bfs("RUS")
    res.send("hi")

};


export default handler