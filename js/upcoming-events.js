function changeEvent(imageSrc, description) {
    document.getElementById('eventImage').style.backgroundImage = `url('${imageSrc}')`;
    document.getElementById('eventDescription').textContent = description;
}