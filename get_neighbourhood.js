/* let s = 'tr_eeRrr-e';
function toCamelCase(str){
	let arr = [...str].map((x,i,a)=>{
		if (x==='_'|| x==='-') {a.slice(i,1); a[i+1] = a[i+1].toUpperCase() }
		else {return x;}	})
	return arr.join('');
}
console.log(toCamelCase(s)); */


matrix = [['3','4','5'],
					['6','7','8']]

function get_neighbourhood(type, arr, coordinates){
	let a = [];
	arr.unshift([]);
	arr.push([]);
			for (let i =1; i<arr.length; i++) {
			for (let j = 0; j<arr[i].length; j++){
				if (((i-1)===coordinates[0])&&(j===coordinates[1])) {
					if (type === "moore")
				{a.push(arr[i-1][j-1],arr[i-1][j],arr[i-1][j+1],
							  arr[i][j-1],							arr[i][j+1],
							  arr[i+1][j-1],arr[i+1][j],arr[i+1][j+1]    )}
					if (type === "von_neumann") {a.push(arr[i-1][j],arr[i][j-1],arr[i][j+1],arr[i+1][j])}
				}
			}
			}
  arr.shift();
	arr.pop();
	let b=[];
	a=a.map(x=>(x||x===0)? b.push(x): x);
  return b;
}
console.log(get_neighbourhood("moore",matrix,[1,1]))

