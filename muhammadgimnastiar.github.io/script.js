const anim = document.querySelectorAll('#anim-text path')

for (let i = 0; i < anim.length; i++) {
    console.log('Letter  is ',i, anim[i].getTotalLength());
    
}