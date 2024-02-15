// SCRAPE chapter and timestamp information in YouTube vid
// 2024-02-15
// Eric Hepperle
var chapters = document.querySelectorAll('#contents ytd-macro-markers-list-item-renderer')

var sel__chName = 'h4.macro-markers'
var sel__timestamp = '#time'


function getChInfo(ch, i){
  
  info = {}

  var chNum = i<10 ? "0"+i : i

  var ts = ch.querySelector(sel__timestamp).innerText
  var mins = ts.split(':')[0]
  console.log(`mins: ${mins}`)
  

  info.chNum = chNum.toString()
  info.chName = ch.querySelector(sel__chName).innerText
  info.timestamp = mins < 10 ? "0"+ts : ts
  
  console.log(`Chapter: ${info.index} `, info)

  return info
}

chsData = []
chsMDTable = '| CH. Num| Timestamp | Chapter Name |\n'
chsMDTable += '|---|---|---|\n'

chapters.forEach( (ch,i) => {

  var chInfo = getChInfo(ch,i)
  var row = `| ${chInfo.chNum} | ${chInfo.timestamp} | ${chInfo.chName} |\n`

  chsMDTable += row

} )

console.table(chsData)
console.log(chsMDTable)