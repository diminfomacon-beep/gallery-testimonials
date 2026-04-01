const csvUrl = 'YOUR_CSV_LINK';

fetch(csvUrl)
  .then(response => response.text())
  .then(data => {
    const rows = data.split('\n').slice(1);
    const container = document.getElementById('reviews-container');

    rows.forEach(row => {
      const columns = row.split(',');

      const name = columns[0];
      const product = columns[1];
      const rating = columns[2];
      const review = columns[3];
      const photo = columns[4];

      const stars = '★'.repeat(parseInt(rating));

      const card = document.createElement('div');
      card.classList.add('review-card');

      card.innerHTML = `
        <h3>${name}</h3>
        <small>${product}</small>
        <div class="stars">${stars}</div>
        <p>${review}</p>
        ${photo ? `<img src="${photo}" alt="Customer Photo">` : ''}
      `;

      container.appendChild(card);
    });
  });
