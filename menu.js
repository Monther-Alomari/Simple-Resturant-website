document.querySelectorAll('.meal-action').forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault(); 
      const card = this.closest('.card');
      const image = card.querySelector('.meal-image');
      image.src = "https://media.istockphoto.com/vectors/checkmark-vector-icon-put-a-green-symbol-on-the-white-background-vector-id1151872207?k=20&m=1151872207&s=170667a&w=0&h=NzKOi1fjRT-jYlohJ7a15LRWHC3wK0LjTu1fi9yOQYQ=";
      image.alt = "Meal Selected";
    });
  });