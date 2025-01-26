document.getElementById('saveBtn').addEventListener('click', function() {
    let lyrics = document.getElementById('lyrics').value;
    if (lyrics) {
        localStorage.setItem('songLyrics', lyrics);
        alert('Lyrics saved!');
    } else {
        alert('Please write some lyrics first!');
    }
});
