const selectA = document.getElementById('selectA')
const selectB = document.getElementById('selectB')


selectA.addEventListener('change', (e) => {
    console.log(e.target.value)
    getPlan()
})

selectB.addEventListener('change', (e) => {
    console.log(e.target.value)
    getPlan()
})


async function getPlan() {
    const url = './plan'
    const res = await fetch(url)
    const data = await res.json()
    console.log('getPlan', data);
}

function showPlan(data) {
    const table = document.createElement('table')

    let tableHTML =   `
        <caption>
        日程表
    </caption>
    <tr>
        <th>时间( 7月26 )</th>
        <th>合伙人 A</th>
        <th>合伙人 B</th>
        <th>合伙人 C</th>
        <th>合伙人 D</th>
    </tr>
    `
}