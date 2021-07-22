const iconLabels = document.querySelectorAll('label.iconLabel');
for (let i = 0; i < iconLabels.length; i++) {
  iconLabels[i].addEventListener('click', function () {
    if (!this.classList.contains('iconCheckbox')) {
      for (let sibling of this.parentNode.parentNode.children) {
        if (sibling !== this) sibling.classList.remove('selected');
      }
    }
    this.parentNode.classList.toggle('selected');
  });
}

const radioLabels = document.querySelectorAll('.radioGroup label');
for (let i = 0; i < radioLabels.length; i++) {
  radioLabels[i].addEventListener('click', function() {
    for (let sibling of this.parentNode.parentNode.children) {
      if (sibling !== this) sibling.classList.remove('selected');
    }
    this.parentNode.classList.toggle('selected');
  });
}