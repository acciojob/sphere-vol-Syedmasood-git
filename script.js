function volume_sphere() {
	let r=document.getElementById("radius").value;
	// r=Math.abs(r);
	let volume=(4/3)*Math.PI*Math.pow(r,3);
	volume=volume.toFixed(4);
	document.getElementById("volume").value=volume;
	// volume.innerText=formula;
	return false;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
