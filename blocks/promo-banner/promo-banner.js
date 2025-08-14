// blocks/promo-banner/promo-banner.js
export default function decorate(block) {
  block.innerHTML = `
    <div class="promo-content">
      <h2>Special Offer!</h2>
      <p>Sign up today and save 20%</p>
    </div>
  `;
}

