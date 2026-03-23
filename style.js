
class StyleInfo {
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }

  showDetails() {
    alert(`Style: ${this.name} Description: ${this.description}`);
  }
}

// Пример использования:
const styles = [
  new StyleInfo('Opium', 'Black colours in common, uncommon clothes shape...'),
  new StyleInfo('Oldmoney', 'Classy n rich style...'),
  new StyleInfo('Streetwear', 'Hoodies, Sneakers and baggy shapes ...'),
  new StyleInfo('Archive', 'Archive clothes, coming from previous colections...')
];


document.querySelectorAll('.style-card .card').forEach((card, index) => {
  card.addEventListener('click', () => {
    styles[index].showDetails();
  });
});
