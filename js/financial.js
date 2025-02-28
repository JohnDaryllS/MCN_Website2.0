function showImages(buttonNumber) {
    const imagePaths = {
        1: ['image/Deliquency1.png', 'image/Deliquency2.png'],
        2: ['image/Earnings1.png', 'image/Earnings2.png'],
        3: ['image/Capital1.png', 'image/Capital2.png'],
        4: ['image/Control1.png', 'image/Control2.png'],
        5: ['image/Liquidition1.png', 'image/Liquidition2.png'],
        6: ['image/Provision1.png', 'image/Provision2.png'],
    };
    
    const img1 = document.getElementById('image1');
    const img2 = document.getElementById('image2');
    
    img1.style.opacity = '0';
    img2.style.opacity = '0';
    
    setTimeout(() => {
        img1.src = imagePaths[buttonNumber][0];
        img2.src = imagePaths[buttonNumber][1];
        
        img1.style.display = 'block';
        img2.style.display = 'block';
        
        img1.style.opacity = '1';
        
        setTimeout(() => {
            img2.style.opacity = '1';
        }, 2000);
    }, 500);
}