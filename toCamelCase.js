let s = 'tr_eeRrr-e';
function toCamelCase(str){
	let arr = [...str].map((x,i,a)=>{
		if (x==='_'|| x==='-') {a.slice(i,1); a[i+1] = a[i+1].toUpperCase() }
		else {return x;}	})
	return arr.join('');
}
console.log(toCamelCase(s));