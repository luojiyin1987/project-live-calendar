const selectA = document.getElementById('selectA')
const selectB = document.getElementById('selectB')

selectA.addEventListener('change', (e)=> {
    console.log(e.target.value)
    getPlan()
})

selectB.addEventListener('change', (e)=> {
    console.log(e.target.value)
    getPlan()
})


async  function getPlan(){
    const url = './plan'
    const res = await fetch(url)
    const data = await res.json()
    console.log('getPlan', data);
}