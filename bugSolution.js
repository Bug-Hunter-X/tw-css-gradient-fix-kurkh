```javascript
// tailwind.config.js
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        'blue-custom': '#007bff',
        'purple-custom': '#6f42c1',
      }
    }
  },
  plugins: [],
}

// bugSolution.js
<div class="bg-gradient-to-r from-blue-custom to-purple-custom">
  <!-- Content -->
</div>
```