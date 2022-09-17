const DUMMY_DATA = [
{'id':'d1', value:10,'region': 'USA'},
{'id':'d2', value:20,'region': 'Australia'},
{'id':'d3', value:5,'region': 'India'},
{'id':'d4', value:42,'region': 'China'}

]



d3.select('div')
    .selectAll('p')
    .data(DUMMY_DATA)
    .enter()
    .append('p')
    .text(dta => dta.region);