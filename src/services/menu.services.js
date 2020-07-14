export const Menus = [
    'https://spreadsheets.google.com/feeds/cells/1jKtenNfhqRSaPds0mENvEcB4w-qocmxIDyfA-vbu_Ds/1/public/full?alt=json',
    'https://spreadsheets.google.com/feeds/cells/1jKtenNfhqRSaPds0mENvEcB4w-qocmxIDyfA-vbu_Ds/2/public/full?alt=json',
    'https://spreadsheets.google.com/feeds/cells/1jKtenNfhqRSaPds0mENvEcB4w-qocmxIDyfA-vbu_Ds/3/public/full?alt=json'
]

// Helpers
const getCol = (colNum, data) => {
    let newCol

    newCol = data.filter(item => {
        return item.gs$cell.col === colNum.toString()
    })

    return newCol
}

export const fetchMenuData = (url) => new Promise((resolve, reject) => {
    fetch(url).then(response => {
        response.json().then(data => {

            let responseObject = {}

            responseObject.data = data.feed.entry
            responseObject.title = data.feed.title.$t
            responseObject.colCount = data.feed.gs$colCount.$t
            responseObject.rowCount = data.feed.gs$rowCount.$t
            responseObject.cols = []

            // Create column arrays for easier consuming
            for (let i = 0; i <= responseObject.colCount; i++) {
                responseObject.cols.push(getCol(i, responseObject.data))
            }

            // Delete empty arrays
            responseObject.cols = responseObject.cols.filter(item => !!item.length)



            resolve(responseObject)
        }).catch(err => {
            console.error(err)
            reject(err)
        })
    })
})