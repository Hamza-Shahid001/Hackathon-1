var skillsSection = document.getElementById('skills');
var toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Skills';
toggleButton.addEventListener('click', function () {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
        toggleButton.textContent = 'Hide Skills';
    }
    else {
        skillsSection.style.display = 'none';
        toggleButton.textContent = 'Toggle Skills';
    }
});
skillsSection.parentNode.insertBefore(toggleButton, skillsSection);
